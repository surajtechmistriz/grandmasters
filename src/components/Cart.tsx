import React from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import img from "../assets/images/lwLogo.jpg"
const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Law Firms & Solutions Providers",
      price: 9000,
      quantity: 3,
      subtotal: 27000,
    },
    {
      id: 2,
      name: "For Corporates",
      price: 7500,
      quantity: 2,
      subtotal: 15000,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 font-roboto text-gray-700 my-[120px]">
      {/* Success Alert */}
      <div className="flex items-center gap-3 border border-black p-4 mb-8 bg-white rounded-sm">
        <FaCheckCircle className="text-[#d2232a] text-lg" />
        <p className="text-[15px]">"For Corporates" has been added to your cart.</p>
      </div>

      {/* Cart Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#d2232a] text-white uppercase text-[13px] font-bold tracking-wider">
              <th className="p-3 w-16"></th>
              <th className="p-3 w-20"></th>
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Subtotal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <tr key={item.id} className="text-[15px]">
                <td className="p-4 text-center">
                  <FaTimes className="text-[#d2232a] cursor-pointer mx-auto " />
                </td>
                <td className="p-4 ">
                  {/* <div className="w-10 h-10 bg-[#D12229] flex items-center justify-center text-white font-bold text-xl rounded-sm italic">
                    W
                  </div> */}
                  <img src={img} alt=""  className="cursor-pointer"/>
                </td>
                <td className="p-4 text-[#d2232a] hover:underline cursor-pointer">
                  {item.name}
                </td>
                <td className="p-4">₹{item.price.toLocaleString("en-IN")}.00</td>
                <td className="p-4">
                  <input
                    type="number"
                    defaultValue={item.quantity}
                    className="w-12 border border-gray-200 p-2 text-center focus:outline-none cursor-pointer"
                  />
                </td>
                <td className="p-4">₹{item.subtotal.toLocaleString("en-IN")}.00</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Coupon Section */}
        <div className="p-4 flex flex-wrap justify-between items-center bg-white border-t border-gray-200 gap-4 rounded-sm">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Coupon code"
              className="border border-gray-300 rounded-sm px-4 py-2 w-32 md:w-48 text-sm focus:outline-none focus:border-red-500"
            />
            <button className="bg-[#D12229] rounded-sm text-white px-6 py-2 text-[13px] font-bold uppercase tracking-tight  transition cursor-pointer">
              Apply coupon
            </button>
          </div>
          <button className="bg-gray-100 text-gray-400 px-6 py-2 text-[13px] font-bold uppercase tracking-tight rounded-sm cursor-not-allowed">
            Update cart
          </button>
        </div>
      </div>

      {/* Cart Totals */}
      <div className="mt-12 flex justify-end">
        <div className="w-full max-w-md">
          <h2 className="text-[#D12229] text-xl font-bold uppercase mb-4 ">
            Cart totals
          </h2>
          <table className="w-full border border-gray-200 text-[14px]">
            <tbody>
              <tr className="border-b border-gray-200">
                <th className="p-3 text-left font-bold w-1/3">Subtotal</th>
                <td className="p-3 text-gray-600">₹42,000.00</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="p-3 text-left font-bold">GST ( 18% )</th>
                <td className="p-3 text-gray-600">₹7,560.00</td>
              </tr>
              <tr>
                <th className="p-3 text-left font-bold">Total</th>
                <td className="p-3 font-bold text-[16px]">₹49,560.00</td>
              </tr>
            </tbody>
          </table>
          <button className="w-full mt-6 bg-[#D12229] text-white py-4 text-[16px] font-bold rounded-sm uppercase tracking-tight  transition cursor-pointer">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;