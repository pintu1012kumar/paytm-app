import prisma from "@repo/db/client";
import { AddMoney } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

type BalanceType = {
    amount: number;
    locked: number;
};

type OnRampTransactionType = {
    time: Date;
    amount: number;
    status: string;
    provider: string;
};

// ✅ Make this function Server-Safe
async function getBalance(sessionUserId: number | null): Promise<BalanceType> {
    if (!sessionUserId) return { amount: 0, locked: 0 };

    const balance = await prisma.balance.findFirst({
        where: { userId: sessionUserId }
    });

    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    };
}

// ✅ Make this function Server-Safe
async function getOnRampTransactions(sessionUserId: number | null): Promise<OnRampTransactionType[]> {
    if (!sessionUserId) return [];

    const txns = await prisma.onRampTransaction.findMany({
        where: { userId: sessionUserId }
    });

    return txns.map((t) => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }));
}

// ✅ Ensure this is a Server Component
export default async function Page() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id ? Number(session.user.id) : null;

    const balance = await getBalance(userId);
    const transactions = await getOnRampTransactions(userId);

    return (
        <div className="w-screen">
            <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
                Transfer
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
                <div>
                    <AddMoney />
                </div>
                <div>
                    <BalanceCard amount={balance.amount} locked={balance.locked} />
                    <div className="pt-4">
                        <OnRampTransactions transactions={transactions} />
                    </div>
                </div>
            </div>
        </div>
    );
}
