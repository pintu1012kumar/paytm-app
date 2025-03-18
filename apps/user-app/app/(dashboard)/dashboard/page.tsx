"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 py-10">
     
      <div className="text-center text-white px-6">
        <h1 className="text-6xl font-extrabold drop-shadow-lg leading-tight">
          Welcome to Paytm App
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
          Send & receive money instantly with just a tap. Secure, fast, and easy transactions powered by cutting-edge technology.
        </p>
      </div>

     
      <div className="w-full flex justify-center my-12">
        <img
          src="https://www.paytmbank.com/_next/static/media/Banner.cd2d3eb3.jpg"
          alt="Paytm Banner"
          className="w-full max-w-4xl rounded-xl shadow-2xl"
        />
      </div>


      <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-xl">
        <h2 className="text-4xl font-semibold text-gray-800">
          Why Use Paytm?
        </h2>
        <ul className="mt-6 space-y-4 text-lg text-gray-700">
          <li className="flex items-center justify-center gap-2">
            ✅ Instant & Secure P2P Transfers
          </li>
          <li className="flex items-center justify-center gap-2">
            ✅ Pay Bills, Recharge & Shop Online
          </li>
          <li className="flex items-center justify-center gap-2">
            ✅ Trusted by Millions
          </li>
          <li className="flex items-center justify-center gap-2">
            ✅ Cashback & Rewards
          </li>
        </ul>

 
        <button
          onClick={() => router.push("/transfer")}
          className="mt-6 bg-blue-600 text-white font-bold py-3 px-12 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
        >
          + Add Money
        </button>
      </div>
    </div>
  );
}
