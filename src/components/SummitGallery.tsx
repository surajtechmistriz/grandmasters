import React, { useState } from "react";
import { ThumbsUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import icon6 from "../assets/icons/icon6.png"

const SummitGallery = () => {
  const [activeTab, setActiveTab] = useState("Bengaluru Edition");

  const navigate = useNavigate();

  const tabs = [
    "Bengaluru Edition",
    "Mumbai Edition",
    "New Delhi Edition",
    "Chennai Edition",
    "Pune Edition",
    "Hyderabad Edition",
  ];

  // Placeholder images - replace with your actual assets
  const images = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="py-10 md:pb-16 bg-white font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <div className="flex justify-center ">
          <img src={icon6} className="text-[#d2232a] stroke-[1.5px] w-8 h-8 md:w-28 md:h-23" />
        </div>
        <h2 className="text-gray-800 mb-2 text-3xl sm:text-4xl md:text-[50px] font-normal leading-tight md:leading-[55px] font-roboto">
          {" "}
          Summit Gallery
        </h2>
        <p className="font-roboto text-gray-500 text-sm md:text-[15px] mb-8 md:mb-12 px-2">
          {" "}
          A Visual{" "}
          <span className="text-[#d2232a] text-sm md:text-[15px] font-normal leading-relaxed md:leading-[28px]">
            {" "}
            Overview of Past
          </span>{" "}
          Summit Proceedings
        </p>

        {/* Tab Navigation */}
        <div className="overflow-x-auto whitespace-nowrap flex gap-6 pb-2 justify-center items-center gap-3 sm:gap-x-8 sm:gap-y-4 border-b border-gray-200 relative mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 sm:pb-4 text-xs sm:text-sm md:text-[15px] font-bold transition-all relative tracking-wide md:tracking-widest leading-relaxed md:leading-[28px] font-roboto cursor-pointer ${
                activeTab === tab
                  ? "text-[#d2232a]"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <>
                  {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-[#d2232a]"></div> */}
                  <div className="hidden sm:block absolute -bottom-2.5 left-1/2 -translate-x-1/2  w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[10px] border-t-[#d2232a]"></div>
                </>
              )}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-1 mt-4">
          {images.map((img) => (
            <div
              key={img}
              className="aspect-[4/3] overflow-hidden bg-gray-100 group rounded-md"
            >
              <img
                src={`https://picsum.photos/seed/${img + activeTab}/600/450`}
                alt="Gallery"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate("/past-event-detail")}
          className="text-[#D0252D] mt-8 md:mt-10 cursor-pointer rounded-sm w-full sm:w-auto px-6 py-4 tracking-[0.2rem] md:tracking-[0.3rem] border border-[#D0252D] text-[11px] font-bold leading-[11px] font-roboto hover:bg-[#D0252D] hover:text-white transition"
        >
          VIEW MORE
        </button>
      </div>
    </section>
  );
};

export default SummitGallery;
