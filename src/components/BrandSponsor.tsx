import React from "react";
import bgImg from "../assets/images/chess.jpg";

const BrandSponsorship = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Card */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 w-full py-10">
        <div className="bg-[#d2232a] text-white p-8 md:p-10 text-center shadow-2xl">
          
          <h2 className="mb-6 text-[50px] font-bold leading-[55px] font-roboto">
            Showcase Your Brand
          </h2>

          <p className="  mb-8 max-w-4xl mx-auto   opacity-95 text-[15px] font-normal leading-[28px] font-roboto">
            Partnering with The Grand Masters 2026 Summit Series will enable you to brand and promote your service expertise
            to a unique and interested set of senior in house counsel. Summit attendees include senior professionals
            interested in updating their knowledge and involved in legal and commercial elements of complex business deals.
          </p>

          <div className="flex justify-center">
            <button className="border border-white px-6 py-5 rounded-sm   tracking-[0.3rem] font-bold text-[11px] leading-[11px] font-roboto uppercase hover:bg-white hover:text-[#d2232a] transition-all duration-300">
              Explore Sponsorship Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSponsorship;