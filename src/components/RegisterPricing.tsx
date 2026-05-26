import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterPricing = () => {

  const navigate = useNavigate()
  
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
    <section className="py-16 px-4 font-sans bg-[#f5f5f5]">
      <div className="font-roboto  max-w-7xl mx-auto text-center mb-12">
        <div className="flex justify-center mb-4">
          <span className="text-4xl text-[#d2232a]">📋</span>
        </div>
        <h2 className="text-[50px]  font-normal leading-[55px] text-gray-800 mb-2">
          Delegate Registrations
        </h2>
        <p className="text-gray-600 text-[15px] font-normal leading-[28px]" >
          It's a Race Against Time. Avail Best Possible Discounts Now.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`relative flex flex-col pt-8 pb-5 px-6 rounded-xl shadow-xl transition-transform hover:shadow-2xl ${tier.bgColor}`}
          >
            {tier.tag && (
              <div
                className={`absolute text-[15px] font-normal font-roboto leading-[28px] -top-3 left-1/2 -translate-x-1/2 px-1 py-1 rounded text-white text-xs  tracking-wider ${tier.tagColor}`}
              >
                {tier.tag}
              </div>
            )}

            <h3 className="font-roboto text-[#d2232a] font-bold text-[17px] leading-[18px] mb-1 h-10 flex items-center justify-center text-center">
              {" "}
              {tier.title}
            </h3>

            <div className="text-[26px] font-bold font-roboto leading-[30px]   text-gray-800 mb-4">
              {tier.price}
            </div>

            <div className="font-roboto flex-grow space-y-2 mb-8">
              {tier.details.map((line, i) => (
                <p
                  key={i}
                  className={`text-sm ${tier.isPremium && i < 2 ? "font-semibold" : "text-gray-700"}`}
                >
                  {line}
                </p>
              ))}
            </div>

            <button
            onClick={()=> navigate("/cart")}
              className={`font-custom mt-auto py-2 px-8 border rounded-md font-bold text-[#D2520D] hover:bg-[#D2520D] hover:text-white  cursor-pointer transition-colors ${tier.buttonBorder}`}
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
