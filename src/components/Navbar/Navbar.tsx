import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);

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
      },
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [location.pathname]);
  return (
    <nav className="fixed top-0 h-[100px] left-0 z-50 w-full bg-[#E9E9E9]  ">
      <div className="mx-auto flex h-20 md:h-24 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMobileMenu(false);
          }}
          className="text-xl md:text-3xl font-bold tracking-wide leading-7.5 text-[#D0252D]"
        >
          #TGM2026
        </Link>

        {/* Desktop Menu */}
        <ul className="font-custom hidden items-center space-x-4 text-sm font-bold leading-[15.4px] tracking-widest md:flex">
          {navItems.map((item) => {
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

            const isActive = active === item.id;

            return (
              <Link
                key={item.id}
                to={`/#${item.id}`}
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
              </Link>
            );
          })}
        </ul>

        {/* Desktop Button */}
        <Link to="/#register" className="hidden md:block">
          <button className="font-custom rounded-sm border border-[#D0252D] px-2.5 py-3.75 text-sm font-bold uppercase tracking-[4px] leading-[14px] text-[#D0252D] transition hover:bg-[#D0252D] hover:text-white cursor-pointer">
            Register Now
          </button>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-[#D0252D]"
        >
          {mobileMenu ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenu ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col bg-[#E9E9E9] px-4 pb-6 pt-2 shadow-lg">
          {navItems.map((item) => {
            if (item.type === "route") {
              return (
                <Link
                  key={item.id}
                  to={item.id}
                  onClick={() => setMobileMenu(false)}
                  className="border-b py-3 font-semibold"
                >
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#D0252D] transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.id}
                to={`/#${item.id}`}
                onClick={() => setMobileMenu(false)}
                className="border-b py-3 font-semibold"
              >
                {item.label}
              </Link>
            );
          })}

          <Link to="/#register" onClick={() => setMobileMenu(false)}>
            <button className="mt-4 w-full rounded border border-[#D0252D] py-3 text-sm font-bold uppercase tracking-[3px] text-[#D0252D] hover:bg-[#D0252D] hover:text-white">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
