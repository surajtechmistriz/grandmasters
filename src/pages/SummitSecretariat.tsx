import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

import OfficialMessages from "../components/OfficialMessageSidebar";
import img from "../assets/images/logo_saikrishna.jpg";
import SponsorsCarousel from "../components/SponsorsCarousel";

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
        title: "The Grand Masters 2023 – New Delhi, Mumbai & Bengaluru Edition",
        description:
          "Focused on certain pre-identified set of topical issues and challenges that the In-House Counsel has been facing in order to ensure his role being implemented successfully. Apart from a common set of topics, we had also brought in an element of fireside chats between an in-house counsel & external counsel which was well received by the audience.",
      },
    ],
  },
  { year: "2021", title: "Lex Witness Summits 2021" },
];

const SummitSecretariat = () => {
  const [openSection, setOpenSection] = useState("2023");

  const toggleSection = (year) => {
    setOpenSection(openSection === year ? null : year);
  };

  return (
    <div className="min-h-screen bg-white mt-20 lg:mt-[100px]">
      {/* Header */}
      <div className="bg-[#d61f26] py-5 sm:py-">
        <h1 className="text-white text-center text-3xl tracking-[-0.2rem] sm:text-4xl md:text-5xl font-normal leading-tight px-4">
          The Lex Witness Summit Secretariat
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-15 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-8 lg:gap-10">
          {/* Left Section */}
          <div>
            <p className="font-roboto text-sm sm:text-[15px] leading-7 text-[#333] font-normal">
              Typically known as an A to A magazine – an adult to adult magazine
              as they say, Lex Witness has been a platform for knowledge sharing
              and thought leadership on various industry sectors. It is through
              the space of the magazine as well as the pedigree of summits which
              it has been organising ever since its inception that industry
              veterans bring into limelight various undercurrents of law in
              their respective chambers and corporate offices!
              <br />
              <br />
              A major development here at the action packed Summit Secretariat
              is the extension of these services to various organizations who
              have started entrusting Witness with the responsibility to create,
              execute and conclude Summit Concepts to meet their respective
              purposes. Witness through its already existing ecosystem of summit
              management team is all set to provide these services with an added
              expertise of quality content through the magazine presence. You
              have an idea and we have a summit to showcase it! For more details
              on our Summit Secretariat services please contact us. purposes.
          
            </p>

            <p className="mt-4 mb-6 text-sm sm:text-base font-bold text-[#333]">
              Meanwhile here's a gist of The Lex{" "}
              <span className="text-[#D0252D]">Witness</span> Summits so far;
            </p>

            {/* Accordion */}
            <div className="space-y-2">
              {summitData.map((item) => {
                const isOpen = openSection === item.year;

                return (
                  <div
                    key={item.year}
                    className="border border-gray-300 rounded-sm overflow-hidden"
                  >
                    {/* Header */}
                    <button
                      onClick={() => toggleSection(item.year)}
                      className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 text-left transition-colors cursor-pointer ${
                        isOpen
                          ? "bg-[#D12229] text-white"
                          : "bg-white text-[#333] hover:bg-gray-50"
                      }`}
                    >
                      {isOpen ? (
                        <FaCaretUp className="shrink-0" />
                      ) : (
                        <FaCaretDown className="text-[#D0252D] shrink-0" />
                      )}

                      <span className="text-sm sm:text-[15px] font-medium">
                        {item.title}
                      </span>
                    </button>

                    {/* Content */}
                    {isOpen && (
                      <div className="p-4 sm:p-6 lg:p-8 bg-white space-y-8 sm:space-y-12">
                        {item.content ? (
                          item.content.map((summit, index) => (
                            <div
                              key={index}
                              className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8 items-center border-b border-gray-100 last:border-0 pb-6 sm:pb-8 last:pb-0"
                            >
                              {/* Logo */}
                              <div className="w-full md:w-1/3 flex justify-center">
                                <img
                                  src={summit.logo}
                                  alt="Summit Logo"
                                  className="w-full max-w-[180px] sm:max-w-[220px] max-h-32 object-contain"
                                />
                              </div>

                              {/* Text */}
                              <div className="font-roboto w-full md:w-2/3 text-sm sm:text-[15px] leading-relaxed text-[#333]">
                                {summit.title && (
                                  <h3 className="font-bold text-[#333] mb-2">
                                    {summit.title}
                                  </h3>
                                )}

                                <p>{summit.description}</p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-[#8D93A0] italic">
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

          {/* Right Section */}
          <div>
            <OfficialMessages />
          </div>
        </div>

        {/* Sponsors */}
        <h1 className="text-2xl tracking-tighter sm:text-3xl md:text-4xl text-center my-10 sm:my-16">
          Sponsors & Partners
        </h1>
        <SponsorsCarousel />
      </div>
    </div>
  );
};

export default SummitSecretariat;
