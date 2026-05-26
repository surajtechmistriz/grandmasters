import React from "react";
import logo from "../assets/images/image.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="w-full">
      {/* Top Section */}
      <div className="bg-[#e5e5e5] px-10 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-6xl mx-auto">
          {/* Left Column */}
          <div>
            <h2 className="text-[20px] font-bold mb-6 leading-[23px] font-roboto">
              About Lex <span className="text-[#d2232a]">Witness</span>
            </h2>

            <p className="text-[13px]   text-black   font-normal leading-[22px] font-roboto">
              Lex Witness, ever since its inception in 2009, has become India’s
              most credible platform for the legal luminaries here to opine,
              comment and share their views. With an interesting blend of
              opinion pieces, commentary, reportage, analysis, interviews and
              movements, Lex Witness is for the entire fraternity of In House
              and External Counsel besides key decision makers, luminaries,
              experts, policy makers, bureaucracy and the industry captains in
              India.
            </p>

            {/* Logo */}
            <div className="mt-10">
              <img src={logo} alt="Lex Witness" className="w-[220px]" />
            </div>
          </div>

          {/* Middle Column */}
          <div className="font-roboto">
            <h2 className="text-[20px] font-bold mb-6   leading-[23px] font-roboto">
              Lex <span className="text-[#d2232a]">Witness</span> Summits
              Showcase
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-[13px] leading-[25px] ">
                  The 11th Annual IT Legal Summit 2026 / Bengaluru
                </h3>

                <p className="text-[13px] font-normal leading-[25px]">
                  IT / ITeS / e-Commerce / Gaming & More
                </p>

                <p className="text-[13px] mt-1">
                  To access past editions, visit{" "}
                  <span className="text-[#d2232a]">www.itlegalsummit.com</span>
                </p>
              </div>

              <div>
                <h3 className="text-[13px] font-bold leading-[25px] ">
                  The 12th Annual Grand Masters 2026
                </h3>

                <p className="text-[13px] font-normal font-roboto mt-2">
                  A 7-city pan-India General Counsel Summit Series
                </p>

                <ul className="mt-4 space-y-1 font-bold text-[13px] leading-[25px]">
                  <li>Hyderabad Edition</li>
                  <li>Pune Edition</li>
                  <li>Chennai Edition</li>
                  <li>Ahmedabad Edition</li>
                  <li>New Delhi Edition</li>
                  <li>Mumbai Edition</li>
                  <li>Bengaluru Edition</li>
                </ul>

                <p className="text-[13px] font-roboto font-normal leading-[25px] mt-5">
                  To access past editions, visit{" "}
                  <span className="text-[#d2232a]">www.grandmasters.in</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 font-roboto">
            <div>
              <h3 className="font-bold text-[13px] leading-[25px] ">
                The 11th Annual Media, Advertising & Entertainment Legal Summit
                2026 / Mumbai
              </h3>

              <p className="font-normal text-[13px] leading-[25px]   ">
                A Cross-Sectional Legal Dig on M&E Sector & More
              </p>

              <p className="text-[13px] ">
                To access past editions, visit{" "}
                <span className="text-[#d2232a]">www.maels.in</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[13px] leading-[25px]  ">
                The 12th Annual Pharma Legal & Compliance Summit 2026 / Mumbai
              </h3>

              <p className="text-[13px] font-normal leading-[25px]  ">
                Pharma / Healthcare / Medical Devices & More
              </p>

              <p className="text-[13px] font-normal leading-[25px]  ">
                To access past editions, visit{" "}
                <span className="text-[#d2232a]">www.plcs.co.in</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[13px] leading-[25px] ">
                The 9th Annual Banking & Finance Legal Summit 2026 / Mumbai
              </h3>

              <p className="text-[13px] font-normal leading-[25px] ">
                Banking / Crypto / Fintech & More
              </p>

              <p className="text-[13px] ">
                To access past editions, visit{" "}
                <span className="text-[#d2232a]">www.bfls.in</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[13px] leading-[25px] ">
                The 13th Annual Real Estate & Construction Legal Summit 2027 /
                New Delhi
              </h3>

              <p className="text-[13px] font-normal leading-[25px]">
                Real Estate / Infra / Construction & More
              </p>

              <p className="text-[13px] font-normal leading-[25px]">
                To access past editions, visit{" "}
                <span className="text-[#d2232a]">www.rcls.in</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="font-roboto bg-[#1f2125] text-white px-10 md:px-20 py-[20px] ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
          {/* Left */}
          <div className="text-[13px] font-normal leading-[22px] ">
            <p>
              Lex Witness - India's 1st Magazine on Legal & Corporate Affairs
            </p>
            <p>A Unit of SriGro Interactive Pvt Ltd.</p>
          </div>

          {/* Center */}
          <div className="hidden md:flex items-center gap-12 text-[13px] font-normal leading-[22px]">
            <span>|</span>
            <span>Rights of Admission Reserved</span>
            <span>|</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-10 text-[13px] font-normal leading-[22px]">
            <button
              onClick={() => navigate("/about-us")}
              className="hover:text-[#d2232a] transition cursor-pointer"
            >
              About Lex Witness
            </button>

            <p
              onClick={() => navigate("/summit-secretariat")}
              className="hover:text-[#d2232a] transition cursor-pointer  text-[13px] font-normal leading-[22px]"
            >
              Summit Secretariat
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="#"
        className="fixed bottom-6 z-5000 right-6 bg-[#25D366] w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-9 h-9"
        >
          <path d="M20.52 3.48A11.79 11.79 0 0012.05 0C5.49 0 .14 5.35.14 11.91c0 2.1.55 4.15 1.59 5.96L0 24l6.33-1.66a11.84 11.84 0 005.72 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.45-8.41zm-8.47 18.3h-.01a9.9 9.9 0 01-5.05-1.39l-.36-.21-3.76.99 1-3.66-.24-.38a9.86 9.86 0 01-1.51-5.24c0-5.46 4.44-9.9 9.91-9.9 2.64 0 5.12 1.03 6.98 2.89a9.83 9.83 0 012.89 6.98c0 5.47-4.44 9.91-9.9 9.91zm5.43-7.39c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
        </svg>
      </a>
    </footer>
  );
}
