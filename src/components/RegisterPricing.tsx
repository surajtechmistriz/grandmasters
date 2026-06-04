import React from "react";
import { useNavigate } from "react-router-dom";
import icon4 from "../assets/icons/icon4.png";

const RegisterPricing = () => {
  const navigate = useNavigate();

  const tiers = [
    {
      title: "Corporate Registrations",
      price: "₹7,000 Onwards",
      tag: "TRENDING",
      tagColor: "bg-[#d2232a]",
      bgColor: "bg-[#C2E5DF]",
      buttonBorder: "border-gray-400",
      details: [
        "1 Seat – INR 10000 per Seat",
        "2 Seats – INR 7500 per Seat",
        "3 Seats – INR 7000 per Seat",
      ],
    },
    {
      title: "Law Firms & Solutions Providers",
      price: "₹9,000 Onwards",
      tag: null,
      bgColor: "bg-[#F3D4F3]",
      buttonBorder: "border-pink-400",
      details: [
        "1 Seat – INR 12000 per Seat",
        "2 Seats – INR 10000 per Seat",
        "3 Seats – INR 9000 per Seat",
      ],
    },
    {
      title: "International Delegates",
      price: "₹20,000 Onwards",
      tag: null,
      bgColor: "bg-[#FFCAA4]",
      buttonBorder: "border-orange-400",
      details: [
        "1 Seat – INR 30000 per Seat",
        "2 Seats – INR 25000 per Seat",
        "3 Seats – INR 20000 per Seat",
      ],
    },
    {
      title: "The Lex Witness Annual Pass",
      price: "₹40,000 Onwards",
      tag: "MOST PREFERRED",
      tagColor: "bg-[#d2232a]",
      bgColor: "bg-[#FFE9AE]",
      buttonBorder: "border-red-400",
      isPremium: true,
      details: [
        "Access to all Summits",
        "Transferable at any Time",
        "1 Pass: INR 60000 per pass",
        "2 Passes: INR 50000 per pass",
        "3 Passes: INR 40000 per pass",
      ],
    },
  ];

  return (
    <section className="py-4  md:pb-16  font-sans bg-[#f5f5f5]">
      <div className="font-roboto max-w-6xl mx-auto text-center mb-8 md:mb-8 px-2">
        <div className="flex justify-center ">
          <img
            src={icon4}
            className="text-3xl md:text-4xl h-24 text-[#d2232a]"
          />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[50px] md:tracking-tighter font-normal leading-tight md:leading-[55px] text-gray-800 mb-2">
          {" "}
          Delegate Registrations
        </h2>
        <p className="text-gray-600 text-sm md:text-[15px] font-normal leading-relaxed md:leading-[28px]">
          It's a Race Against Time. Avail Best Possible Discounts Now.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`relative flex flex-col pt-8 pb-5 px-4 md:px-6 rounded-xl transition-transform  shadow-[6px_6px_10px_rgba(0,0,0,0.26)] ${tier.bgColor}`}
          >
            {tier.tag && (
              <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded text-white text-xs md:text-sm font-medium tracking-wide ${tier.tagColor}`}
              >
                {tier.tag}
              </div>
            )}

            <h3 className="font-roboto text-[#d2232a] font-bold text-base md:text-[17px] tracking-tighter leading-tight mb-1 min-h-[48px] flex items-center justify-center text-center whitespace-nowrap">
              {tier.title}
            </h3>

            <div className="text-2xl md:text-[26px] font-bold font-roboto leading-tight md:leading-7.5 text-gray-800 mb-4">
              {tier.price}
            </div>

            <div className="font-roboto flex-grow space-y-2 mb-8 items-center self-center">
              {tier.details.map((line, i) => (
                <p
                  key={i}
                  className={`text-sm leading-relaxed self-center ${
                    tier.isPremium && i < 2
                      ? "font-semibold self-center"
                      : "text-gray-700 self-center"
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>

            <button
              onClick={() => navigate("/cart")}
              className={`font-custom mt-auto w-35 mx-auto py-3 px-4  border border-[#D0252D] rounded-md font-bold text-[#D0252D]  hover:bg-[#D0252D] hover:text-white cursor-pointer transition-colors `}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RegisterPricing;
