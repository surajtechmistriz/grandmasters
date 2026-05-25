import React from "react";
import OfficialMessages from "../components/OfficialMessageSidebar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#white] mt-[100px]">
      {/* Header */}
      <div className="bg-[#d61f26] py-6">
        <h1 className="text-white text-center text-[50px] font-normal leading-[55px] tracking-tighter">
          A Bit About Us 
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-10 px-6">
          {/* Left */}
          <div>
            {/* Paragraph */}
            <h2 className="font-roboto text-black text-start text-[15px] font-bold leading-[28px] tracking-tight ">
              Why Lex <span className="text-[#d12229]">Witness?</span>
            </h2>
            <p className="text-[15px] leading-[28px] text-[#1d2b44] font-normal">
              The Indian legal universe has close to 5 million individuals. This
              represents highest number in the world who, directly or
              indirectly, are a part of it. Lex Witness is a high quality
              monthly magazine with the power of fresh and original content that
              deals exclusively with subjects on legality. Some of India’s
              top-notch practitioners and experts contribute in Lex Witness on
              subjects relevant to all stakeholders in this profession. Lex
              Witness, ever since its inception in 2009, has become India’s most
              credible platform for the legal luminaries here to opine, comment
              and share their views. With an interesting blend of opinion
              pieces, commentary, reportage, analysis, interviews and movements,
              Lex Witness is for the entire fraternity of In House and External
              Counsel besides key decision makers, luminaries, experts, policy
              makers, bureaucracy and the industry captains in India.
            </p>

            <h2 className="font-semibold mt-4">A Must Read</h2>
            <p className="text-[15px] leading-[28px] text-[#1d2b44] font-normal">
              The readers of Lex Witness are high-profile, influential HNI’s.
              They are the ones who frame the laws and the ones who practice it.
              Lex Witness covers an interesting bandwidth of readers right from
              the core legal community of the country that includes the Hon’ble
              Judges, Lawyers, Bureaucrats, Corporate Legal Professionals and
              other allied professionals. Lex Witness is available in all the
              major metropolitan cities of the country and not only India, Lex
              Witness has a prompt presence in the global legal community as
              well.
            </p>

            <p className="text-[15px] leading-[28px] text-[#1d2b44] font-normal mt-4">
              For a better understanding of Lex Witness please go through{" "}
              <span className="font-bold text-[#d12229] cursor-pointer hover:underline">
                The Lex Witness Brand Deck
              </span>
            </p>
          </div>

          {/* Right */}
        <div>
  <OfficialMessages />
</div>
        </div>
        <h1 className="text-4xl text-center my-16">Sponsors & Partners</h1>
      </div>
    </div>
  );
};

export default AboutUs;
