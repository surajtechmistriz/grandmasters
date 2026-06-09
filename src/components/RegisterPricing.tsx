import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import icon4 from "../assets/icons/icon4.png";
import { getPlans } from "../services/APIs/plans";

const RegisterPricing = () => {
  const navigate = useNavigate();

  const [plan, setPlan] = useState<any[]>([]);

  useEffect(() => {
    const getPlan = async () => {
      try {
        const res = await getPlans();
        console.log("Plans", res);
        setPlan(res.data);
      } catch (error: any) {
        console.error("API Error:", error.response);
      }
    };

    getPlan();
  }, []);

  const cardColors = [
    "bg-[#C2E5DF]", // Corporate Registrations
    "bg-[#F3D4F3]", // Law Firms
    "bg-[#FFCAA4]", // International
    "bg-[#FFE9AE]", // Annual Pass
  ];

  return (
    <section className="py-4  md:pb-16  font-sans bg-[#f5f5f5]">
      <div className="font-roboto max-w-6xl mx-auto text-center mb-8 md:mb-8 px-2">
        <div className="flex justify-center ">
          <img
            src={icon4}
            className="text-3xl md:text-4xl h-24 text-[#D0252D]"
          />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[50px] md:tracking-tighter font-normal leading-tight md:leading-[55px] text-[#333] mb-2">
          {" "}
          Delegate Registrations
        </h2>
        <p className="text-[#333] text-sm md:text-[15px] font-normal leading-relaxed md:leading-[28px]">
          It's a Race Against Time. Avail Best Possible Discounts Now.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {plan.map((tier: any, index: number) => (
          <div
            key={tier.id}
            className={`relative flex flex-col pt-8 pb-5 px-4 md:px-6 rounded-xl transition-transform shadow-[6px_6px_10px_rgba(0,0,0,0.26)] ${
              cardColors[index % cardColors.length]
            }`}
          >
            {tier.tag && (
              <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded text-white text-xs md:text-sm font-medium tracking-wide bg-[#D0252D] `}
              >
                {tier.tag}
              </div>
            )}

            <h3 className="font-roboto text-[#D0252D] font-bold -mt-3 text-base md:text-[17px] tracking-tighter leading-tight min-h-[48px] flex items-center justify-center text-center whitespace-nowrap">
              {tier.title}
            </h3>

            <div className="text-2xl md:text-[26px] font-bold font-roboto leading-tight md:leading-7.5 text-[#333] mb-4">
              ₹{Number(tier.starting_price).toLocaleString()} Onwards
            </div>

            <div
              className="font-roboto flex-grow mb-8 text-center text-sm leading-relaxed space-y-2"
              dangerouslySetInnerHTML={{ __html: tier.description }}
            />

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
