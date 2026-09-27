// "use client";
// import {
//   FaUserMd,
//   FaProcedures,
//   FaMicroscope,
//   FaCapsules,
//   FaFlask,
// } from "react-icons/fa";

// export default function ServicesSection() {
//   const services = [
//     {
//       title: "Clinical Services",
//       icon: <FaUserMd size={40} />,
//       bg: "bg-red-600",
//     },
//     {
//       title: "Non-Cancer Services",
//       icon: <FaProcedures size={40} />,
//       bg: "bg-gray-700",
//     },
//     {
//       title: "Diagnostic Services",
//       icon: <FaMicroscope size={40} />,
//       bg: "bg-red-600",
//     },
//     {
//       title: "Pharmacy",
//       icon: <FaCapsules size={40} />,
//       bg: "bg-gray-700",
//     },
//     {
//       title: "Lab Collection Centers",
//       icon: <FaFlask size={40} />,
//       bg: "bg-red-600",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 py-16 px-6 text-center">
      
//       {/* 🔴 Title */}
//       <h2 className="text-3xl font-bold text-red-600 mb-12">
//         Our Services
//       </h2>

//       {/* 🔥 Cards */}
//       <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
//         {services.map((item, i) => (
//           <div
//             key={i}
//             className={`${item.bg} text-white rounded-xl p-6 flex flex-col items-center justify-between min-h-[260px] transition duration-300 hover:scale-105`}
//           >
//             {/* Icon */}
//             <div className="mb-4">{item.icon}</div>

//             {/* Title */}
//             <h3 className="font-semibold text-lg mb-3">
//               {item.title}
//             </h3>

//             {/* Description */}
//             <p className="text-sm mb-5">
//               Shaukat Khanum Memorial Cancer Hospital and Research
//               Centres in Lahore and Peshawar offer a wide range of
//               health care services.
//             </p>

//             {/* Button */}
//             <button className="border border-white px-4 py-1 text-sm rounded hover:bg-white hover:text-black transition">
//               Learn More
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";
import {
  FaUserMd,
  FaProcedures,
  FaMicroscope,
  FaCapsules,
  FaFlask,
} from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      title: "Clinical Services",
      icon: <FaUserMd size={36} />,
    },
    {
      title: "Non-Cancer Services",
      icon: <FaProcedures size={36} />,
    },
    {
      title: "Diagnostic Services",
      icon: <FaMicroscope size={36} />,
    },
    {
      title: "Pharmacy",
      icon: <FaCapsules size={36} />,
    },
    {
      title: "Lab Collection Centers",
      icon: <FaFlask size={36} />,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 px-6 text-center text-white">
      
      {/* 🔥 Title */}
      <h2 className="text-4xl font-extrabold mb-14 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
        Our Services
      </h2>

      {/* 🚀 Cards */}
      <div className="grid md:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-between min-h-[260px] shadow-lg hover:shadow-red-500/30 transition duration-500 hover:-translate-y-2 group"
          >
            {/* 🔶 Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 mb-5 shadow-md group-hover:scale-110 transition">
              {item.icon}
            </div>

            {/* 📝 Title */}
            <h3 className="font-semibold text-lg mb-3 group-hover:text-red-400 transition">
              {item.title}
            </h3>

            {/* 📄 Description */}
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Shaukat Khanum Memorial Cancer Hospital provides advanced healthcare
              services with expert medical professionals.
            </p>

            {/* 🔘 Button */}
            <button className="px-5 py-2 text-sm rounded-full border border-red-400 text-red-400 hover:bg-red-500 hover:text-white transition font-medium">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}