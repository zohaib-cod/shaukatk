"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const awards = ["/9.jpg", "/8.jpg", "/7.jpg", "/6.jpg", "/5.jpg", "/4.jpg"];

const events = [
  {
    title: "Brussels Networking Event | Belgium",
    date: "May 8, 2026",
    location: "Brussels, Belgium",
    image: "/person5.jpg",
  },
  {
    title: "Barcelona Networking Event | Spain",
    date: "May 9, 2026",
    location: "Barcelona, Spain",
    image: "/person5.jpg",
  },
  {
    title: "Valencia Networking Event | Spain",
    date: "May 10, 2026",
    location: "Valencia, Spain",
    image: "/person6.jpg",
  },
];

const news = [
  "Shaukat Khanum Pathology Laboratory in Peshawar is Now CAP-Accredited",
  "Generous Donors Set A New Fundraising Record At Shaukat Khanum’s First 2026 Iftar Dinner In Lahore",
  "Shaukat Khanum Memorial Hospital Launches Zakat Campaign 2026",
];

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-14 px-6">
      
      {/* 🔥 Awards Section */}
      <section className="text-center mb-20">
        <h2 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent tracking-wide">
          Awards & Recognitions
        </h2>

        <Swiper
          modules={[Autoplay]}
          className="!ease-linear"
          spaceBetween={25}
          slidesPerView={5}
          loop={true}
          speed={3500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {awards.map((logo, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition duration-500 flex justify-center items-center hover:-translate-y-2">
                <Image
                  src={logo}
                  alt="award"
                  width={80}
                  height={80}
                  className="object-contain opacity-80 hover:opacity-100 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 🌍 News & Events */}
      <section>
        <h2 className="text-center text-4xl font-extrabold mb-12 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent tracking-wide">
          News & Events
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          
          {/* Events */}
          <div className="md:col-span-3 grid md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/30 transition duration-500 group hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-red-400 transition">
                    {event.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-1">
                    📅 {event.date}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    📍 {event.location}
                  </p>

                  <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 transition text-white text-sm px-4 py-2 rounded-lg w-full font-medium shadow-md">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* News Sidebar */}
          <div className="space-y-6">
            {news.map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-white/20 shadow-md hover:shadow-red-400/20 transition duration-500 hover:-translate-y-1"
              >
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {item}
                </p>
                <button className="text-red-400 text-xs font-semibold hover:text-white transition">
                  READ MORE →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <button className="bg-transparent border border-red-500 text-red-400 px-10 py-3 rounded-full hover:bg-red-500 hover:text-white transition font-semibold tracking-wide shadow-lg">
            View All Events
          </button>
        </div>
      </section>
    </main>
  );
}