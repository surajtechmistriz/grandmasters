import React, { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import icon from "../assets/icons/icon1.png";

const SummitAgenda = () => {
  const [expandedId, setExpandedId] = useState(5);
  const [activeTab, setActiveTab] = useState("hyderabad");

  //  HYDERABAD DATA (your original)
  const hyderabadAgenda = [
    { id: 1, time: "08:30 AM", title: "REGISTRATION & WELCOME REFRESHMENTS" },
    {
      id: 2,
      time: "09:15 AM",
      title: "WELCOME REMARKS BY LEX ",
      highlight: "WITNESS",
    },
    {
      id: 3,
      time: "09:30 AM",
      title: "RESERVED FOR ",
      highlight: "SPECIAL",
      suffix: " ADDRESS",
    },
    {
      id: 4,
      time: "09:45 AM",
      title: "RESERVED FOR ",
      highlight: "KEYNOTE",
      suffix: " ADDRESS",
    },
    {
      id: 5,
      time: "10:00 AM",
      title: "RESERVED FOR THE GRAND ",
      highlight: "MASTER'S",
      suffix: " ADDRESS",
    },
    {
      id: 6,
      time: "10:15 AM",
      title: "#THE STRATEGIC GC – ",
      highlight: "BOARDROOM RISK & LEADERSHIP",
      hasSpeakers: true,
      speakers: [
        {
          name: "K. VIJAYSHYAM ACHARYA",
          role: "Head - Legal & Company Secretary, Redington",
          img: "https://i.pravatar.cc/150?u=1",
        },
        {
          name: "HIRANMAI RALLABANDI",
          role: "General Counsel & Chief Governance Officer, India, WeWork",
          img: "https://i.pravatar.cc/150?u=2",
        },
        {
          name: "NATASHA WILSON",
          role: "General Counsel, SUN Mobility",
          img: "https://i.pravatar.cc/150?u=3",
        },
        {
          name: "PRESEEDHA PREMNATH",
          role: "General Counsel, Stellaris Venture Partners",
          img: "https://i.pravatar.cc/150?u=4",
        },
      ],
    },
  ];

  //  AHMEDABAD DATA (copy + change if needed)
  const ahmedabadAgenda = [
    { id: 1, time: "09:00 AM", title: "REGISTRATION & NETWORKING BREAKFAST" },
    {
      id: 2,
      time: "09:30 AM",
      title: "OPENING KEYNOTE ADDRESS",
      highlight: "LEGAL FUTURE",
    },
    {
      id: 3,
      time: "10:15 AM",
      title: "SPECIAL PANEL DISCUSSION",
      highlight: "CORPORATE LAW",
    },
    {
      id: 4,
      time: "11:00 AM",
      title: "#INDUSTRY INSIGHTS – ",
      highlight: "TRANSFORMATION",
      hasSpeakers: true,
      speakers: [
        {
          name: "JOHN DOE",
          role: "General Counsel, Example Corp",
          img: "https://i.pravatar.cc/150?u=10",
        },
      ],
    },
  ];

  //  switch data dynamically
  const agendaItems =
    activeTab === "hyderabad" ? hyderabadAgenda : ahmedabadAgenda;

  return (
    <div className="max-w-5xl mx-auto py-8 md:pb-12 md:pt-4 px-4 bg-white font-roboto">
      {/* HEADER */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-">
          <div className="flex justify-center">
            <img
              src={icon}
              className="h-24 text-[#D0252D] text-4xl md:text-5xl"
            />
          </div>
        </div>
        <h1 className="font-roboto text-3xl sm:text-4xl md:text-[50px] font-normal leading-tight md:leading-[55px] md:tracking-tighter text-[#333] mb-8 px-2">
          {" "}
          The Summit Agenda
        </h1>

        {/*  TABS (UI SAME STYLE, ONLY LOGIC ADDED) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16 border-b border-gray-200 pb-0 relative font-roboto ">
          {" "}
          {/* HYDERABAD */}
          <div
            onClick={() => {
              setActiveTab("hyderabad");
              setExpandedId(5);
            }}
            className="pb-4 cursor-pointer relative text-center "
          >
            <p
              className={`text-xs sm:text-sm md:text-[15px]  font-bold leading-[28px] tracking-widest ${
                activeTab === "hyderabad" ? "text-[#D0252D]" : "text-[#333]"
              }`}
            >
              17TH JULY
            </p>

            <p
              className={`text-[15px] font-bold leading-[28px] tracking-widest  uppercase ${
                activeTab === "hyderabad" ? "text-[#D0252D]" : "text-[#333]"
              }`}
            >
              Hyderabad Edition
            </p>

            {/* 🔻 TRIANGLE */}
            {activeTab === "hyderabad" && (
              <div className="hidden sm:block absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[8px] border-t-[#D0252D]" />
            )}
          </div>
          {/* AHMEDABAD */}
          <div
            onClick={() => {
              setActiveTab("ahmedabad");
              setExpandedId(null);
            }}
            className="pb-4 cursor-pointer relative text-center "
          >
            <p
              className={`text-xs sm:text-sm md:text-[15px] font-bold leading-[28px] tracking-widest ${
                activeTab === "ahmedabad" ? "text-[#D0252D]" : "text-[#333]"
              }`}
            >
              22ND JULY
            </p>

            <p
              className={`text-[15px] font-bold leading-[28px] tracking-widest  uppercase ${
                activeTab === "ahmedabad" ? "text-[#D0252D]" : "text-[#333]"
              }`}
            >
              Ahmedabad Edition
            </p>

            {/* 🔻 TRIANGLE */}
            {activeTab === "ahmedabad" && (
              <div className="hidden sm:block absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[8px] border-t-[#D0252D]" />
            )}
          </div>
        </div>
      </div>

      {/* TIMELINE (UNCHANGED UI) */}
      <div className="relative ml-0 md:ml-20">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-gray-200"></div>
        <div className="space-y-0">
          {agendaItems.map((item) => (
            <div key={item.id} className="relative pl-12 md:pl-20 group">
              {/* marker */}
              <div className="absolute left-0 md:left-4 top-4 z-10 w-8 h-8 rounded-full bg-[#D0252D] flex items-center justify-center text-white italic font-black text-sm shadow-md">
                W
              </div>

              {/* content */}
              <div
                className={`py-6 border-b border-gray-100 ${
                  item.hasSpeakers ? "cursor-pointer" : ""
                }`}
                onClick={() =>
                  item.hasSpeakers &&
                  setExpandedId(expandedId === item.id ? null : item.id)
                }
              >
                {/* time */}
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <Clock size={14} />
                  <span>{item.time}</span>
                </div>

                {/* title */}
                <div className="font-roboto flex justify-between items-start gap-4">
                  <h3 className="text-base sm:text-lg md:text-[22px] font-bold leading-tight md:leading-[24px] text-[#333] tracking-tight">
                    {item.title}
                    <span className="text-[#D0252D]">{item.highlight}</span>
                    {item.suffix}
                  </h3>

                  {item.hasSpeakers && (
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        expandedId === item.id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* EXPAND UI (UNCHANGED) */}
                {item.hasSpeakers && expandedId === item.id && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
                    {item.speakers.map((speaker, idx) => (
                      <div key={idx} className="text-center">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                          <img
                            src={speaker.img}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition"
                          />
                        </div>

                        <h4 className="text-[#D0252D] font-black text-[10px] sm:text-[11px] mt-2 uppercase">
                          {speaker.name}
                        </h4>
                        <p className="text-[10px] text-[#333] px-2">
                          {speaker.role}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummitAgenda;
