"use client";

import Image from "next/image";
import { Search } from "lucide-react";

export default function Navbar() {
  const menu = [
    {
      title: "About Us",
      dropdown: [
        { name: "Our Mission", link: "page" },
        // { name: "Leadership", link: "#" },
        // { name: "History", link: "#" },
      ],
    },
    {
      title: "Patient & Families",
      dropdown: [
        { name: "Appointments", link: "#" },
        { name: "Lab Results", link: "#" },
        { name: "Find a Doctor", link: "#" },
      ],
    },
    {
      title: "Our Network",
      dropdown: [
        { name: "Hospitals", link: "#" },
        { name: "Clinics", link: "#" },
        { name: "Locations", link: "#" },
      ],
    },
    {
      title: "Healthcare Professionals",
      dropdown: [
        { name: "Research", link: "#" },
        { name: "Training", link: "#" },
        { name: "Careers", link: "#" },
      ],
    },
    {
      title: "Donors",
      dropdown: [
        { name: "Donate", link: "#" },
        { name: "Zakat", link: "#" },
        { name: "Volunteer", link: "#" },
      ],
    },
    {
      title: "Join Us",
      dropdown: [
        { name: "Jobs", link: "#" },
        { name: "Internships", link: "#" },
        { name: "Apply Now", link: "#" },
      ],
    },
  ];

  return (
    <div className="w-full">

      {/* 🔝 TOP BAR */}
      <div className="flex items-center justify-between px-6 py-3 bg-gray-100">

        <div className="flex items-center gap-3">
          <Image src="/Sk1.jpg" alt="logo" width={50} height={50} />
          <div>
            <h1 className="text-lg font-semibold">
              Shaukat Khanum Memorial Trust
            </h1>
            <p className="text-sm text-gray-600">
              شوکت خانم میموریل ٹرسٹ
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm hover:text-red-600">
            Contact Us
          </a>
          <a href="#" className="text-sm hover:text-red-600">
            Lab Services
          </a>

          <button className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700">
            Donate Now
          </button>

          <div className="flex gap-2 text-gray-600">
            <span>f</span>
            <span>x</span>
            <span>▶</span>
            <span>📸</span>
          </div>

          <div className="flex items-center border rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 outline-none"
            />
            <button className="bg-red-600 text-white px-3 py-2">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 🔴 MENU BAR */}
      <div className="bg-red-600 text-white flex justify-center">
        <div className="flex w-full max-w-6xl">

          {menu.map((item, i) => (
            <div
              key={i}
              className="relative group flex-1 text-center py-3 border-r border-red-400"
            >
              {/* Main */}
              <div className="hover:bg-red-700 cursor-pointer">
                {item.title} ▾
              </div>

              {/* Dropdown */}
              <div className="absolute left-0 top-full w-full bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
                {item.dropdown.map((sub, idx) => (
                  <a
                    key={idx}
                    href={sub.link}
                    className="block px-4 py-2 hover:bg-red-100 hover:text-red-600 text-sm"
                  >
                    {sub.name}
                  </a>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}