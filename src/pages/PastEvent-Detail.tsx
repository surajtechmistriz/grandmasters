import img1 from "../assets/images/detail.jpg";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getPastEditionDetail } from "../services/APIs/pastEdition";

const EditionOverview = () => {
  const { slug } = useParams();
  const location = useLocation();

  const id = location.state?.id;
  const year = location.state?.year;

  console.log(location.state?.id);
  console.log(location.state?.year);

  console.log("Slug:", slug);
  console.log("Event ID:", id);
  console.log("Event:", location.state);

  const [eventData, setEventData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState("speakers");

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        if (!id || !year) return;

        const res = await getPastEditionDetail(id, year);
        setEventData(res.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id, year]);

  useEffect(() => {
    if (!selectedImage) return;

    setShowControls(true);

    const timer = setTimeout(() => {
      setShowControls(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [selectedImage, selectedIndex]);

  const images = eventData?.gallery?.images || [];

  const nextImage = () => {
    if (!images.length) return;

    const next = (selectedIndex + 1) % images.length;

    setSelectedIndex(next);
    setSelectedImage(images[next]);
  };

  const prevImage = () => {
    if (!images.length) return;

    const prev = (selectedIndex - 1 + images.length) % images.length;

    setSelectedIndex(prev);
    setSelectedImage(images[prev]);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="flex items-center gap-3">
          <span className="relative flex h-5 w-5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D0252D] opacity-75"></span>
            <span className="relative inline-flex h-5 w-5 rounded-full bg-[#D0252D]"></span>
          </span>

          {/* <span className="font-semibold tracking-widest text-[#D0252D]">
          LOADING..
        </span> */}
        </div>
      </div>
    );
  }

  console.log("Data", eventData);

  return (
    <div className="min-h-screen font-roboto bg-white mt-20 lg:mt-[100px]">
      {/* Header */}
      <div className="bg-[#D0252D] py-4 sm:py-7">
        <h1 className="text-center text-white text-2xl tracking-[-0.1rem] leading-9.5 sm:text-3xl md:text-[35px] font-normal px-4">
          The Grand Masters {eventData?.year},
          <span className="ml-2">{eventData?.city?.name}</span> Edition - An
          Overview
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-14">
        {/* Tabs */}
        <div className="flex justify-center border-b gap-0.5 border-[#D0252D]">
          <button
            onClick={() => setActiveTab("speakers")}
            className={`font-roboto px-4 sm:px-1 py-5 text-sm font-bold border border-b-0 transition cursor-pointer ${
              activeTab === "speakers"
                ? "bg-[#D0252D] text-white border-[#D0252D]"
                : "bg-white text-[#333] border-gray-300"
            }`}
          >
            Speakers
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={` font-roboto px-4 sm:px-1 py-5 text-sm font-bold border border-b-0 transition cursor-pointer ${
              activeTab === "gallery"
                ? "bg-[#D0252D] text-white border-[#D0252D]"
                : "bg-white text-[#333] border-gray-300"
            }`}
          >
            Gallery
          </button>
        </div>

        {/* Speakers Tab */}
        {activeTab === "speakers" && (
          <div className="mt-3 px-2 sm:px-4 text-[15px] font-roboto leading-7 text-[#333] md:px-8 pb-8">
            <div className="space-y-1">
              {eventData?.speakers?.map((item: any) => (
                <div key={item.id} className="flex items-baseline gap-1">
                  <p className="font-bold -mb-1">{item.speaker?.name}</p>

                  <span className="text-gray-600">,</span>

                  <p className="text-gray-600">{item.speaker?.designation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === "gallery" && (
          <div className="py-6 sm:py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5">
              {eventData?.gallery?.images?.map((img: string, index: number) => (
                <div key={index} className="overflow-hidden bg-white shadow-sm">
                  <img
                    src={img}
                    onClick={() => {
                      setSelectedIndex(index);
                      setSelectedImage(img);
                    }}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-[220px] object-cover cursor-pointer transition-transform duration-300  "
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          onMouseMove={() => setShowControls(true)}
        >
          {/* Close */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-5xl z-[1001]"
          >
            ×
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-h-screen max-w-[90vw] object-contain cursor-pointer"
            onClick={() => setShowControls((prev) => !prev)}
          />

          {/* Controls */}
          <div
            className={`absolute bottom-0 left-0 w-full h-12 bg-black flex items-center justify-center gap-40 transition-all duration-300
      ${showControls ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
          >
            <button
              onClick={prevImage}
              className="text-white text-5xl font-bold"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="text-white text-5xl font-bold"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditionOverview;
