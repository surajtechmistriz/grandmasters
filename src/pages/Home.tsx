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

const socials = [
  { icon: FaFacebookF, color: "#1877F2" },
  { icon: FaLinkedinIn, color: "#0A66C2" },
  { icon: FaTwitter, color: "#1DA1F2" },
  { icon: FaWhatsapp, color: "#25D366" },
];

const Home = () => {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-cover bg-bottom bg-fixed"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="relative z-10 flex justify-start pt-28 px-4">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">

          <div className="flex gap-8 my-4">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a key={i} href="#" style={{ color: s.color }}>
                  <Icon />
                </a>
              );
            })}
          </div>

          <img src={logo} alt="logo" className="h-18 mb-2" />

          <h1 className="text-lg tracking-[0.3em] font-bold text-[#333] mb-2">
            presents
          </h1>

          <h1 className="font-pt text-[40px] font-bold leading-[44px] text-[#D0252D] mb-2">
            The 12th Annual Grand Masters 2026 Series
          </h1>

          <p className="text-[19px] font-normal tracking-wide leading-[22px] text-[#4b4949c2] max-w-3xl mb-3">
            A 7 City pan India Corporate Counsel Legal Best Practices Summit Series
          </p>

          <div className="flex flex-col gap-2 text-[18px] font-semibold text-[#333] mb-2">

            <div className="flex items-center justify-center gap-2 flex-wrap">
              <FaRegCalendarAlt className="text-[#D0252D]" />
              17th July 2026, NOVOTEL HICC Complex,
              <FaMapMarkerAlt className="text-[#D0252D]" />
              Hyderabad{" "}
              <span className="text-[#D0252D] animate-pulse">LIVE NOW</span>
            </div>

            <div className="flex items-center justify-center gap-2 flex-wrap">
              <FaRegCalendarAlt className="text-[#D0252D]" />
              24th July 2026, ITC Narmada,
              <FaMapMarkerAlt className="text-[#D0252D]" />
              Ahmedabad{" "}
              <span className="text-[#D0252D] animate-pulse">LIVE NOW</span>
            </div>

          </div>

          <h2 className="text-[18px] tracking-widest text-black/50">
            Pune, Chennai, New Delhi,
          </h2>

          <h2 className="text-[18px] tracking-widest text-black/50 mb-4">
            Mumbai & Bengaluru Editions - Launching Soon!
          </h2>

          <div className="flex gap-4 mt-8">
            <button className="text-[#D0252D] px-5 py-3 border border-[#D0252D] hover:bg-[#D0252D] hover:text-white transition rounded-md cursor-pointer font-semibold tracking-widest bg-white/70">
              REGISTER NOW
            </button>

            <button className="text-[#D0252D] px-5 py-3 border border-[#D0252D] hover:bg-[#D0252D] hover:text-white transition rounded-md cursor-pointer font-semibold tracking-widest bg-white/70">
              CONTACT US
            </button>

            <button className="text-[#D0252D] px-5 py-3 border border-[#D0252D] hover:bg-[#D0252D] hover:text-white transition rounded-md cursor-pointer font-semibold tracking-widest bg-white/70">
              PAST EDITIONS
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;