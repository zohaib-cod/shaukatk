import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="font-sans">

      {/* 🔴 NEWSLETTER */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg">
              Subscribe To Our Newsletter
            </h3>
            <p className="text-xs opacity-90">
              Get updates & latest news
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
            <input className="h-10 px-3 rounded-md text-black w-full md:w-auto focus:outline-none" placeholder="Name" />
            <input className="h-10 px-3 rounded-md text-black w-full md:w-auto focus:outline-none" placeholder="Email" />
            <input className="h-10 px-3 rounded-md text-black w-full md:w-auto focus:outline-none" placeholder="Phone" />
            <button className="h-10 bg-white text-red-600 px-5 rounded-md font-medium hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ⚪ MAIN FOOTER */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          
          {/* LOGO */}
          <div className="flex flex-col items-start gap-3">
            <Image src="/Sk1.jpg" alt="award" width={90} height={90} />
            <Image src="/Sk2.jpg" alt="award" width={110} height={90} />
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 border-b pb-1 text-sm">
              Patients & Families
            </h4>
            <ul className="space-y-1 text-sm text-gray-600">
              {[
                "Schedule an Appointment",
                "View Your Lab Results",
                "Financial Assistance Programme",
                "Find a Doctor"
              ].map((item, i) => (
                <li key={i} className="hover:text-red-600 cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-3 border-b pb-1 text-sm">
              Donate
            </h4>
            <ul className="space-y-1 text-sm text-gray-600">
              {[
                "Volunteer",
                "Student Ambassador",
                "Institution Ambassador",
                "Shaukat Khanum Tigers",
                "Blood Donors Club"
              ].map((item, i) => (
                <li key={i} className="hover:text-red-600 cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 border-b pb-1 text-sm">
              Contact Us
            </h4>

            <ul className="space-y-1 text-sm text-gray-600 mb-3">
              <li className="hover:text-red-600 cursor-pointer">Feedback</li>
              <li className="hover:text-red-600 cursor-pointer">Notices & Tenders</li>
            </ul>

            {/* MAP */}
            <div className="rounded-md overflow-hidden border">
              <iframe
                src="https://maps.google.com/maps?q=Shaukat%20Khanum%20Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[120px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* ⚪ INFO BAR */}
      <div className="border-t bg-white py-3">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-2">
          
          <div className="flex flex-wrap gap-3 text-xs md:text-sm">
            <span className="hover:text-red-600 cursor-pointer">📞 +92 42 3590 5000</span>
            <span className="hover:text-red-600 cursor-pointer">📞 0800 11555</span>
            <span className="hover:text-red-600 cursor-pointer">💰 +92 300 0666 363</span>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-2">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
              <div key={i} className="bg-gray-200 p-2 rounded-full hover:bg-red-600 hover:text-white cursor-pointer transition">
                <Icon size={12} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ⚫ COPYRIGHT */}
      <div className="bg-black text-white text-center text-xs py-2 tracking-wide">
        © All Rights Reserved By{" "}
        <span className="text-red-500 font-semibold">
          Shaukat Khanum Memorial Trust
        </span>
      </div>
    </div>
  );
}