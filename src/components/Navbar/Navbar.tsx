import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "concept", label: "CONCEPT", type: "section" },
    { id: "speakers", label: "SPEAKERS", type: "section" },
    { id: "agenda", label: "AGENDA", type: "section" },
    { id: "sponsors", label: "SPONSORS", type: "section" },
    {
      id: "https://your-external-link.com",
      label: "PAST EDITIONS",
      type: "external",
    },
    { id: "connect", label: "CONNECT", type: "section" },

  ];

useEffect(() => {
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
      root: null,
      threshold: 0.3,
    }
  );

  sections.forEach((sec) => observer.observe(sec));

  return () => observer.disconnect();
}, []);

  return (
    <nav className="w-full bg-[#E9E9E9] shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-[100px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold text-[#D0252D] tracking-wide">
          #TGM2026
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center space-x-6 text-[#000] font-semibold text-sm tracking-wide">
          {navItems.map((item) => {
            const isActive = active === item.id && item.type === "section";

            if (item.type === "external") {
              return (
                <a
                  key={item.id}
                  href={item.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-black hover:text-[#D0252D] transition"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative transition ${
                  isActive
                    ? "text-[#D0252D]"
                    : "text-black hover:text-[#D0252D]"
                }`}
              >
                {item.label}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#D0252D] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </ul>

        {/* Register Button */}
        <a href="#register">
          <button className="text-[#D0252D] px-5 py-2 font-semibold text-lg tracking-widest border cursor-pointer border-[#D0252D] rounded-md hover:bg-[#D0252D] hover:text-white transition">
            Register Now
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
