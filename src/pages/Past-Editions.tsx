import React, { useEffect, useState } from "react";
import image from "../assets/images/pastEdition.jpg";
import { useNavigate } from "react-router-dom";
import { getPastEdition } from "../services/APIs/pastEdition";

type EventItem = {
  id: number;
  title: string;
  city?: {
    name: string;
  };
  image?: string | null;
};

type EventSection = {
  year: number;
  events: EventItem[];
};

const imgUrl = import.meta.env.VITE_PASTEDITIONS_BASE_URL;

// Image with loading state using skeleton
const ImageWithLoader = ({ 
  src, 
  alt, 
  fallbackSrc, 
  className, 
  onClick 
}: { 
  src: string; 
  alt: string; 
  fallbackSrc: string; 
  className?: string; 
  onClick?: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full">
      {/* Skeleton Loader */}
      {isLoading && (
        <div className="w-full aspect-[4/3] bg-gray-200 animate-pulse rounded-md flex items-center justify-center">
          <svg 
            className="w-12 h-12 text-gray-300" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}

      {/* Image */}
      <img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        className={`w-full h-auto object-contain cursor-pointer transition-opacity duration-300 ${
          isLoading ? 'opacity-0 absolute inset-0' : 'opacity-100 relative'
        } ${className || ''}`}
        onClick={onClick}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

const PastEdition = () => {
  const navigate = useNavigate();
  const [sections, setSections] = useState<EventSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await getPastEdition();
        const eventsData = res?.data?.events || [];
        const sortedData = [...eventsData].sort((a, b) => b.year - a.year);
        setSections(sortedData);
      } catch (error) {
        console.error("PAST EDITION API ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    dataFetch();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#D0252D]/20 border-t-[#D0252D]" />
      </div>
    );
  }

  if (!sections.length) {
    return (
      <div className="mt-[120px] text-center">
        <h2 className="text-xl font-semibold">No Past Editions Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-[100px] bg-white">
      {sections.map((section, index) => {
        return (
          <div key={section?.year || index} className="mb-10">
            <div className="bg-[#d12229] py-8">
              <h1 className="font-roboto text-center text-[35px] font-normal -tracking-wider text-white">
                The Grand Masters {section?.year} Editions
              </h1>
            </div>

            <div className="mx-auto max-w-6xl px-6 py-10">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {section?.events?.map((event) => {
                  const imageSrc = event?.image ? `${imgUrl}/${event.image}` : image;
                  
                  const handleNavigate = () => {
                    const slug = `the-grand-masters-${section.year}-${event.city?.name
                      ?.toLowerCase()
                      .replace(/\s+/g, "-")}-edition-an-overview`;

                    navigate(`/${slug}`, {
                      state: {
                        id: event.id,
                        year: section.year,
                        event,
                      },
                    });
                  };

                  return (
                    <div
                      key={event?.id}
                      className="border border-gray-300 bg-white shadow-xl"
                    >
                      <div className="p-8">
                        <ImageWithLoader
                          src={imageSrc}
                          alt={event?.title || "Event image"}
                          fallbackSrc={image}
                          className="w-full"
                          onClick={handleNavigate}
                        />
                      </div>

                      <div className="pb-4 text-center">
                        <h2
                          onClick={handleNavigate}
                          className="font-roboto text-[20px] font-normal text-[#d71920] hover:underline cursor-pointer"
                        >
                          {event?.title}
                        </h2>

                        <p className="mt-2 text-[16px] text-[#b3b2b2]">
                          {event?.city?.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PastEdition;