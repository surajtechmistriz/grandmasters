import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const location = useLocation();

  const navItems = [
    { id: "concept", label: "CONCEPT", type: "section" },
    { id: "speakers", label: "SPEAK", type: "section" },
    { id: "agenda", label: "AGENDA", type: "section" },
    { id: "sponsors", label: "SPONSOR", type: "section" },

    {
      id: "/past-edition",
      label: "PAST EDITIONS",
      type: "route",
    },

    { id: "connect", label: "CONNECT", type: "section" },
  ];

useEffect(() => {
  // Reset active state on other pages
  if (location.pathname !== "/") {
    setActive("");
    return;
  }

  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      let bestEntry = null;

      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        if (
          !bestEntry ||
          Math.abs(entry.boundingClientRect.top) <
            Math.abs(bestEntry.boundingClientRect.top)
        ) {
          bestEntry = entry;
        }
      }

      if (bestEntry) {
        setActive(bestEntry.target.id);
      }
    },
    {
      threshold: 0.3,
    }
  );

  sections.forEach((sec) => observer.observe(sec));

  return () => observer.disconnect();
}, [location.pathname]);
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#E9E9E9] shadow-md">
      <div className="mx-auto flex h-25 max-w-6xl items-center justify-between ">
        {/* Logo */}
        <Link
          to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-3xl font-bold tracking-wide text-[#D0252D]"
        >
          #TGM2026
        </Link>

        {/* Nav Links */}
        <ul className="font-custom hidden items-center space-x-6 text-sm font-bold leading-[15px] tracking-wide text-black md:flex">
          {navItems.map((item) => {
            // Route Link
            if (item.type === "route") {
              return (
                <Link
                  key={item.id}
                  to={item.id}
                  className={`transition hover:text-[#D0252D] ${
                    location.pathname === item.id
                      ? "text-[#D0252D]"
                      : "text-black"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            // Section Link
            const isActive = active === item.id;

            return (
              <a
                key={item.id}
                href={
                  location.pathname === "/" ? `#${item.id}` : `/#${item.id}`
                }
                className={`relative transition ${
                  isActive
                    ? "text-[#D0252D]"
                    : "text-black hover:text-[#D0252D]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#D0252D] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </ul>

        {/* Button */}
        <a href="#register">
          <button className="font-custom rounded-sm border border-[#D0252D] px-2 py-3 text-[14px] font-bold uppercase leading-[18px] tracking-[4px] text-[#D0252D] transition-all duration-300 hover:bg-[#D0252D] hover:text-white cursor-pointer">
            Register Now
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
