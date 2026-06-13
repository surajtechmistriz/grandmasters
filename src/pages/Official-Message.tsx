import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../components/NotFound";
import SponsorsCarousel from "../components/SponsorsCarousel";
import OfficialMessages from "../components/OfficialMessageSidebar";
import { useOfficialMessages } from "../hooks/useOfficialMessages";

const OfficialMessage = () => {
  const { slug } = useParams();

  const { data, isLoading } = useOfficialMessages(6);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#D0252D]/20 border-t-[#D0252D]" />
      </div>
    );
  }

  const apiData = data?.data || {};
  const allMessages = Object.values(apiData).flat();

  const speaker = allMessages.find((item: any) => item?.speaker?.slug === slug);

  console.log("Messsage", speaker)

  if (!speaker) return <NotFound />;

  return (
    <div className=" font-roboto min-h-screen bg-white mt-20 lg:mt-[100px]">
      <div className="bg-[#d61f26] py-5 sm:py-6">
       <h1 className=" font-roboto text-white text-center text-3xl sm:text-4xl md:text-[33px]   tracking-tight font-normal leading-tight px-4">
          Official Messages
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10">
        {/* LEFT */}
        <section className="text-sm leading-7 text-[#333]">
          <div
            className="text-justify text-[15px] official-message-content"
            dangerouslySetInnerHTML={{ __html: speaker.message }}
          />

          {/* <div className="mt-10">
            <h2 className="font-bold text-lg">{speaker.speaker.name}</h2>
            <p>{speaker.speaker.designation}</p>
            <p>{speaker.speaker.company}</p>
          </div> */}
        </section>

        {/* RIGHT */}
        <div>
          <OfficialMessages />
        </div>
      </div>

      <h1 className="text-3xl text-center my-12">Sponsors & Partners</h1>

      <SponsorsCarousel />
    </div>
  );
};

export default OfficialMessage;
