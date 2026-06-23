import React, { useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

// Assets & Hooks
import heroImg from "../assets/images/TGM-home.jpg";
import logo from "../assets/images/image.png";
import { useCities } from "../hooks/useCities";
import { useEvents } from "../hooks/useEvents";
import fb from "../assets/icons/facebook-icon.png";
import ld from "../assets/icons/linkedin-icon.png";
import tw from "../assets/icons/x-icon.png";
import wh from "../assets/icons/whatsapp-icon.png";
import { Target } from "lucide-react";

const socialIcons = [
  {
    src: fb,
    alt: "facebook",
    link: "http://www.facebook.com/share.php?u=http://www.grandmasters.in/&title=India's%20Finest%20General%20Counsel%20Gathering",
  },
  {
    src: ld,
    alt: "linkedin",
    link: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.grandmasters.in/?2024",
  },
  {
    src: tw,
    alt: "x",
    link: "https://twitter.com/intent/tweet?text=https%3A//www.grandmasters.in/Join%20India's%20Finest%20General%20Counsel%20Meet%20-%20The%20Grand%20Masters%202024.%20For%20more%20details%20visit%20https%3A//www.grandmasters.in/",
  },
  {
    src: wh,
    alt: "whatsapp",
    link: "https://api.whatsapp.com/send?phone=919899332111&text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20The%20Grand%20Masters%202026%20Summit%20Series",
  },
];

const TARGET_CITY_IDS = [1, 2, 3, 4, 5];

const Home = () => {
  const { data: eventsData, isLoading: eventsLoading } = useEvents();
  const { data: citiesData, isLoading: citiesLoading } = useCities();

  const loading = eventsLoading || citiesLoading;

  const events = eventsData?.data?.events || [];
  const cities = citiesData?.data || [];

  // Optimize heavy string parsing and array sorting using useMemo
  const { lineOne, lineTwo } = useMemo(() => {
    const cleanedCities = cities
      .filter((item: any) => TARGET_CITY_IDS.includes(item.id))
      .sort((a: any, b: any) => a.id - b.id)
      .map((item: any) => item.name.replace(" Edition", ""));

    if (cleanedCities.length >= 5) {
      return {
        lineOne: `${cleanedCities.slice(0, 3).join(", ")},`,
        lineTwo: `${cleanedCities.slice(3).join(" & ")} Editions - Launching Soon!`,
      };
    }

    return {
      lineOne: "Pune, Chennai, New Delhi,",
      lineTwo: "Mumbai & Bengaluru Editions - Launching Soon!",
    };
  }, [cities]);

  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    const timer = setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [location.hash]);


  const formatDateWithSuffix = (dateString: string) => {
  const date = new Date(dateString);

  const day = date.getDate();

  const suffix =
    day === 1 || day === 21 || day === 31
      ? "st"
      : day === 2 || day === 22
      ? "nd"
      : day === 3 || day === 23
      ? "rd"
      : "th";

  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return `${day}${suffix} ${month} ${year}`;
};


if (loading) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <span className="relative flex h-5 w-5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D0252D] opacity-75"></span>
        <span className="relative inline-flex h-5 w-5 rounded-full bg-[#D0252D]"></span>
      </span>
    </div>
  );
}

  return (
    <section
      className="relative w-full h-206 overflow-hidden bg-cover bg-bottom md:bg-fixed"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="relative z-10 flex justify-start pt-20 md:pt-28 px-4">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Socials */}
          <div className="flex gap-5 md:gap-5 my-4 text-lg md:font-normal md:text-[14.3px] md:leading-[16.3px]">
            {socialIcons.map((icon) => (
              <a
                key={icon.alt}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-4 h-4 md:w-6 md:h-6 cursor-pointer transition-transform hover:scale-110"
                />
              </a>
            ))}
          </div>

          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="w-[130px] sm:w-[160px] md:w-[190px] mb-2 mt-1"
          />

          <h2 className="font-roboto text-sm md:text-[18px]  tracking-[3px] font-bold text-[#333] leading-8 mb-2 mt-1">
            presents
          </h2>

          {/* Title */}
          <h1 className="font-roboto text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight text-[#D0252D] mb-1">
            The 12th Annual Grand Masters 2026 Series
          </h1>

          {/* Subtitle */}
          <p className="font-roboto text-base sm:text-lg md:text-[20px] font-light leading-relaxed text-[#333333] max-w-3xl mb-2 mt-0.5 px-2">
            A 7 City pan India Corporate Counsel Legal Best Practices Summit
            Series
          </p>

          {/* Events */}
          <div className="font-roboto flex flex-col gap-1 text-sm sm:text-base md:text-[18px] md:leading-[31.5px] font-semibold text-[#333] mb-1">
            {events.map((event: any) => (
              <div
                key={event.id}
                className="flex flex-wrap items-center justify-center leading-7.75 tracking-[2px] md:tracking-[4px]"
              >
                <FaRegCalendarAlt className="text-[#D0252D] mr-2" />
                <span>{formatDateWithSuffix(event.date)}</span>
                {event.venue && <span>, {event.venue}</span>},
                <FaMapMarkerAlt size={15} className="text-[#D0252D] mr-2 ml-1 mb-1" />
                <span>{event.city?.name}</span>
                <span className="text-[#D0252D] animate-pulse text-xs md:text-sm ml-4">
                  LIVE NOW
                </span>
              </div>
            ))}
          </div>

          {/* Upcoming Cities (Dynamic Banner) */}
          <h2 className="font-roboto text-sm sm:text-base md:text-lg font-semibold tracking-wider md:tracking-[4px] text-black/50">
            {lineOne}
          </h2>

          <h2 className="font-roboto text-sm sm:text-base md:text-lg font-semibold tracking-wider md:tracking-[4px] text-black/50 mb-6 mt-1">
            {lineTwo}
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 md:mt-4 pb-12 md:pb-20 w-full sm:w-auto">
            <Link to="/#register" className="w-full sm:w-auto">
              <button className="w-full text-[#D0252D] px-5 py-3 border border-[#D0252D] hover:bg-[#D0252D] hover:text-white transition rounded-sm font-semibold tracking-widest bg-white/70 cursor-pointer">
                REGISTER NOW
              </button>
            </Link>
            <Link to="/#connect" className="w-full sm:w-auto">
              <button className="w-full text-[#D0252D] px-5 py-3 border border-[#D0252D] hover:bg-[#D0252D] hover:text-white transition rounded-sm font-semibold tracking-widest bg-white/70 cursor-pointer">
                CONTACT US
              </button>
            </Link>
            <Link to="/past-edition" className="w-full sm:w-auto">
              <button className="w-full text-[#D0252D] px-5 py-3 border border-[#D0252D] hover:bg-[#D0252D] hover:text-white transition rounded-sm font-semibold tracking-widest bg-white/70 cursor-pointer">
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
