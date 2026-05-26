import React from 'react';
import { AlarmClock } from 'lucide-react';

const SpecialDiscounts = () => {
  const discounts = [
    "Early Bird – 25% Discount for 1st 25 Seats",
    "Special 15% Discount for SILF Members",
    "Special 15% Discount for all IWIRC India Members",
    "Special Red Carpet for the Ladies – 10% Discount",
    "Lex Witness Subscribers – 10% Discount"
  ];

  return (
    <section className="py-16 px-4 bg-white font-sans">
      <div className="max-w-4xl mx-auto text-center">
        {/* Alarm Clock Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <AlarmClock size={48} strokeWidth={1.5} className="text-[#d2232a]" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-[50px]  font-normal font-roboto leading-[55px] text-gray-800 mb-2">
          Avail Special Discounts
        </h2>
        
        <p className="text-gray-700 text-[15px] font-normal leading-[28px] font-roboto mb-10">
          Limited Period <span className="text-[#d2232a]">Discounts & Offers</span>
        </p>

        {/* Discount List */}
        <div className="space-y-1 mb-10">
          {discounts.map((text, index) => (
            <p 
              key={index} 
              className="text-[#1a1a1a] text-[15px] font-bold leading-[28px] font-roboto"
            >
              {text}
            </p>
          ))}
        </div>

        {/* Footer Notes */}
        <div className="space-y-1 -mt-5">
          <p className="text-gray-600 italic  text-[15px] font-normal leading-[28px] font-roboto">
            *No 2 Discounts can be clubbed together
          </p>
          <p className="text-gray-600 italic text-base">
            *Taxes Extra as Applicable
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialDiscounts;