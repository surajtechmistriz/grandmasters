// PastEdition.jsx

import React from "react";
import img from "../assets/images/pastEdition.jpg";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    title: "The Grand Masters 2026 Editions",
    editions: ["Bengaluru", "New Delhi", "Mumbai"],
  },
  {
    title: "The Grand Masters 2025 Editions",
    editions: ["Hyderabad", "Pune", "Ahmedabad"],
  },
  {
    title: "The Grand Masters 2024 Editions",
    editions: ["Chennai", "Mumbai", "Delhi"],
  },
  {
    title: "The Grand Masters 2023 Editions",
    editions: ["Goa", "Kolkata", "Bengaluru"],
  },
];

const PastEdition = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen mt-[100px] bg-[#white]">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-10">
          {/* Header */}
          <div className="bg-[#d12229] py-8">
            <h1 className="font-roboto text-center text-[35px] font-normal -tracking-wider text-white">
              {section.title}
            </h1>
          </div>

          {/* Cards */}
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {section.editions.map((city, index) => (
                <div
                  key={index}
                  className="border border-gray-300 bg-white shadow-xl transition duration-300 "
                >
                  {/* Image */}
                  <div className="p-8">
                    <img
                      src={img}
                      alt={city}
                      className="w-full object-contain"
                    />
                  </div>

                  {/* Footer */}
                  <div className="pb-4 text-center">
                    <h2
                      onClick={() => navigate("/past-event-detail")}
                      className="font-roboto text-[20px] font-normal text-[#d71920] hover:underline cursor-pointer"
                    >
                      The Grand Masters
                    </h2>

                    <p className="font-roboto mt-2 text-[16px] font-normal text-[#b3b2b2]">
                      {city}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PastEdition;
