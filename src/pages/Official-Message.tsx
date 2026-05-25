import React from "react";
import OfficialMessages from "../components/OfficialMessageSidebar";
import img from "../assets/images/lalit-bhasin-1.jpg"

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

const OfficialMessage = () => {
  return (
    <div className="min-h-screen bg-[#white] mt-[100px]">
      {/* Header */}
      <div className="bg-[#d61f26] py-6">
        <h1 className="text-white text-center text-[50px] font-normal leading-[55px] tracking-tighter">
          Official Messages
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-10 px-6">
          <section className="max-w-5xl mx-auto p-6 font-roboto text-[15px] leading-[24px] text-gray-800">
            {/* --- TOP SECTION: Text wrapping around image --- */}
            <div className="block overflow-hidden mb-6">
              {/* The Image must come first in the DOM to float correctly */}
              <img
                src={img}
                alt="Speaker"
                className="float-right ml-6 mb-4 w-[320px] h-auto object-cover"
              />

              <div className="text-justify">
                <p className="mb-4">
                  It's a great honor for us at{" "}
                  <span className="text-[#d12229] font-bold">
                    The Association of Corporate Counsel (ACC)
                  </span>{" "}
                  to collaborate and share content with{" "}
                  <span className="font-bold">Lex Witness</span>. ACC is a
                  global association that promotes the professional interests of
                  in-house lawyers, with 45,000 members in 85 countries,
                  including throughout India. We support the global corporate
                  counsel community by providing research, educational
                  programming, advocacy, and networking opportunities.
                </p>

                <p>
                  This is the "age of the general counsel." The digital
                  revolution has transformed the corporate landscape, from
                  international regulations to data privacy laws. Successful
                  companies are realizing that the general counsel (GC) or chief
                  legal officer (CLO) is indispensable at every level of
                  business operations. And more companies are realizing that
                  critical blunders can be prevented when the CLO has a seat at
                  the executive table.
                </p>
              </div>
            </div>

            {/* --- MIDDLE SECTION: Full Width Header --- */}
            <h2 className="font-bold text-[16px] tracking-tight mb-4 uppercase">
              Global and Local Challenges, and a Must Read Publication
            </h2>

            {/* --- BOTTOM SECTION: Two Column Text --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify">
              <div>
                <p>
                  Legal department budgets, changing regulatory regimes, and the
                  impact of global events on business operations keep General
                  Counsels and Chief Legal Officers vigilant. We must work
                  together to find solutions that advance our profession. This
                  is where <span className="italic">Lex Witness</span> becomes
                  invaluable. Its readers are high-profile, influential HNI's
                  who frame the laws and practice it. The magazine covers an
                  interesting bandwidth right from the core legal community,
                  including Judges, Lawyers, Bureaucrats, and Corporate...
                </p>
              </div>

              <div>
                <p className="mb-4">
                  Lex Witness offers an interesting blend of opinions,
                  reportage, and insights, essential for the entire fraternity
                  of in-house and external counsel. Its comprehensive nature
                  makes it for key decision makers.
                </p>

                <p>
                  For a better understanding of Lex Witness and our
                  collaborative efforts, please go through{" "}
                  <span className="font-bold text-[#d12229] border-b border-[#d12229] cursor-pointer hover:bg-red-50">
                    The Lex Witness Brand Deck
                  </span>
                  . We look forward to continued dialogue and professional
                  growth.
                </p>
              </div>
            </div>
          </section>

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

export default OfficialMessage;
