import React, { useState } from "react";
import OfficialMessages from "../components/OfficialMessageSidebar";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import img from "../assets/images/logo_saikrishna.jpg"

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

const SummitSecretariat = () => {
  const [openSection, setOpenSection] = useState("2023");

  const toggleSection = (year) => {
    setOpenSection(openSection === year ? null : year);
  };

  const summitData = [
    { year: "2024", title: "Lex Witness Summits 2024" },
    {
      year: "2023",
      title: "Lex Witness Summits 2023",
      content: [
        {
          logo: img,
          description:
            "With focused tracks on the critical legal and regulatory issues in pharma, healthcare, and compliance, this is where the industry's foremost legal experts and corporate leaders come together to set the agenda for the future.",
        },
        {
          logo: img,
          title:
            "The Grand Masters 2023 – New Delhi, Mumbai & Bengaluru Edition",
          description:
            "focused on certain pre identified set of topical issues and challenges that the In-House Counsel has been facing in order to ensure his role being implemented successfully. Apart from a common set of topics we had also brought in an element of fireside chats between an in-house counsel & external counsel which was well received by the audience.",
        },
      ],
    },
    { year: "2021", title: "Lex Witness Summits 2021" },
  ];

  return (
    <div className="min-h-screen bg-[#white] mt-[100px]">
      {/* Header */}
      <div className="bg-[#d61f26] py-6">
        <h1 className="text-white text-center text-[50px] font-normal leading-[55px] tracking-tighter">
          The Lex Witness Summit Secretariat
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-14 py-14 ">
        <div className="grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-10 px-6">
          {/* Left */}
          <div>
            <p className="font-roboto text-[15px] leading-[28px] text-[#1d2b44] font-normal">
              Typically known as an A to A magazine – an adult to adult magazine
              as they say, Lex Witness has been a platform for knowledge sharing
              and thought leadership on various industry sectors. It is through
              the space of the magazine as well as the pedigree of summits which
              it has been organising ever since its inception that industry
              veterans bring into limelight various undercurrents of law in
              their respective chambers and corporate offices! A major
              development here at the action packed Summit Secretariat is the
              extension of these services to various organizations who have
              started entrusting Witness with the responsibility to create,
              execute and conclude Summit Concepts to meet their respective
              purposes. Witness through its already existing ecosystem of summit
              management team is all set to provide these services with an added
              expertise of quality content through the magazine presence. You
              have an idea and we have a summit to showcase it! For more details
              on our Summit Secretariat services please contact us.
            </p>

            <p className="mb-6 text-[16px] font-bold text-gray-800">
              Meanwhile here's a gist of The Lex{" "}
              <span className="text-[#d2232a]">Witness</span> Summits so far;
            </p>

            <div className="space-y-2 ">
              {summitData.map((item) => {
                const isOpen = openSection === item.year;

                return (
                  <div
                    key={item.year}
                    className="border border-gray-300 rounded-sm overflow-hidden"
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleSection(item.year)}
                      className={`w-full flex items-center gap-3 p-3 text-left transition-colors cursor-pointer ${
                        isOpen
                          ? "bg-[#D12229] text-white"
                          : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {isOpen ? (
                        <FaCaretUp />
                      ) : (
                        <FaCaretDown className="text-[#d2232a]" />
                      )}
                      <span className="text-[15px] font-medium">
                        {item.title}
                      </span>
                    </button>

                    {/* Accordion Content */}
                    {isOpen && (
                      <div className="p-8 bg-white space-y-12">
                        {item.content ? (
                          item.content.map((summit, idx) => (
                            <div
                              key={idx}
                              className="flex flex-col md:flex-row gap-8 items-center border-b border-gray-100 last:border-0 pb-8 last:pb-0"
                            >
                              <div className="w-full md:w-1/3 flex justify-center">
                                <img
                                  src={summit.logo}
                                  alt="Summit Logo"
                                  className="max-h-32 object-contain"
                                />
                              </div>
                              <div className="w-full md:w-2/3 text-[14px] leading-relaxed text-gray-700">
                                {summit.title && (
                                  <h3 className="font-bold text-gray-800 mb-2">
                                    {summit.title}
                                  </h3>
                                )}
                                <p>{summit.description}</p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-500 italic">
                            Details for {item.year} coming soon...
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div>
            <OfficialMessages />
          </div>
        </div>
        <h1 className="text-4xl text-center my-16">Sponsors & Partners</h1>
      </div>
    </div>
  );
};

export default SummitSecretariat;
