import React from "react";
import { CreditCard, ChevronDown, Ticket } from "lucide-react";

const CheckoutPage = () => {
  return (
    <div className="bg-white min-h-screen   font-sans text-[#333] mt-[100px]">
      <div className="max-w-6xl mx-auto bg-whit md:py-10 md:px-4">
        {/* Coupon Section */}
        <div className="bg-[#f5f5f5f5]  p-4 mb-10 flex items-center gap-3">
          <Ticket className="text-blue-500 w-5 h-5" />
          <p className="text-sm md:text-base">
            Have a coupon?{" "}
            <button className="text-[#D0252D] hover:underline font-normal cursor-pointer">
              Click here to enter your code
            </button>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Billing Details */}
          <div>
            <h2 className="text-red-700 font-bold text-xl mb-6 uppercase tracking-wide">
              Billing Details
            </h2>

            <div className="space-y-5">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm mb-1">
                    First name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="enter first name"
                    className="w-full border border-[#333333] p-1 rounded focus:ring-1 focus:ring-red-500 outline-none text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm mb-1">
                    Last name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="enter last name"
                    className="w-full border border-[#333333] p-1 rounded focus:ring-1 focus:ring-red-500 outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Designation <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="enter designation"
                  className="w-full border border-[#333333] p-1 rounded focus:ring-1 focus:ring-red-500 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Email address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="enter email"
                  className="w-full border border-[#333333] p-1 rounded focus:ring-1 focus:ring-red-500 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="enter phone"
                  className="w-full border border-[#333333] p-1 rounded focus:ring-1 focus:ring-red-500 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Country / Region <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <select className="w-full border border-[#333333] p-1 rounded appearance-none bg-white focus:ring-1 focus:ring-red-500 outline-none text-sm">
                    <option>India</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#8D93A0] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Additional Info & Contact */}
          <div className="space-y-8">
            <div>
              <h2 className="text-red-700 font-bold text-xl mb-6 uppercase tracking-wide">
                Additional Information
              </h2>
              <label className="block text-sm mb-2 text-[#333]">
                Your Message to the Organizer (optional)
              </label>
              <textarea
                rows="6"
                placeholder="Notes about your order, e.g. special notes for delivery."
                className="w-full border border-[#333333] p-3 rounded focus:ring-1 focus:ring-red-500 outline-none text-sm"
              ></textarea>
            </div>

            <div className="space-y-4">
              <h3 className="text-red-700 font-bold text-lg uppercase tracking-tight">
                In Case of Any Assistance WRT Your Purchase;
              </h3>
              <div className="text-sm space-y-3 text-[#333]">
                <p>
                  <span className="font-semibold">Bhupinder Kaur</span> |
                  +91-9654155065 | bhupinder@witnesslive.in
                </p>
                <p>
                  <span className="font-semibold">Neelima Maheshwari</span> |
                  +91-8800841600 | neelima.maheshwari@witnesslive.in
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Table */}
        <div className="mt-16">
          <h2 className="text-red-700 font-bold text-2xl mb-6 uppercase">
            Your Order
          </h2>
          <div className="overflow-x-auto border border-gray-200 rounded">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="p-4 font-semibold uppercase text-sm">
                    Product
                  </th>
                  <th className="p-4 font-semibold uppercase text-sm">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-4 font-medium text-[#333]">
                    International Delegates{" "}
                    <span className="font-bold">× 1</span>
                  </td>
                  <td className="p-4 font-bold text-[#333]">₹30,000.00</td>
                </tr>
                <tr className="border-b bg-gray-50/50">
                  <td className="p-4 font-bold">Subtotal</td>
                  <td className="p-4 font-bold text-[#333]">₹30,000.00</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-bold text-[#333]">GST ( 18% )</td>
                  <td className="p-4 font-bold text-[#333]">₹5,400.00</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-bold text-lg text-[#333]">Total</td>
                  <td className="p-4 font-bold text-lg text-[#333]">
                    ₹35,400.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-[#816e9924]">
          <div className="mt-8   rounded-md overflow-hidden">
            <div className="p-6   flex items-center gap-2">
              <span className="text-[#333] font-medium">
                Credit Card/Debit Card/NetBanking
              </span>
              <div className="flex items-center gap-1 ml-2">
                <div className="bg-blue-600 text-white px-1 italic font-bold text-xs transform -skew-x-12">
                  R
                </div>
                <span className="font-bold text-[#333]">Pay by Razorpay</span>
              </div>
            </div>

            <div className="mx-6 mb-6 p-4 bg-gray-300 text-[#333] text-sm relative">
              <div className="absolute -top-2 left-4 w-4 h-4 bg-gray-300 rotate-45"></div>
              Pay securely by Credit or Debit card or Internet Banking through
              Razorpay.
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-8 space-y-4">
            <p className="text-xs md:text-sm text-[#333] leading-relaxed px-6">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <button className="text-red-600 hover:underline">
                privacy policy
              </button>
              .
            </p>
            <div className="flex justify-end">
              <button className="bg-[#D0252D] cursor-pointer text-white text-sm font-medium m-4 py-2 px-6 rounded transition-colors uppercase">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
