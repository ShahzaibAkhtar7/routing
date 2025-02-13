import { FaTelegramPlane, FaTwitter, FaDiscord } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center min-h-screen px-6 sm:px-12">
      <div className="text-center">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">Most liquid</h1>
        <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight">primary market</h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl">
          Claim first access to the most important tokens in crypto.
        </p>
      </div>
      
      <div className="mt-10 flex space-x-6 z-10">
        <button className="bg-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-700 transition">
          <FaTelegramPlane className="text-white text-2xl" />
        </button>
        <button className="bg-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-700 transition">
          <FaTwitter className="text-white text-2xl" />
        </button>
        <button className="bg-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-700 transition">
          <FaDiscord className="text-white text-2xl" />
        </button>
      </div>
      
      <div className="mt-10 flex flex-wrap justify-center gap-8 w-full max-w-4xl px-4">
        <div className="bg-gray-900 p-6 rounded-xl text-center w-40 sm:w-48 shadow-lg">
          <p className="text-3xl font-bold">15x</p>
          <p className="text-sm text-gray-400">AVG ROI</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl text-center w-40 sm:w-48 shadow-lg relative">
            {/* <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                <FaTelegramPlane className="bg-gray-800 p-2 rounded-full text-white text-xl shadow-lg" />
                <FaTwitter className="bg-gray-800 p-2 rounded-full text-white text-xl shadow-lg" />
                <FaDiscord className="bg-gray-800 p-2 rounded-full text-white text-xl shadow-lg" />
            </div> */}
          <p className="text-3xl font-bold mt-8">200,100</p>
          <p className="text-sm text-gray-400">Participant</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl text-center w-40 sm:w-48 shadow-lg">
          <p className="text-3xl font-bold">$1 billion+</p>
          <p className="text-sm text-gray-400">Connected</p>
        </div>
      </div>
    </section>
  );
}