import {
  Bookmark,
} from "lucide-react";

import sponserImg from "../assets/images/logo_saikrishna.jpg"

const sponsors = [
  {
    title: "Platinum Partner",
    image:sponserImg,
  },
  {
    title: "Gold Partner",
    image:sponserImg,
  },
  {
    title: "Silver Partner",
    image:sponserImg,
  },
  {
    title: "Silver Partner",
    image:sponserImg,
  },
  {
    title: "Silver Partner",
    image:sponserImg,
  },
  {
    title: "Silver Partner",
    image:sponserImg,
  },
  {
    title: "Platinum Partner",
    image:sponserImg,
  },
  {
    title: "Gold Partner",
    image:sponserImg,
  },
  {
    title: "Silver Partner",
    image:sponserImg,
  },
  {
    title: "Silver Partner",
    image:sponserImg,
  },
  {
    title: "Silver Partner",
    image:sponserImg,
  },

];

export default function SponsorsPartners() {
  return (
    <section className="bg-[#ffffff] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <Bookmark
            size={42}
            className="text-red-500 stroke-[1.5]"
          />
        </div>

        {/* Heading */}
        <h2 className="text-6xl font-medium text-center text-gray-800 mb-16">
          Sponsors & Partners
        </h2>

        {/* Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-[#ffffff] flex flex-col items-center justify-center py-14 px-6"
            >
              {/* Partner Type */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-12">
                {item.title}
              </h3>

              {/* Logo */}
              <img
                src={item.image}
                alt={item.title}
                className="max-h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}