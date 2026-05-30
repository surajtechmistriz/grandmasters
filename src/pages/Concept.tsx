import React, { useState } from "react";
import { FaVolumeUp, FaUsers, FaStar, FaMicrophone } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

import bgImg from "../assets/images/chess.jpg";
import img1 from "../assets/images/Mr-Justice-Manmohan-1.jpg";
import img2 from "../assets/images/lalit-bhasin-1.jpg";
import img3 from "../assets/images/BS-Profile-1000-1.jpg";
import img4 from "../assets/images/veta-217x300-1.jpg";
import agendaImg from "../assets/images/agenda-highlights1.jpg";
import audienceImg from "../assets/images/audience-profile1.jpg";
import sponsorImg from "../assets/images/agenda-highlights1.jpg";
import { useNavigate } from "react-router-dom";

/* ---------------- TABS ---------------- */
const tabs = [
  { id: "agenda", label: "AGENDA HIGHLIGHTS", icon: <FaVolumeUp /> },
  { id: "audience", label: "AUDIENCE PROFILE", icon: <FaUsers /> },
  { id: "sponsor", label: "SPONSORSHIP OPPORTUNITIES", icon: <FaStar /> },
];

/* ---------------- STATIC DATA ---------------- */
const stats = [
  { value: "7", label: "CITIES" },
  { value: "200+", label: "SPEAKERS" },
  { value: "35+", label: "SESSIONS" },
  { value: "500+", label: "ATTENDEES" },
];

const luminaries = [
  {
    name: "Hon'ble Justice Manmohan",
    title: "Judge, Supreme Court of India",
    image: img1,
  },
  { name: "Dr. Lalit Bhasin", title: "President, SILF & BAI", image: img2 },
  {
    name: "Bansuri Swaraj",
    title: "Senior Advocate, Supreme Court of India",
    image: img3,
  },
  {
    name: "Ms. Veta T. Richardson",
    title: "President & CEO, ACC",
    image: img4,
  },
];

const Concept = () => {
  const [active, setActive] = useState("agenda");

  const navigation = useNavigate();

  return (
    <section
     className="relative w-full min-h-screen bg-center bg-cover md:bg-fixed"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 mx-auto mt-14 text-center">
        {/* HEADER */}
      <div className="backdrop-blur-md bg-white shadow-xl px-4 py-8 md:p-10 flex flex-col items-center">
          <FaMicrophone className="text-4xl text-[#d2232a]" />

         <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-800 my-6 text-center">
            Are You A Grand Master?
          </h2>

          <p className="font-roboto text-[15px] font-normal text-gray-600">
            Join India’s Elite{" "}
            <span className="text-[#d2232a] font-semibold">In House</span> Counsel
            Gathering
          </p>

          {/* TABS */}
         <div className="relative flex flex-col md:flex-row justify-center gap-4 md:gap-20 mt-10 border-b border-gray-300 pb-4 w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`font-roboto flex items-center justify-center gap-2 font-bold text-xs sm:text-sm md:text-[15px] transition cursor-pointer ${
                  active === tab.id
                    ? "text-[#D0252D]"
                    : "text-gray-600 hover:text-[#D0252D]"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}

            {/* 🔺 TRIANGLE UNDER ACTIVE TAB */}
            {tabs.map((tab, i) =>
              active === tab.id ? (
                <span
                  key={i}
                  className="absolute bottom-0 "
                  style={{
                    left: `${(100 / tabs.length) * i + 100 / tabs.length / 2}%`,
                    transform: "translateX(-50%) translateY(100%)",
                  }}
                >
                  <span
                    className="block w-0 h-0 "
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

          {/* ---------------- TAB CONTENT ---------------- */}

          {/* AGENDA TAB */}
          {active === "agenda" && (
<div className="font-roboto text-[15px] grid md:grid-cols-2 gap-8 mt-12 items-center text-left px-4">              <div className="flex justify-center">
                <img
                  src={agendaImg}
                  className="w-full max-w-75 rounded-lg object-contain"
                />
              </div>

              <div className="space-y-3 text-gray-700">
                <p>
                  There Are In-House Counsel and There Are Grand Masters.{" "}
                  <span className="text-[#cd151d] font-semibold">Choose.</span>
                </p>

                <p>
                  Do You Choose Client Delight Over Billing Delight?{" "}
                  <span className="text-[#cd151d] font-semibold">
                    Stand Out.
                  </span>
                </p>

                <p>
                  Have You Moved from Court Room to Board Room?{" "}
                  <span className="text-[#cd151d] font-semibold">
                    Differentiate.
                  </span>
                </p>

                <p className="mt-4">Power-packed sessions include:</p>

                <ul className="space-y-2">
                  <li># Strategic GC – Boardroom Risk</li>
                  <li># India Inc. 3.0 – Regulatory Reset</li>
                  <li># IP & Innovation</li>
                  <li># Dispute Resolution</li>
                </ul>
              </div>
            </div>
          )}

          {/* AUDIENCE TAB */}
          {active === "audience" && (
<div className="mt-12 flex flex-col-reverse md:flex-row gap-8 px-4 md:px-8 text-left max-w-4xl mx-auto items-start">              {/* TEXT SECTION */}
              <div className="space-y-4 text-gray-700 flex-1">
                <h3 className="text-[15px] font-bold leading-[28px]">
                  Organizational Participation
                </h3>

                <p className="text-[15px] font-normal leading-[28px]">
                  3M India, 9X Media, ABB India, Accel Partners, Accenture,
                  ACCOR, Accuracy Adani Group, Adani Parts And SEZ, Adidas
                  Group, Aditya Birla Fashion and Retail ADP India, Advaya
                  Legal, AGS Health, Ahuja Group, Air Infotech, Airtel,
                  AkzoNobel India, ALMT Legal, Alpha Partners, Alstom, Amar
                  Chitra Katha, Amar Ujala Publications, Amazon.in, Amdipharm
                  Mercury (AMCo) Group, American Express, American Towers,
                  Amicus Services, Amira Nature Foods, Anantraj, Ani
                  Technologies, Ansal API, ArcelorMittal Distribution Solutions
                  India, ARCIL, Ardent Legal, Aricent, Ashland India
                </p>

                <h3 className="font-semibold mt-6">
                  Hierarchical Participation
                </h3>

                <p className="leading-relaxed">
                  Add. Chief Manager – Legal, Additional Manager – Legal, IP
                  Attorney, AGM – Legal, AGM Legal & Asst. Co. Sec., APAC Legal
                  Counsel, Assistant Director, Assistant General Counsel
                  Associate, Associate Director – Legal & Compliance, Associate
                  Director Human Resources
                </p>

                <button
                  onClick={() => navigation("/audience-profile")}
                  className="mt-4 text-[#D0252D] px-5 py-2 border rounded-sm border-[#D0252D] hover:bg-[#D0252D] hover:text-white transition cursor-pointer"
                >
                  VIEW MORE
                </button>
              </div>

              {/* IMAGE SECTION */}
<div className="w-full md:w-75 shrink-0">                <img
                  src={audienceImg}
                  className="rounded-xl w-full object-cover"
                />
              </div>
            </div>
          )}

          {/* SPONSOR TAB */}
          {active === "sponsor" && (
<div className="grid md:grid-cols-2 px-4 md:px-8 gap-8 mt-12 items-center max-w-4xl text-left">              <div className="flex justify-center">
                <img
                  src={sponsorImg}
                  className="w-[300px] rounded-lg object-contain"
                />
              </div>

              <div className="space-y-3 text-gray-700">
                <p>
                  Partnering with The Grand Masters 2026 Summit Series will
                  enable you to brand and promote your service expertise to a
                  unique and interesting set of senior in house counsel. Summit
                  attendees include senior professionals interested in updating
                  their knowledge and involved in legal and commercial elements
                  of complex business deals. We have a set of standard branding
                  solutions that we can customize based on your specific needs.
                  <span className="font-bold">For more details, contact:</span>
                </p>

                <p>
                  Bhupinder Kaur | +91-9654155065 | bhupinder@witnesslive.in
                </p>
                <p>
                  Bhupinder Kaur | +91-9654155065 | bhupinder@witnesslive.in
                </p>
              </div>
            </div>
          )}
        </div>

        {/* STATS */}
        <div className="w-full bg-black/30 py-18 px-4">
          <div className="font-roboto max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl sm:text-5xl md:text-[80px] font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white text-[10px] md:text-[11px] font-semibold tracking-[0.3rem]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LUMINARIES */}
        <div className="w-full bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <HiUserGroup className="text-[#d2232a] text-4xl mx-auto" />

<h2 className="text-3xl sm:text-4xl md:text-[50px] font-roboto font-normal mt-2">              Past Official Messages
            </h2>
            <p className="text-[15px] font-normal leading-[28px] text-[#8d93a0]">
              Messages from{" "}
              <span className="text-[#D0252D]">Various Legal Luminaries</span>
            </p>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {luminaries.map((p, i) => (
                <div key={i}>
                  <img
                    src={p.image}
                    className="w-52 h-52 md:w-64 md:h-64 rounded-full mx-auto object-cover"
                  />
                  <h3 className="font-roboto text-[20px] leading-[23px] text-[#D0252D] hover:underline cursor-pointer font-normal mt-4">
                    {p.name}
                  </h3>
                  <p className="font-roboto font-normal text-[15px]  text-gray-600 mt-2">
                    {p.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full bg-black/30 py-18 px-4 text-white">
<h1 className="font-roboto text-3xl sm:text-4xl md:text-[50px] font-bold leading-tight">            Get Involved
          </h1>
          <p className="my-4 font-roboto text-[15px] font-normal leading-[28px]">
            All that You’d Like to Know about The Grand Masters 2026
          </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap mt-8">            {["SPEAK", "SPONSOR", "REGISTER NOW", "CONNECT"].map((btn) => (
              <button
                key={btn}
                className="w-full max-w-[220px] border border-white py-3 hover:bg-[#D0252D] rounded-md cursor-pointer"
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

export default Concept;
