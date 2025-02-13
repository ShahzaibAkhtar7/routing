import { useState } from "react";
import { Bitcoin } from "lucide-react";

export default function ExploreCrypto() {
  const [activeTab, setActiveTab] = useState("tradable");

  const tradableAssets = [
    { name: "Bitcoin", price: "PKR 27,383,318.64", change: "0.15%", icon: <Bitcoin className="text-orange-500" /> },
    { name: "Ethereum", price: "PKR 754,069.92", change: "1.73%", icon: <Bitcoin className="text-blue-500" /> },
    { name: "XRP", price: "PKR 694.57", change: "2.18%", icon: <Bitcoin className="text-black" /> },
    { name: "Tether", price: "PKR 279.40", change: "0.00%", icon: <Bitcoin className="text-green-500" /> },
    { name: "Solana", price: "PKR 56,427.71", change: "-1.26%", icon: <Bitcoin className="text-purple-500" /> },
    { name: "USDC", price: "PKR 279.37", change: "0.00%", icon: <Bitcoin className="text-blue-400" /> },
  ];

  const topGainers = [
    { name: "Ethereum", price: "PKR 754,069.92", change: "1.73%", icon: <Bitcoin className="text-blue-500" /> },
    { name: "XRP", price: "PKR 694.57", change: "2.18%", icon: <Bitcoin className="text-black" /> },
    { name: "Bitcoin", price: "PKR 27,383,318.64", change: "0.15%", icon: <Bitcoin className="text-orange-500" /> },
  ];

  const data = activeTab === "tradable" ? tradableAssets : topGainers;

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white flex flex-row items-center justify-between p-16">
      <div className="text-left max-w-2xl flex-1">
        <h1 className="text-5xl font-bold">Explore crypto like Bitcoin, Ethereum, and Dogecoin</h1>
        <p className="mt-6 text-gray-300 text-xl">Simply and securely buy, sell, and manage hundreds of cryptocurrencies.</p>
        <button className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          See more assets
        </button>
      </div>

      <div className="flex flex-col items-center flex-1 w-full">
        <div className="flex space-x-6 mb-8">
          <button 
            className={`px-6 py-3 rounded-full font-semibold text-lg transition ${activeTab === "tradable" ? "bg-gray-800 text-white" : "bg-gray-700 text-gray-400"}`}
            onClick={() => setActiveTab("tradable")}
          >
            Tradable
          </button>
          <button 
            className={`px-6 py-3 rounded-full font-semibold text-lg transition ${activeTab === "topGainers" ? "bg-gray-800 text-white" : "bg-gray-700 text-gray-400"}`}
            onClick={() => setActiveTab("topGainers")}
          >
            Top Gainers
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {data.map((crypto, index) => (
            <div key={index} className="bg-white text-black p-8 rounded-xl shadow-lg flex flex-col items-center w-full">
              <div className="text-4xl mb-3">{crypto.icon}</div>
              <h3 className="font-semibold text-xl">{crypto.name}</h3>
              <p className="text-gray-500 text-lg">{crypto.price}</p>
              <p className={`mt-3 font-bold text-lg ${crypto.change.includes('-') ? "text-red-500" : "text-green-500"}`}>
                {crypto.change.includes('-') ? "↓" : "↑"} {crypto.change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
