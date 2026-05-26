import React from "react";
import { useNavigate } from "react-router-dom";

const messageYears = [
  {
    year: "2025",
    messages: [
      {
        name: "Hon'ble Justice Manmohan",
        role: "Judge",
        org: "Supreme Court of India",
      },
      {
        name: "Dr. Lalit Bhasin",
        role: "President",
        org: "Society of Indian Law Firms",
      },
      {
        name: "Bansuri Swaraj",
        role: "Senior Advocate",
        org: "Supreme Court of India",
      },
      {
        name: "Ms. Veta T. Richardson",
        role: "President & CEO, ACC",
        org: "",
      },
    ],
  },

  {
    year: "2024",
    messages: [
      {
        name: "Justice Rajiv Shakdher",
        role: "Judge",
        org: "Delhi High Court",
      },
      {
        name: "Dr. Abhishek Manu Singhvi",
        role: "Senior Advocate",
        org: "Supreme Court of India",
      },
    ],
  },

  {
    year: "2023",
    messages: [
      {
        name: "Justice Indu Malhotra",
        role: "Former Judge",
        org: "Supreme Court of India",
      },
      {
        name: "Harish Salve",
        role: "Senior Advocate",
        org: "Supreme Court of India",
      },
    ],
  },
];

const OfficialMessagesSidebar = () => {
  const navigate = useNavigate();

  return (
    <div>
      {messageYears.map((yearData, yearIndex) => (
        <div key={yearIndex} className="font-roboto">
          {/* Heading */}
          <h2 className="text-[20px] font-normal leading-[23px] text-[#1d2b44] mb-5">
            {yearData.year} Official Messages
          </h2>

          {/* Messages */}
          <div className="space-y-6">
            {yearData.messages.map((item, index) => (
              <div key={index}>
                <h3 className="font-bold text-[15px] leading-[28px] text-[#1d2b44]">
                  {item.name}
                </h3>

                <p className="text-[15px] font-normal leading-[28px] text-[#1d2b44] mt-1">
                  {item.role}
                </p>

                {item.org && (
                  <p className="text-[12px] font-normal leading-[23px] text-[#1d2b44] mt-1">
                    {item.org}
                  </p>
                )}

                <button
                  onClick={() => navigate("/official-message")}
                  className="text-[#d61f26] text-[15px] font-normal leading-[28px] mt-1 hover:underline cursor-pointer"
                >
                  Read More...
                </button>
              </div>
            ))}
          </div>

          {/* Divider */}
          {yearIndex !== messageYears.length - 1 && (
            <div className="border-b border-gray-300 my-8"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OfficialMessagesSidebar;