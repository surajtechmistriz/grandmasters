import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterPricing = () => {
  const navigate = useNavigate();

  const tiers = [
    {
      title: "Corporate Registrations",
      price: "₹7,000 Onwards",
      tag: "TRENDING",
      tagColor: "bg-[#d2232a]",
      bgColor: "bg-[#d1e9e3]",
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
      bgColor: "bg-[#f3d7f4]",
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
      bgColor: "bg-[#ffd3b4]",
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
      bgColor: "bg-[#fef0b3]",
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
    <section className="py-10 md:py-16 px-4 font-sans bg-[#f5f5f5]">
      <div className="font-roboto max-w-7xl mx-auto text-center mb-8 md:mb-12 px-2">
        <div className="flex justify-center mb-4">
          <span className="text-3xl md:text-4xl text-[#d2232a]">📋</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[50px] font-normal leading-tight md:leading-[55px] text-gray-800 mb-2">
          {" "}
          Delegate Registrations
        </h2>
        <p className="text-gray-600 text-sm md:text-[15px] font-normal leading-relaxed md:leading-[28px]">
          It's a Race Against Time. Avail Best Possible Discounts Now.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-0 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`relative flex flex-col pt-8 pb-5 px-4 md:px-6 rounded-xl shadow-xl transition-transform hover:shadow-2xl ${tier.bgColor}`}
          >
            {tier.tag && (
              <div
  className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded text-white text-xs md:text-sm font-medium tracking-wide ${tier.tagColor}`}
>
  {tier.tag}
</div>
            )}

            <h3 className="font-roboto text-[#d2232a] font-bold text-base md:text-[17px] leading-tight mb-1 min-h-[48px] flex items-center justify-center text-center">
              {" "}
              {tier.title}
            </h3>

            <div className="text-2xl md:text-[26px] font-bold font-roboto leading-tight md:leading-7.5 text-gray-800 mb-4">
              {tier.price}
            </div>

            <div className="font-roboto flex-grow space-y-2 mb-8">
              {tier.details.map((line, i) => (
                <p
                  key={i}
                  className={`text-sm leading-relaxed ${
                    tier.isPremium && i < 2 ? "font-semibold" : "text-gray-700"
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>

            <button
              onClick={() => navigate("/cart")}
              className={`font-custom mt-auto w-full py-3 px-4 border rounded-md font-bold text-[#D2520D] hover:bg-[#D2520D] hover:text-white cursor-pointer transition-colors ${tier.buttonBorder}`}
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
