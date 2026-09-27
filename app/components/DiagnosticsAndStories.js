import Image from "next/image";

export default function DiagnosticsAndStories() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-16">

      {/* 🔴 OUR DIAGNOSTICS */}
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-red-600 text-2xl font-bold mb-10 tracking-wide">
          Our Diagnostics
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          
          {/* Image */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
            <Image
              src="/person4.jpg"
              alt="Lab"
              width={500}
              height={300}
              className="rounded-lg object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-3">
            <h3 className="text-red-600 text-lg font-semibold">
              Pathology
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Shaukat Khanum Pathology Laboratories are one of the national
              largest and most sophisticated facilities. We offer a full range
              of tests covering hematology, microbiology, clinical chemistry,
              and molecular diagnostics with accurate and timely results.
            </p>

            <button className="mt-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-5 py-2 rounded-md shadow hover:from-red-700 hover:to-red-600 transition">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* 🔴 SUCCESS STORIES */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-center text-red-600 text-2xl font-bold mb-10 tracking-wide">
          Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          
          {/* CARD */}
          {[
            {
              img: "/person2.jpg",
              name: "Hamza",
              text: "Hamza was a 17-year-old college student when, in 2023, he began experiencing weakness in his legs..."
            },
            {
              img: "/person1.jpg",
              name: "Abu Hurera",
              text: "Abu Hurera is our son among three daughters and is very special to us..."
            },
            {
              img: "/person3.jpg",
              name: "Saba",
              text: "Saba, my three-year-old daughter, was lying on my lap..."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="mx-auto rounded-lg object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="font-semibold mt-4 text-gray-800">
                {item.name}
              </h3>

              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                {item.text}
              </p>

              <button className="mt-3 bg-red-600 text-white px-4 py-1.5 text-xs rounded-md hover:bg-red-700 transition">
                Read More
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}