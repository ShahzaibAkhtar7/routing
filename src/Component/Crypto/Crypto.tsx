export default function Crypto() {
    return (
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 sm:px-12 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Left side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.ctfassets.net/c5bd0wqjc7v0/6TEOvIYU6qtgLm87Y4mK5s/4171df02eabc835c518884c2b3476380/hero_3x_B.png?fm=webp&q=100&w=1180"
            alt="Crypto UI"
            className="max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
        
        {/* Right side - Text and Signup Form */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white">The future of money is here</h1>
          <p className="mt-4 text-lg text-white max-w-xl">
            We're the most trusted place for people and businesses to buy, sell, and manage crypto.
          </p>
          
          <div className="mt-6">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email address</label>
            <div className="mt-2 flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <input
                type="email"
                id="email"
                placeholder="satoshi@nakamoto.com"
                className="flex-1 px-4 py-3 outline-none text-white"
              />
              <button className="bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition">Sign up</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  