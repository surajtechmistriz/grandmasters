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
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Showcase Your Brand
          </h2>

          <p className="text-sm md:text-base leading-relaxed mb-8 max-w-4xl mx-auto font-light opacity-95">
            Partnering with The Grand Masters 2026 Summit Series will enable you to brand and promote your service expertise
            to a unique and interested set of senior in house counsel. Summit attendees include senior professionals
            interested in updating their knowledge and involved in legal and commercial elements of complex business deals.
          </p>

          <div className="flex justify-center">
            <button className="border border-white/50 px-6 py-2 text-xs tracking-[0.2em] font-bold uppercase hover:bg-white hover:text-red-600 transition-all duration-300">
              Explore Sponsorship Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSponsorship;