import React, { useState } from "react";
import img from "../assets/images/veta-217x300-1.jpg";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { LuNotepadText } from "react-icons/lu";
import bgImg from "../assets/images/chess.jpg";
import icon from "../assets/icons/icon1.png";

const SpeakersSection = () => {
  const tabs = [
    { id: "hyderabad", label: "Hyderabad Edition" },
    { id: "ahmedabad", label: "Ahmedabad Edition" },
  ];

  const [active, setActive] = useState("hyderabad");

  const speakers = [
    {
      name: "AAKANKSHA MUNJHAL",
      title: "Partner, Saikrishna &",
      image: img,
      linkedin: "#",
      location: "hyderabad",
    },
    {
      name: "ALPA SOOD",
      title: "Director - Legal, India, Marvell",
      image: img,
      linkedin: "#",
      location: "ahmedabad",
    },
    {
      name: "AMIT ANAND",
      title: "Director - Legal, India, Marvell",
      image: img,
      linkedin: "#",
      location: "hyderabad",
    },
    {
      name: "DHARA DOSHI",
      title: "Head - Legal, Decathlon",
      image: img,
      linkedin: "#",
      location: "ahmedabad",
    },
    {
      name: "AAKANKSHA MUNJHAL",
      title: "Partner, Saikrishna &",
      image: img,
      linkedin: "#",
      location: "hyderabad",
    },
    {
      name: "ALPA SOOD",
      title: "Director - Legal, India, Marvell",
      image: img,
      linkedin: "#",
      location: "ahmedabad",
    },
    {
      name: "AMIT ANAND",
      title: "Director - Legal, India, Marvell",
      image: img,
      linkedin: "#",
      location: "hyderabad",
    },
    {
      name: "DHARA DOSHI",
      title: "Head - Legal, Decathlon",
      image: img,
      linkedin: "#",
      location: "ahmedabad",
    },
  ];

  const filteredSpeakers = speakers.filter((s) => s.location === active);

  return (
    <section
      className="relative w-full min-h-screen bg-center bg-cover md:bg-fixed"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="mx-auto bg-white pt-8 px-4 md:px-0">
        {/* Heading */}
        <div className="text-center mb-6 max-w-4xl mx-auto">
          <div className="flex justify-center my-">
            <img
              src={icon}
              className="h-24 text-[#D0252D] text-4xl md:text-5xl"
            />
          </div>

          <h2 className="font-roboto text-3xl sm:text-4xl md:text-[50px] font-normal tracking-tighter leading-tighter md:leading-[55px] text-[#333] mb-3 px-2 ">
            Meet The Grand Masters!
          </h2>

          <p className="text-[#333] text-sm sm:text-base md:text-lg font-roboto font-normal leading-7 px-4">
            Invited & <span className="text-[#D0252D]">Confirmed Speakers</span>
          </p>
        </div>

        {/* Tabs */}
        <div className="relative flex flex-col max-w-4xl mx-auto sm:flex-row flex-wrap justify-center items-center gap-10 sm:gap-20 md:gap-60 mb-1">
          {tabs.map((tab, i) => (
            <span
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`font-roboto w-full sm:w-auto text-center px-4 sm:px-8 py-2 tracking-widest text-sm md:text-[15px] font-semibold uppercase md:mb-2 cursor-pointer transition ${
                active === tab.id
                  ? "text-[#D0252D]"
                  : "text-[#333] hover:text-[#D0252D]"
              }`}
            >
              {tab.label}
            </span>
          ))}

          {/* 🔻 TRIANGLE (below border line) */}
          {tabs.map((tab) =>
            active === tab.id ? (
              <span
                key={tab.id}
                className="absolute bottom-[-12px] hidden sm:block"
                style={{
                  left: tab.id === "hyderabad" ? "24%" : "75%",
                  transform: "translateX(-50%)",
                }}
              >
                <span
                  className="block w-0 h-0"
                  style={{
                    borderLeft: "15px solid transparent",
                    borderRight: "15px solid transparent",
                    borderTop: "8px solid #D0252D",
                  }}
                />
              </span>
            ) : null,
          )}
        </div>

        {/* Border line (UNCHANGED) */}
        <div className="h-2 w-full max-w-5xl mx-auto border-t border-gray-300 mb-6"></div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto pb-10">
          {" "}
          {filteredSpeakers.map((speaker, i) => (
            <div key={i} className="text-center p-4  transition">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-full md:h-auto mx-auto rounded-full object-cover"
              />

              <h3 className="font-roboto mt-4 font-bold  leading-4.5 text-sm md:text-[15px] text-[#D0252D] tracking-wide">
                {speaker.name}
              </h3>

              <p className="text-sm font-normal leading-[22px] font-roboto text-[#8D93A0]">
                {speaker.title}
              </p>

              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center  items-center mt-3 text-[#D2520D] hover:scale-110 transition"
              >
                <TbBrandLinkedinFilled className="text-2xl" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full bg-black/30 py-12 px-4 text-white">
        <h1 className="flex font-roboto text-3xl sm:text-4xl leading-[55px] md:text-[50px] font-bold tracking-tighter justify-center">
          {" "}
          Get Involved
        </h1>
        <p className="flex justify-center my-4 font-roboto text-[15px] font-normal leading-[28px]">
          All that You’d Like to Know about The Grand Masters 2026
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mt-8">
          {["SPEAK", "SPONSOR", "REGISTER NOW", "CONNECT"].map((btn) => (
            <button
              key={btn}
              className="w-full sm:w-auto min-w-[180px] space-y-12 border border-white rounded-md py-3 px-6 mx-10 md:py-4 text-sm font-bold tracking-[0.2rem] leading-[14px] text-center transition-colors hover:bg-[#D0252D] cursor-pointer"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
