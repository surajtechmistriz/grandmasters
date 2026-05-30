import React from "react";
import bgImg from "../assets/images/chess.jpg";

const GetInvolved = () => {
  return (
    <section className="relative min-h-[300px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 text-center text-white mt-0 lg:-mt-20">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-[50px] font-normal leading-tight md:leading-[55px] font-roboto">
            Get <br /> Involved
          </h2>
          <p className="tracking-wide text-white text-sm md:text-[15px] font-normal leading-relaxed md:leading-[28px] font-roboto px-2">
            All that You'd Like to Know about The Grand Masters 2026
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 max-w-md mx-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
            />

            {/* Checkbox */}
            <div className="flex items-start gap-3 py-2">
              <input
                type="checkbox"
                id="updates"
                className="mt-1.5 h-4 w-4 accent-gray-500 cursor-pointer"
              />
              <label
                htmlFor="updates"
                className="text-white opacity-90 cursor-pointer text-sm md:text-[15px] font-normal leading-relaxed md:leading-[28px] font-roboto"
              >
                Please send me all Lex Witness Magazine, Events and other
                initiatives related updates.
              </label>
            </div>

            {/* Recaptcha Placeholder */}
            <div className="bg-white p-3 rounded-sm flex items-center justify-between w-full max-w-[300px]">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-gray-700 text-sm md:text-[15px] font-normal leading-relaxed font-roboto">
                  I'm not a robot
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  alt="recaptcha"
                  className="w-8 h-8"
                />
                <span className="text-[10px] text-gray-500">reCAPTCHA</span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3 border rounded-sm border-white text-white font-medium uppercase text-sm hover:bg-[#d0252d] hover:text-white cursor-pointer transition-all duration-300 bg-black/30"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
