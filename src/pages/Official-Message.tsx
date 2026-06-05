import React from "react";
import OfficialMessages from "../components/OfficialMessageSidebar";
import img from "../assets/images/lalit-bhasin-1.jpg";
import { useParams } from "react-router-dom";
import { officialMessages } from "../data/officialMessages";
import NotFound from "../components/NotFound";

const OfficialMessage = () => {
  const { id } = useParams();

  console.log("URL ID:", id);
  const speaker = officialMessages.find((item) => item.id === id);
  if (!speaker) {
    return <NotFound />;
  }
  return (
    <div className="min-h-screen bg-white mt-20 lg:mt-[100px]">
      {/* Header */}
      <div className="bg-[#d61f26] py-5 sm:py-6">
        <h1 className=" font-roboto text-white text-center text-3xl sm:text-4xl md:text-[33px]   tracking-tight font-normal leading-tight px-4">
          Official Messages
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-5 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-8 lg:gap-15">
          {/* Left Content */}
          <section className="font-roboto text-sm sm:text-[15px] leading-7 text-[#333]">
            <div>
              <img
                src={speaker.image}
                alt={speaker.name}
                className="
                  w-full
                  max-w-[240px]
                  h-auto
                  lg:float-right
                  lg:ml-6
                  mb-4
                "
              />

              <div className="text-justify">
                {speaker.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mb-5">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Speaker Details */}
            <div className="mt-10">
              <h2 className="font-bold text-lg">{speaker.name}</h2>

              <p>{speaker.role}</p>

              {speaker.organization && <p>{speaker.organization}</p>}
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
