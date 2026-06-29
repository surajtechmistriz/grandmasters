import React, { useEffect, useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import icon from "../assets/icons/icon1.png";
import { getEvents } from "../services/APIs/homePage";
import { handleImageError } from "../utils/imageUtils";
import iconLogo from "../assets/icons/LW-Brand-Icon-48X48-1.png";

const imgUrl = import.meta.env.VITE_SPEAKERS_BASE_URL;

const SummitAgenda = () => {
  const [expandedId, setExpandedId] = useState<number | null>(5);
  const [activeTab, setActiveTab] = useState("hyderabad");
  const [events, setEvents] = useState<any[]>([]);

  //  API CALL
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getEvents();
        setEvents(res?.data?.events || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  //  get event by city
  const selectedEvent = events.find(
    (e) =>
      e.city?.name?.trim().toLowerCase() === activeTab.trim().toLowerCase(),
  );

  console.log("activeTab:", activeTab);
  console.log("selectedEvent:", selectedEvent);

  //  agenda from API
  const agendaFromAPI = selectedEvent?.agendas || [];

  console.log("agendaFromAPI", agendaFromAPI);

  //  map API → UI format (KEEP UI SAME)
  const agendaItems = agendaFromAPI.map((item: any) => ({
    id: item.id,
    time: item.agenda_time,
    title: item.agenda_title?.replace(item.agenda_short_description || "", ""),
    description: item.agenda_description,
    highlight: "",
    suffix: "",
    hasSpeakers: item.agenda_speakers?.length > 0,
    speakers:
      item.agenda_speakers?.map((s: any) => ({
        name: s.speaker?.name,
        role: s.speaker?.designation,
        img: `${imgUrl}/${s.speaker?.image}`,
      })) || [],
  }));

  return (
    <div className="max-w-5xl mx-auto py-8 md:pb-12 md:pt-4 px-4 bg-white font-roboto">
      {/* HEADER (UNCHANGED) */}
      <div className="text-center mb-8 md:mb-12">
        <div className="flex justify-center">
          <img src={icon} className="h-24" />
        </div>

        <h1 className="text-[34px] sm:text-4xl md:text-[50px] font-normal leading-tight md:leading-none text-[#333] mb-6 md:mb-8 px-3">
          The Summit Agenda
        </h1>

        {/* TABS (UNCHANGED UI) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 relative md:border-b md:border-gray-200">
          {/* HYDERABAD */}
          <div
            onClick={() => {
              setActiveTab("hyderabad");
              setExpandedId(null);
            }}
            className="w-full md:w-auto py-3 md:pb-4 cursor-pointer relative text-center border-b-0 md:border-b-0"
          >
            <p
              className={`text-sm font-bold tracking-widest ${
                activeTab === "hyderabad" ? "text-[#D0252D]" : "text-[#333]"
              }`}
            >
              17TH JULY
            </p>

            <p
              className={`uppercase font-bold ${
                activeTab === "hyderabad" ? "text-[#D0252D]" : "text-[#333]"
              }`}
            >
              Hyderabad Edition
            </p>

            {activeTab === "hyderabad" && (
              <div className="hidden md:block absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[8px] border-t-[#D0252D]" />
            )}
          </div>

          {/* AHMEDABAD */}
          <div
            onClick={() => {
              console.log("Ahmedabad clicked");
              setActiveTab("ahmedabad");
              setExpandedId(null);
            }}
            className="w-full md:w-auto py-3 md:pb-4 cursor-pointer relative text-center border-b-0 md:border-b-0"
          >
            <p
              className={`text-sm font-bold tracking-widest ${
                activeTab === "ahmedabad" ? "text-[#D0252D]" : "text-[#333]"
              }`}
            >
              22ND JULY
            </p>

            <p
              className={`uppercase font-bold ${
                activeTab === "ahmedabad" ? "text-[#D0252D]" : "text-[#333]"
              }`}
            >
              Ahmedabad Edition
            </p>

            {activeTab === "ahmedabad" && (
              <div className="hidden md:block absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[8px] border-t-[#D0252D]" />
            )}
          </div>
        </div>
      </div>
      {/* <div className="hidden md:block border-t border-gray-200"></div> */}

      {/* TIMELINE (UNCHANGED UI) */}
      <div className="relative md:ml-20">
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[1px] bg-gray-200"></div>

        <div className="space-y-0">
          {agendaItems.map((item: any) => (
            <div
              key={`${selectedEvent?.id}-${item.id}`}
              className="relative pl-0 md:pl-20"
            >
              {/* marker (UNCHANGED) */}
              <img
                src={iconLogo}
                alt="Agenda Icon"
                className="hidden md:block absolute left-3 top-4 w-10 h-10 rounded-full bg-[#DA2127] object-cover"
              />
              <div
                className="py-6 border-b border-gray-100"
                onClick={() => {
                  if (item.description || item.hasSpeakers) {
                    setExpandedId(expandedId === item.id ? null : item.id);
                  }
                }}
              >
                {/* time */}
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <Clock size={14} />
                  <span>{item.time}</span>
                </div>

                {/* title */}
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg md:text-[22px] font-bold text-[#333] leading-7">
                    {item.title}
                  </h3>

                  {(item.description || item.hasSpeakers) && (
                    <ChevronDown
                      className={`transition-transform text-[#c9060a] cursor-pointer ${
                        expandedId === item.id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* speakers (UNCHANGED UI) */}
                {expandedId === item.id && (
                  <>
                    {/* SPEAKERS (UNCHANGED UI) */}
                    {item.hasSpeakers && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 mt-8">
                        {item.speakers.map((speaker: any, idx: number) => (
                          <div key={idx} className="text-center">
                            <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                              <img
                                src={speaker.img}
                                onError={handleImageError}
                                className="w-full h-full object-cover  transition"
                              />
                            </div>

                            <h4 className="text-[#D0252D] font-black text-xs md:text-[17px] leading-5 md:leading-7 mt-2 uppercase">
                              {speaker.name}
                            </h4>

                            <p className="text-[15px] font-normal leading-6 text-[#333] px-2">
                              {speaker.role}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* 333 DESCRIPTION (HTML RENDERED) */}
                    <div
                      className="mt-6 text-sm text-[#333] leading-6 agenda-html"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummitAgenda;
