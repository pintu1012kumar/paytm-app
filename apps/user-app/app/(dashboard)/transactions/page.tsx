// import { getServerSession } from "next-auth";
// import { OnRampTransactions } from "../../../components/OnRampTransactions";
// import { authOptions } from "../../lib/auth";
// import prisma from "@repo/db/client";

// async function getOnRampTransactions() {
//     const session = await getServerSession(authOptions);
    
//     if (!session?.user?.id) return []; // Prevent errors if session is undefined

//     const txns = await prisma.onRampTransaction.findMany({
//         where: {
//             userId: Number(session.user.id) // Ensure userId is a number
//         }
//     });

//     return txns.map(t => ({
//         time: t.startTime,
//         amount: t.amount,
//         status: t.status,
//         provider: t.provider
//     }));
// }

export default async function TransactionsPage() {
    // const transactions = await getOnRampTransactions(); // Await inside an async component

    return (
        <div className="w-full h-screen flex justify-center items-center">
            {/* <div className="pt-4">
                <OnRampTransactions transactions={transactions} />
            </div> */}
            Dashboard
        </div>

    );
}
