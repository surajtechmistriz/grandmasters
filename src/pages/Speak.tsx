import React, { useState } from "react";
import img from "../assets/images/veta-217x300-1.jpg";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { LuNotepadText } from "react-icons/lu";
import bgImg from "../assets/images/chess.jpg";

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
      className="relative w-full min-h-screen bg-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="mx-auto bg-white pt-8">
        {/* Heading */}
        <div className="text-center mb-6">
          <div className="flex justify-center my-6">
            <LuNotepadText className="text-red-700 text-5xl " />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Meet The Grand Masters!
          </h2>

          <p className="text-gray-600 text-lg">
            Invited & <span className="text-[#D0252D]">Confirmed Speakers</span>
          </p>
        </div>

        {/* Tabs */}
        <div className="relative flex flex-wrap justify-center gap-14 mb-1">
          {tabs.map((tab, i) => (
            <span
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-16 py-2 text-lg font-semibold cursor-pointer transition ${
                active === tab.id
                  ? "text-[#D0252D]"
                  : "text-gray-700 hover:text-[#D0252D]"
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
                className="absolute bottom-[-12px]"
                style={{
                  left: tab.id === "hyderabad" ? "39%" : "61%",
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto pb-10">
          {filteredSpeakers.map((speaker, i) => (
            <div
              key={i}
              className="text-center p-4  transition"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-auto mx-auto rounded-full object-cover"
              />

              <h3 className="mt-4 font-semibold text-gray-900">
                {speaker.name}
              </h3>

              <p className="text-sm text-gray-600">{speaker.title}</p>

              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center mt-3 text-[#D2520D] hover:scale-110 transition"
              >
                <TbBrandLinkedinFilled className="text-2xl" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full bg-black/30 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-white text-5xl font-bold">Get Involved</h1>
            <p className="text-white my-4">
              All that You’d Like to Know about The Grand Masters 2026
            </p>
          </div>

          <div className="flex gap-10 justify-center items-center mt-8 flex-wrap">
            {["SPEAK", "SPONSOR", "REGISTER NOW", "CONNECT"].map((btn) => (
              <button
                key={btn}
                className="w-52 text-white px-10 py-3 border border-white hover:bg-[#D0252D] transition rounded-md"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
