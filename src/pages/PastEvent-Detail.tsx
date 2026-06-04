import React, { useState } from "react";
import img1 from "../assets/images/detail.jpg";

const speakers = [
  "Aakanksha Munjhal, Partner, Saikrishna & Associates",
  "Alpa Sood, Director – Legal, India, Marvell Technology",
  "Amit Anand, Director – Legal, Adobe",
  "Dhara Doshi, Head – Legal, Decathlon",
  "Dr. Jayaram Raghunath, Professor & Dean, School Of Law, Mahindra University",
  "Dr. Sonal Verma, Partner & Global Leader (Markets & Strategy), Dhir & Dhir Associates",
  "Gitanjali Miriam Mathew, Associate Partner, Saikrishna & Associates",
  "Harish Chandran Avaronnan, Head Of Intellectual Property & Licensing, India, Novonesis",
  "Hiranmai Rallabandi, General Counsel & Chief Governance Officer, India, WeWork",
  "K. Vijayshyam Acharya, Head – Legal & Company Secretary, Redington",
  "Kartikay Singh, Senior Associate, ADP Law Offices",
  "Lahar Appaiah, Counsel, IBM India",
  "Natasha Wilson, General Counsel, SUN Mobility",
  "Neha Sachdev Munjral, Director – Legal, United Breweries",
];

const galleryImages = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  image: img1,
}));

const EditionOverview = () => {
  const [activeTab, setActiveTab] = useState("speakers");

  return (
    <div className="min-h-screen bg-white mt-20 lg:mt-[100px]">
      {/* Header */}
      <div className="bg-[#D0252D] py-4 sm:py-7">
        <h1 className="text-center text-white text-2xl tracking-[-0.2rem] sm:text-3xl md:text-[35px] font-normal px-4">
          The Grand Masters 2026, Bengaluru Edition - An Overview
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-14">
        {/* Tabs */}
        <div className="flex justify-center border-b gap-0.5 border-[#D0252D]">
          <button
            onClick={() => setActiveTab("speakers")}
            className={`font-roboto px-4 sm:px-1 py-5 text-sm font-bold border border-b-0 transition cursor-pointer ${
              activeTab === "speakers"
                ? "bg-[#D0252D] text-white border-[#D0252D]"
                : "bg-white text-[#333] border-gray-300"
            }`}
          >
            Speakers
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={` font-roboto px-4 sm:px-1 py-5 text-sm font-bold border border-b-0 transition cursor-pointer ${
              activeTab === "gallery"
                ? "bg-[#D0252D] text-white border-[#D0252D]"
                : "bg-white text-[#333] border-gray-300"
            }`}
          >
            Gallery
          </button>
        </div>

        {/* Speakers Tab */}
        {activeTab === "speakers" && (
          <div className="mt-4 px-2 sm:px-4 md:px-8 pb-8">
            <div className="space-y-1">
              {speakers.map((speaker, index) => {
                const [name, ...details] = speaker.split(",");

                return (
                  <p
                    key={index}
                    className="font-roboto text-sm sm:text-[15px] leading-7 text-[#333]"
                  >
                    <span className="font-bold">{name}</span>
                    {details.length > 0 && `,${details.join(",")}`}
                  </p>
                );
              })}
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === "gallery" && (
          <div className="py-6 sm:py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5">
              {galleryImages.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden bg-white shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={`Gallery ${item.id}`}
                    className="w-full h-[220px] object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditionOverview;