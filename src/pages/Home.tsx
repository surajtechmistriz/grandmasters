import React from "react";
import heroImg from "../assets/images/TGM-home.jpg";
import logo from "../assets/images/image.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const socials = [
  { icon: FaFacebookF, color: "#1877F2" },
  { icon: FaLinkedinIn, color: "#0A66C2" },
  { icon: FaTwitter, color: "#1DA1F2" },
  { icon: FaWhatsapp, color: "#25D366" },
];

const Home = () => {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-cover bg-bottom md:bg-fixed"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="relative z-10 flex justify-start pt-20 md:pt-28 px-4">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center ">
          {/* Socials */}
          <div className="flex gap-5 md:gap-9  my-4 text-lg md:font-normal md:text-[14.3px] md:leading-[16.3px] ">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a key={i} href="#" style={{ color: s.color }}>
                  <Icon />
                </a>
              );
            })}
          </div>

          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="w-[130px] sm:w-[160px] md:w-[190px] mb-2"
          />

       <h2 className="font-roboto text-sm md:text-[18px] tracking-[3px] font-bold text-[#333] leading-8 my-2">
  presents
</h2>

          {/* Title */}
          <h1 className="font-custom text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight text-[#D0252D] mb-3">
            The 12th Annual Grand Masters 2026 Series
          </h1>

          {/* Subtitle */}
          <p className="font-roboto text-base sm:text-lg md:text-[20px] font-light leading-relaxed text-[#333333] max-w-3xl mb-2 px-2">
            A 7 City pan India Corporate Counsel Legal Best Practices Summit
            Series
          </p>

          {/* Events */}
          <div className="font-roboto flex flex-col gap-1 text-sm sm:text-base md:text-lg font-semibold text-[#333] mb-2">
            <div className="flex flex-wrap items-center justify-center  tracking-[4px] gap-2">
              <FaRegCalendarAlt className="text-[#D0252D]" />
              <span>17th July 2026, NOVOTEL HICC Complex,</span>
              <FaMapMarkerAlt className="text-[#D0252D]" />
              <span>Hyderabad</span>

              <span className="text-[#D0252D] animate-pulse text-xs md:text-sm">
                LIVE NOW
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center tracking-[4px]  gap-2">
              <FaRegCalendarAlt className="text-[#D0252D]" />
              <span>24th July 2026, ITC Narmada,</span>
              <FaMapMarkerAlt className="text-[#D0252D]" />
              <span>Ahmedabad</span>

              <span className="text-[#D0252D] animate-pulse text-xs md:text-sm">
                LIVE NOW
              </span>
            </div>
          </div>

          {/* Upcoming Cities */}
          <h2 className="font-roboto text-sm sm:text-base md:text-lg font-semibold tracking-wider md:tracking-[4px] text-black/50">
            Pune, Chennai, New Delhi,
          </h2>

          <h2 className="font-roboto text-sm sm:text-base md:text-lg font-semibold tracking-wider md:tracking-[4px] text-black/50 mb-6">
            Mumbai & Bengaluru Editions - Launching Soon!
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 md:mt-8 pb-12 md:pb-20 w-full sm:w-auto">
            <Link to="/#register">
              <button className="w-full sm:w-auto text-[#D0252D] px-5 py-3 border border-[#D0252D] hover:bg-[#D0252D] hover:text-white transition rounded-sm font-semibold tracking-widest bg-white/70 cursor-pointer">
                REGISTER NOW
              </button>
            </Link>
            <Link to="/#connect">
              <button className="w-full sm:w-auto text-[#D0252D] px-5 py-3 border border-[#D0252D] hover:bg-[#D0252D] hover:text-white transition rounded-sm font-semibold tracking-widest bg-white/70 cursor-pointer">
                CONTACT US
              </button>
            </Link>
            <Link to="/past-edition">
              <button className="w-full sm:w-auto text-[#D0252D] px-5 py-3 border border-[#D0252D] hover:bg-[#D0252D] hover:text-white transition rounded-s font-semibold tracking-widest bg-white/70 cursor-pointer">
                PAST EDITIONS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
