import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import icon6 from "../assets/icons/icon6.png";

const SummitGallery = () => {
  const [activeTab, setActiveTab] = useState("Bengaluru Edition");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0 });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const navigate = useNavigate();

  const tabs = [
    "Bengaluru Edition",
    "Mumbai Edition",
    "New Delhi Edition",
    "Chennai Edition",
    "Pune Edition",
    "Hyderabad Edition",
  ];

  const images = [1, 2, 3, 4, 5, 6, 7, 8];

  const updateIndicator = (index: number) => {
    const el = tabRefs.current[index];
    if (!el) return;

    const container = el.parentElement?.getBoundingClientRect();
    const tab = el.getBoundingClientRect();

    if (container) {
      setIndicatorStyle({
        left: tab.left - container.left + tab.width / 2,
      });
    }
  };

  const handleTabClick = (tab: string, index: number) => {
    setActiveTab(tab);
    updateIndicator(index);
  };

  // Set initial position
  useEffect(() => {
    const index = tabs.indexOf(activeTab);
    updateIndicator(index);
  }, []);

  return (
    <section className=" font-roboto pt-6 md:pb-16 bg-white ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <div className="flex justify-center">
          <img src={icon6} className="w-8 h-8 md:w-28 md:h-23" />
        </div>

        <h2 className="text-[#333] mb-2 text-3xl sm:text-4xl md:text-[50px] font-normal">
          Summit Gallery
        </h2>

        <p className="text-[#8D93A0] text-sm md:text-[15px] mb-8 md:mb-12">
          A Visual <span className="text-[#D0252D]">Overview of Past</span>{" "}
          Summit Proceedings
        </p>

        {/* Tabs Container */}
        <div className="relative border-b border-gray-200 mb-8">
          {/* Tabs */}
          <div className="overflow-x-auto whitespace-nowrap flex justify-center gap-6 sm:gap-x-8 pb-2">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => handleTabClick(tab, index)}
                className={`pb-3 sm:pb-4 text-xs sm:text-sm md:text-[15px] font-bold tracking-wide font-roboto transition cursor-pointer ${
                  activeTab === tab
                    ? "text-[#D0252D]"
                    : "text-[#333] hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Triangle Indicator */}
          <div className="absolute bottom-[-1px] left-0 w-full pointer-events-none">
            <div
              className="hidden sm:block absolute w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[10px] border-t-[#D0252D] transition-all duration-300"
              style={{
                left: `${indicatorStyle.left}px`,
                transform: "translateX(-50%)",
              }}
            />
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 mt-4">
          {images.map((img) => (
            <div
              key={img}
              className="aspect-[4/3] overflow-hidden bg-gray-100 "
            >
              <img
                src={`https://picsum.photos/seed/${img + activeTab}/600/450`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/past-event-detail")}
          className="text-[#D0252D] mt-8 md:mt-10 px-6 py-3 rounded-sm border cursor-pointer md:tracking-wid border-[#D0252D] text-[11px] font-bold tracking-[0.2rem] hover:bg-[#D0252D] hover:text-white transition"
        >
          VIEW MORE
        </button>
      </div>
    </section>
  );
};

export default SummitGallery;
