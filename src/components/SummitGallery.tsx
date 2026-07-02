import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import icon6 from "../assets/icons/icon6.png";
import { getHomepageGallery, getSummitEvents } from "../services/APIs/homePage";

const IMAGE_URL = import.meta.env.VITE_GALLERY_BASE_URL;

const SummitGallery = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState<any[]>([]);
  const [galleryImages, setGalleryImages] = useState<any[]>([]);
  const [activeEvent, setActiveEvent] = useState<any>(null);

  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0 });
  const [showControls, setShowControls] = useState(true);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const fetchGallery = async (eventId: number) => {
    try {
      const res = await getHomepageGallery(eventId);
       console.log("Gallery API:", res.data);

      setGalleryImages(res.data.data || []);
      console.log("Gallery Images:", res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(galleryImages);

  // Fetch galleries
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);

        const res = await getSummitEvents(6);
        console.log("Res:", res);
        const eventList = res?.data?.data?.events || [];
        console.log("eventList:", eventList);
        setEvents(eventList);

        if (eventList.length > 0) {
          setActiveEvent(eventList[0]);
          setActiveTab(eventList[0].city?.name);

          await fetchGallery(eventList[0].id);

          requestAnimationFrame(() => {
            updateIndicator(0);
          });
        }
      } catch (err) {
        // console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    setShowControls(true);

    const timer = setTimeout(() => {
      setShowControls(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [selectedImage, selectedIndex]);

  // Update triangle indicator
  const updateIndicator = (index: number) => {
    const el = tabRefs.current[index];

    if (!el) return;

    const container = el.parentElement?.getBoundingClientRect();
    const tab = el.getBoundingClientRect();

    if (container) {
      setIndicatorStyle({
        left: tab.left - container.left + tab.width / 2,
      });
    }
  };

  // Move indicator when active tab changes
  useLayoutEffect(() => {
    if (!events.length || !activeTab) return;

    const index = events.findIndex((item) => item.city?.name === activeTab);

    if (index !== -1) {
      requestAnimationFrame(() => {
        updateIndicator(index);
      });
    }
  }, [events, activeTab]);

  const handleTabClick = async (event: any, index: number) => {
    setActiveTab(event.city?.name);
    setActiveEvent(event);

    updateIndicator(index);

    await fetchGallery(event.id);
  };

  const createSlug = (year: string, title: string) =>
    `the-grand-masters-${year}-${title
      .replace(/edition/gi, "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")}-edition-an-overview`;
  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#D0252D]/20 border-t-[#D0252D]" />
      </div>
    );
  }

  const nextImage = () => {
    if (!galleryImages.length) return;

    const next = (selectedIndex + 1) % galleryImages.length;

    setSelectedIndex(next);
    setSelectedImage(`${IMAGE_URL}${galleryImages[next].image}`);
  };
  const prevImage = () => {
    if (!galleryImages.length) return;

    const prev =
      (selectedIndex - 1 + galleryImages.length) % galleryImages.length;

    setSelectedIndex(prev);
    setSelectedImage(`${IMAGE_URL}${galleryImages[prev].image}`);
  };
  return (
    <section className="font-roboto pt-6 md:pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <div className="flex justify-center">
          <img
            src={icon6}
            alt="Summit Gallery"
            className="w-8 h-8 md:w-28 md:h-23"
          />
        </div>

        <h2 className="text-[#333] mb-2 text-3xl sm:text-4xl md:text-[50px] font-normal">
          2025 - 26 Summit Gallery
        </h2>

        <p className="text-[#8D93A0] text-sm md:text-[15px] mb-8 md:mb-12">
          A Visual <span className="text-[#D0252D]">Overview of Past</span>{" "}
          Summit Proceedings
        </p>

        {/* Tabs */}
        <div className="relative border-b border-gray-200 mb-8">
          <div className="overflow-x-auto whitespace-nowrap flex justify-center gap-6 sm:gap-x-8 pb-2">
            {events.map((event, index) => (
              <button
                key={event.id}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => handleTabClick(event, index)}
                className={`pb-3 sm:pb-4 text-xs sm:text-sm md:text-[15px] font-bold tracking-wide transition cursor-pointer ${
                  activeTab === event.city?.name
                    ? "text-[#D0252D]"
                    : "text-[#333] hover:text-black"
                }`}
              >
                {event.city?.name} Edition
              </button>
            ))}
          </div>

          {/* Triangle Indicator */}
          <div className="absolute bottom-[-1px] left-0 w-full pointer-events-none">
            <div
              className="hidden sm:block absolute w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[10px] border-t-[#D0252D] transition-all duration-300"
              style={{
                left: `${indicatorStyle.left}px`,
                transform: "translateX(-50%)",
              }}
            />
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 mt-4">
          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              className="aspect-[4/3] overflow-hidden bg-gray-100"
            >
              <img
                src={`${IMAGE_URL}${item.image}`}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => {
                  setSelectedIndex(index);
                  setSelectedImage(`${IMAGE_URL}${item.image}`);
                }}
              />
            </div>
          ))}
        </div>

        {/* View More */}
        <button
          onClick={() => {
            if (!activeEvent) return;

            navigate(`/${createSlug(activeEvent.year, activeEvent.title)}`, {
              state: {
                id: activeEvent.id,
                year: activeEvent.year,
              },
            });
          }}
          className="mt-8 md:mt-10 px-6 py-3 rounded-sm border border-[#D0252D] text-[#D0252D] text-[11px] font-bold tracking-[0.2rem] hover:bg-[#D0252D] hover:text-white transition cursor-pointer"
        >
          VIEW MORE
        </button>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          onMouseMove={() => setShowControls(true)}
        >
          {/* Close */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-5xl z-[1001] cursor-pointer"
          >
            ×
          </button>

          {/* Full Image */}
         <img
  src={selectedImage}
  alt="Gallery"
  className="w-screen h-screen object-contain cursor-pointer"
  onClick={() => setShowControls((prev) => !prev)}
/>

          {/* Bottom Controls */}
          <div
            className={`absolute bottom-0 left-0 w-full h-12 bg-black z-[1000]
            flex items-center justify-center gap-145
            transition-all duration-300
            ${showControls ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
          >
            <button
              onClick={prevImage}
              className="text-white text-5xl font-bold cursor-pointer"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="text-white text-5xl font-bold cursor-pointer"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SummitGallery;
