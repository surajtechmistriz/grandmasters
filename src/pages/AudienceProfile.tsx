import React from "react";
import OfficialMessages from "../components/OfficialMessageSidebar";

const organizations = [
  ["3M India", "9X Media", "ABB India"],
  ["Accel Partners", "Accenture", "ACCOR"],
  ["Accuracy", "Adani Group", "Adani Ports And SEZ"],
  ["Adidas Group", "Aditya Birla Fashion and Retail", "ADP India"],
  ["Advaya Legal", "AGS Health", "Ahuja Group"],
  ["Air Infotech", "Airtel", "AkzoNobel India"],
  ["3M India", "9X Media", "ABB India"],
  ["Accel Partners", "Accenture", "ACCOR"],
  ["Accuracy", "Adani Group", "Adani Ports And SEZ"],
  ["Adidas Group", "Aditya Birla Fashion and Retail", "ADP India"],
  ["Advaya Legal", "AGS Health", "Ahuja Group"],
  ["Air Infotech", "Airtel", "AkzoNobel India"],
  ["3M India", "9X Media", "ABB India"],
  ["Accel Partners", "Accenture", "ACCOR"],
  ["Accuracy", "Adani Group", "Adani Ports And SEZ"],
  ["Adidas Group", "Aditya Birla Fashion and Retail", "ADP India"],
  ["Advaya Legal", "AGS Health", "Ahuja Group"],
  ["Air Infotech", "Airtel", "AkzoNobel India"],
];

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

const AudienceProfile = () => {
  return (
    <div className="min-h-screen bg-[#white] mt-[100px]">
      {/* Header */}
      <div className="bg-[#d61f26] py-6">
        <h1 className="text-white text-center text-[50px] font-normal leading-[55px] tracking-tighter">
          Meet The Legal Maestros
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-10">
          {/* Left */}
          <div>
            {/* Paragraph */}
            <p className="text-[15px] leading-[28px] text-[#1d2b44] font-normal">
              <span className="text-[#d61f26] font-bold cursor-pointer hover:underline">
                The Grand Masters Summit Series
              </span>{" "}
              ever since its inception has always been a magnetic summit series
              for the industry professionals to attend not only from the core
              legal functions but all other allied functions as well.
              Irrespective of the industry sector, The Grand Masters has been a
              perfect mix of audience. To give you an idea of the participation
              profile so far at The Grand Masters, here’s a snapshot;
            </p>

            {/* Table */}
            <div className="mt-5 overflow-hidden  ">
              {/* Heading */}
              <div className="bg-[#d61f26] text-white font-semibold uppercase   leading-[24px] px-5 py-3 text-[14px]">
                Organizational Participation
              </div>

              {/* Rows */}
              {organizations.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 ${
                    index % 2 === 0 ? "bg-[white]" : "bg-[#e9e9e9]"
                  }`}
                >
                  {row.map((item, i) => (
                    <div
                      key={i}
                      className="px-4 py-3 border font-normal leading-[28px] border-[#dbdbdb] text-[14px] text-[#1d2b44]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="mt-5 overflow-hidden  ">
              {/* Heading */}
              <div className="bg-[#d61f26] text-white font-semibold uppercase   leading-[24px] px-5 py-3 text-[14px]">
                HIERARCHICAL PARTICIPATION
              </div>

              {/* Rows */}
              {organizations.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 ${
                    index % 2 === 0 ? "bg-[white]" : "bg-[#e9e9e9]"
                  }`}
                >
                  {row.map((item, i) => (
                    <div
                      key={i}
                      className="px-4 py-3 border font-normal leading-[28px] border-[#dbdbdb] text-[14px] text-[#1d2b44]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {messageYears.map((yearData, yearIndex) => (
              <div key={yearIndex}>
                <OfficialMessages
                  year={yearData.year}
                  messages={yearData.messages}
                />

                {/* Divider */}
                {yearIndex !== messageYears.length - 1 && (
                  <div className="border-b border-gray-300 my-8"></div>
                )}
              </div>
            ))}
          </div>
          
        </div>
        <h1 className="text-4xl text-center my-16">Sponsors & Partners</h1>
      </div>
    </div>
  );
};

export default AudienceProfile;
