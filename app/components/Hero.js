
"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function HeroBanner() {
  const [activeTab, setActiveTab] = useState("support");

  return (
    <div className="w-full">

      {/* 🔥 HERO SECTION */}
      <div className="relative w-full">
        <div
          className="h-[75vh] bg-cover bg-center relative"
          style={{ backgroundImage: "url'/shaukat.jpg'" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

          <div className="absolute inset-0 flex items-center px-6 md:px-10">
            <div className="text-white max-w-xl space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Shaukat Khanum Memorial Cancer Hospital
              </h1>

              <p className="text-gray-200">
                Serving cancer patients with care, compassion & excellence
              </p>

              <div className="flex gap-4">
                <button className="bg-red-600 px-6 py-2 rounded-md shadow-lg hover:bg-red-700 transition">
                  Donate Now
                </button>
                <button className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
                  Zakat
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 Floating Card */}
        <div className="absolute bottom-[-90px] left-1/2 -translate-x-1/2 w-[92%] max-w-4xl bg-white/90 backdrop-blur-lg shadow-2xl rounded-xl overflow-hidden z-20">

          {/* Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("support")}
              className={`w-1/2 py-3 font-semibold ${
                activeTab === "support"
                  ? "text-red-600 border-b-2 border-red-600 bg-red-50"
                  : "text-gray-500"
              }`}
            >
              Support Our Cause
            </button>

            <button
              onClick={() => setActiveTab("lab")}
              className={`w-1/2 py-3 font-semibold ${
                activeTab === "lab"
                  ? "text-red-600 border-b-2 border-red-600 bg-red-50"
                  : "text-gray-500"
              }`}
            >
              Access Your Lab Report(s)
            </button>
          </div>

          {/* Content */}
          <div className="p-6 flex justify-center gap-4 flex-wrap">
            {activeTab === "support" ? (
              ["Donation", "Zakat", "Monthly Sadqa"].map((item, i) => (
                <button
                  key={i}
                  className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
                >
                  {item}
                </button>
              ))
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Lab Report ID"
                  className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition">
                  Search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 🔥 Spacing */}
      <div className="h-28"></div>

      {/* 🔥 SUPPORT SECTION */}
      <section className="relative w-full h-[420px] overflow-hidden">
        <Image
          src="/person6.jpg"
          alt="support"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

        <div className="relative z-10 h-full flex items-center px-6 md:px-16 text-white">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              How Your Support Transforms Lives
            </h2>

            <p className="text-gray-300 mb-6">
              Your donations help provide free cancer treatment and bring hope to patients.
            </p>

            {/* Stats */}
            <div className="flex gap-6 mb-8 flex-wrap">
              <div className="w-20 h-20 border-4 border-red-600 rounded-full flex items-center justify-center text-sm">
                PKR 12B
              </div>
              <div className="w-24 h-24 border-4 border-red-600 rounded-full flex items-center justify-center text-lg font-bold">
                75%
              </div>
              <div className="w-20 h-20 border-4 border-red-600 rounded-full flex items-center justify-center text-sm">
                92k
              </div>
            </div>

            {/* Learn More */}
            <button className="bg-red-600 px-6 py-2 rounded-md hover:bg-red-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* 🔥 HIRING SECTION */}
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              Hiring full-time Consultants at <br />
              Shaukat Khanum Karachi
            </h2>

            {/* View More Details (UPAR) */}
            <button className="bg-red-600 text-white px-6 py-3 rounded-md mb-6 hover:bg-red-700 transition">
              View More Details
            </button>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Shaukat Khanum Lab – Durust aur Barwaqt. Regular health checkups are essential for a healthy life.
            </p>

            <p className="text-gray-600">
              Email:
              <span className="text-red-600 font-semibold">
                <p>Shaukat Khanum Lab – Durust aur Barwaqt
We do our best to take care of our well-being, whether it’s morning walks, meeting friends, or hitting the gym, but we often overlook one vital thing: regular health checks.

With more than 180 collection centres across Pakistan, taking care of your health has never been easier.

You can also schedule a Home Sample Collection through the Shaukat Khanum App or by calling 03 111 756 000.</p>
                {" "}consultant.applications@skm.org.pk
              </span>
            </p>
          </div>

          {/* RIGHT SLIDER */}
          <div>
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation
              loop
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <SwiperSlide>
                <Image
                  src="/K.jpg"
                  alt="hospital"
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src="/K.jpg"
                  alt="hospital"
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
      </section>

    </div>
  );
}