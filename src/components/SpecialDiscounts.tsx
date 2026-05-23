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
            <AlarmClock size={48} strokeWidth={1.5} className="text-red-600" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font- text-gray-800 mb-2">
          Avail Special Discounts
        </h2>
        
        <p className="text-gray-700 text-lg mb-10">
          Limited Period <span className="text-red-600">Discounts & Offers</span>
        </p>

        {/* Discount List */}
        <div className="space-y-1 mb-10">
          {discounts.map((text, index) => (
            <p 
              key={index} 
              className="text-[#1a1a1a] font-medium text-sm  md:text-[15px]"
            >
              {text}
            </p>
          ))}
        </div>

        {/* Footer Notes */}
        <div className="space-y-1 -mt-5">
          <p className="text-gray-600 italic text-base">
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