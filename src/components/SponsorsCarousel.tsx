import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image from "../assets/images/sponsorImg.jpg";

import "swiper/css";
import "swiper/css/navigation";
import { useSponsors } from "../hooks/useSponsors";

const imgUrl = import.meta.env.VITE_SPONSORS_BASE_URL;

export default function SponsorsCarousel() {
  const { data } = useSponsors();

  const sponsors = data?.data?.margedSponsors || [];

  // console.log("Carousel data", data);
  // console.log("Carousel data", sponsors);
  return (
    <section className="pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Custom Previous Arrow */}
        <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 bg-white shadow-sm hover:border-[#D0252D] hover:text-[#D0252D] transition-all duration-300 cursor-pointer">
          <ChevronLeft size={18} />
        </button>

        {/* Custom Next Arrow */}
        <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 bg-white shadow-sm hover:border-[#D0252D] hover:text-[#D0252D] transition-all duration-300 cursor-pointer">
          <ChevronRight size={18} />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          loop={true}
          spaceBetween={20}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {sponsors.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="h-[220px] border border-[#f1f1f1] bg-white flex flex-col rounded-sm">
                {/* Partner Type */}
                <div className="">
                  <h3 className="font-roboto text-center pt-6 text-[15px] leading-6 font-bold text-[#333]">
                    {item.sponsor_type}
                  </h3>
                </div>

                {/* image */}
                <div className="flex-1 mb-5 flex items-start justify-center">
                  <img
                    src={`${imgUrl}/${item.image}`}
                    alt={item.sponsor_type}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
