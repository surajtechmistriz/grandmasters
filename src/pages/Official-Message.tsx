import React from "react";
import OfficialMessages from "../components/OfficialMessageSidebar";
import img from "../assets/images/lalit-bhasin-1.jpg";

const OfficialMessage = () => {
  return (
    <div className="min-h-screen bg-white mt-20 lg:mt-[100px]">
      {/* Header */}
      <div className="bg-[#d61f26] py-5 sm:py-6">
        <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-normal leading-tight px-4">
          Official Messages
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-8 lg:gap-10">
          {/* Left Content */}
          <section className="font-roboto text-sm sm:text-[15px] leading-7 text-gray-800">
            {/* Top Section */}
            <div className="overflow-hidden mb-6">
              <img
                src={img}
                alt="Speaker"
                className="
                  w-full
                  max-w-[260px]
                  mx-auto
                  lg:float-right
                  lg:ml-6
                  mb-4
                  h-auto
                  object-cover
                "
              />

              <div className="text-justify">
                <h1 className="text-[15px] font-bold leading-7 mb-4 uppercase">
                  Message
                </h1>

                <p className="mb-4">
                  It's a great honor for us at{" "}
                  <span className="text-[#d12229] font-bold">
                    The Association of Corporate Counsel (ACC)
                  </span>{" "}
                  to collaborate and share content with{" "}
                  <span className="font-bold">Lex Witness</span>. ACC is a
                  global association that promotes the professional interests of
                  in-house lawyers, with 45,000 members in 85 countries,
                  including throughout India. We support the global corporate
                  counsel community by providing research, educational
                  programming, advocacy, and networking opportunities.
                </p>

                <p>
                  This is the age of the general counsel. The digital revolution
                  has transformed the corporate landscape, from international
                  regulations to data privacy laws. Successful companies are
                  realizing that the General Counsel (GC) or Chief Legal Officer
                  (CLO) is indispensable at every level of business operations.
                  More companies are realizing that critical blunders can be
                  prevented when the CLO has a seat at the executive table.
                </p>
              </div>
            </div>

            {/* Middle Heading */}
            <h2 className="font-bold text-base tracking-tight mb-4 uppercase">
              Global and Local Challenges, and a Must Read Publication
            </h2>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-justify">
              <div>
                <p>
                  Legal department budgets, changing regulatory regimes, and the
                  impact of global events on business operations keep General
                  Counsels and Chief Legal Officers vigilant. We must work
                  together to find solutions that advance our profession. This
                  is where <span className="italic">Lex Witness</span> becomes
                  invaluable. Its readers are high-profile, influential HNI's
                  who frame the laws and practice it. The magazine covers an
                  interesting bandwidth right from the core legal community,
                  including Judges, Lawyers, Bureaucrats, and Corporate leaders.
                </p>
              </div>

              <div>
                <p className="mb-4">
                  Lex Witness offers an interesting blend of opinions,
                  reportage, and insights, essential for the entire fraternity
                  of in-house and external counsel. Its comprehensive nature
                  makes it a valuable resource for key decision makers.
                </p>

                <p>
                  For a better understanding of Lex Witness and our
                  collaborative efforts, please go through{" "}
                  <span className="font-bold text-[#d12229] border-b border-[#d12229] cursor-pointer hover:bg-red-50 transition-colors">
                    The Lex Witness Brand Deck
                  </span>
                  . We look forward to continued dialogue and professional
                  growth.
                </p>
              </div>
            </div>
          </section>

          {/* Right Sidebar */}
          <div>
            <OfficialMessages />
          </div>
        </div>

        {/* Sponsors */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center my-10 sm:my-16">
          Sponsors & Partners
        </h1>
      </div>
    </div>
  );
};

export default OfficialMessage;