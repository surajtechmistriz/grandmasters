import React, { useState } from 'react';
import { ThumbsUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SummitGallery = () => {
  const [activeTab, setActiveTab] = useState('Bengaluru Edition');

  const navigate = useNavigate();

  const tabs = [
    "Bengaluru Edition", "Mumbai Edition", "New Delhi Edition", 
    "Chennai Edition", "Pune Edition", "Hyderabad Edition"
  ];

  // Placeholder images - replace with your actual assets
  const images = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Header */}
        <div className="flex justify-center mb-4">
          <ThumbsUp size={40} className="text-[#d2232a] stroke-[1.5px]" />
        </div>
        <h2 className=" text-gray-800 mb-2 text-[50px] font-normal leading-[55px] font-roboto">Summit Gallery</h2>
        <p className="font-roboto text-gray-500 text-sm mb-12">
          A Visual <span className=" text-[#d2232a] text-[15px] font-normal leading-[28px] ">Overview of Past</span> Summit Proceedings
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 border-b border-gray-200 relative mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-bold transition-all relative text-[15px] tracking-widest leading-[28px] font-roboto cursor-pointer ${
                activeTab === tab ? 'text-[#d2232a]' : 'text-gray-600 hover:text-black'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <>
                  {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-[#d2232a]"></div> */}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[10px] border-t-[#d2232a]"></div>
                </>
              )}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-4">
          {images.map((img) => (
            <div key={img} className="aspect-[4/3] overflow-hidden bg-gray-100 group">
              <img 
                src={`https://picsum.photos/seed/${img + activeTab}/600/450`} 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      <button onClick={()=> navigate("/past-event-detail")} className="text-[#D0252D] mt-10 cursor-pointer rounded-sm px-5 py-4 tracking-[0.3rem] border border-[#D0252D] text-[11px] font-bold leading-[11px] font-roboto hover:bg-[#D0252D] hover:text-white transition">
              VIEW MORE
            </button>
      </div>
    </section>
  );
};

export default SummitGallery;