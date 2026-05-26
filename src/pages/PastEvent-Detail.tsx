// EditionOverview.jsx

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

// Demo gallery images
const galleryImages = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  image: img1,
}));

const EditionOverview = () => {
  const [activeTab, setActiveTab] = useState("speakers");

  return (
    <div className="min-h-screen bg-[#white] mt-[100px]">
      {/* Header */}
      <div className="bg-[#d71920] py-5">
        <h1 className="text-center text-white tracking-tighter text-[28px] md:text-[35px] font-normal">
          The Grand Masters 2026, Bengaluru Edition - An Overview
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        {/* Tabs */}
        <div className="border-b border-[#d71920] space-x-0.5 flex justify-center cursor-pointer">
          <button
            onClick={() => setActiveTab("speakers")}
            className={`px-2 py-4 text-[14px] font-bold border border-b-0 transition cursor-pointer ${
              activeTab === "speakers"
                ? "bg-[#d71920] text-white border-[#d71920]"
                : "bg-white text-[#444] border-gray-300"
            }`}
          >
            Speakers
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={`px-2 py-4 text-[14px] font-bold border border-b-0 transition cursor-pointer ${
              activeTab === "gallery"
                ? "bg-[#d71920] text-white border-[#d71920]"
                : "bg-white text-[#444] border-gray-300"
            }`}
          >
            Gallery
          </button>
        </div>

        {/* Speakers */}
        {activeTab === "speakers" && (
          <div className="bg-[#white] pb-10 mt-2 px-4 md:px-8">
            <div className="space-y-1">
              {speakers.map((speaker, index) => {
                const parts = speaker.split(",");

                return (
                  <p
                    key={index}
                    className=" font-roboto text-[15px] leading-[28px]  text-[#444]"
                  >
                    <span className="font-roboto font-bold capitalize">{parts[0]}</span>
                    {","}
                    {parts.slice(1).join(",")}
                  </p>
                );
              })}
            </div>
          </div>
        )}

        {/* Gallery */}
        {activeTab === "gallery" && (
          <div className="py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
              {galleryImages.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md transition duration-300"
                >
                  <img
                    src={item.image}
                    alt={`Gallery ${item.id}`}
                    className="w-full h-[220px] object-cover cursor-pointer"
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
