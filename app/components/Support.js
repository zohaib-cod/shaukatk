"use client";
import Image from "next/image";

export default function SupportUs() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* 🔴 Heading */}
        <h2 className="text-center text-4xl font-extrabold mb-14 text-red-600 tracking-wide">
          Support Us
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300">

            {/* Image */}
            <div className="relative w-full h-[240px] rounded-xl overflow-hidden group">
              <Image
                src="/Sk.jpg"
                alt="Hospital"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Donate */}
            <div className="mt-6">
              <h3 className="text-red-600 font-semibold text-lg mb-1">
                Ways To Donate
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                Choose your preferred donation method securely.
              </p>

              <select className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Online</option>
                <option>Bank Transfer</option>
                <option>Cash</option>
              </select>

              <button className="w-full mt-4 bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-lg font-semibold shadow">
                Donate Now
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-center">

            <div className="text-sm text-gray-500 mb-2">
              Shaukat Khanum Memorial Cancer Hospital
            </div>

            <p className="text-gray-600">
              Bari Eid... Bara Itmenan with
            </p>

            <h1 className="text-3xl font-extrabold mt-3 text-red-600">
              QURBANI CAMPAIGN
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Booking Open Now
            </p>

            <button className="mt-6 px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 transition text-white font-semibold shadow">
              CLICK HERE
            </button>

            {/* Indicators */}
            <div className="mt-8 flex justify-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}