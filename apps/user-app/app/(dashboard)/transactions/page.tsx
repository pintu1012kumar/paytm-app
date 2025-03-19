import { getServerSession } from "next-auth";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";


async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}


const transactions = await getOnRampTransactions();
export default function() {
    return <div className="w-full h-screen flex justify-center items-center">
    {/* <Card className="w-3/5 p-6 shadow-md rounded-lg bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recent Transactions</h2>
        <div className="divide-y divide-gray-300">
            {transactions.length > 0 ? (
                transactions.map((txn, index) => (
                    <div key={index} className="flex justify-between items-center py-4 px-4 hover:bg-gray-100 rounded-md transition">
                        <div>
                            <p className="text-gray-700 font-medium">{txn.type === "credit" ? "Received INR" : "Sent INR"}</p>
                            <p className="text-xs text-gray-500">{new Date(txn.date).toDateString()}</p>
                        </div>
                        <p className={`text-lg font-semibold ${txn.type === "credit" ? "text-green-600" : "text-red-500"}`}>
                            {txn.type === "credit" ? "+" : "-"} ₹{txn.amount}
                        </p>
                    </div>
                ))
            ) : (
                <p className="text-gray-500 text-center py-4">No transactions found.</p>
            )}
        </div>
    </Card> */}
    <div className="pt-4">
        <OnRampTransactions transactions={transactions} />
    </div>
</div>
}