import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const payment = location.state;
  console.log("Payment Data:", payment);

  return (
    <div className="min-h-screen mt-20 bg-[#f5f5f5] flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#D0252D] text-white text-center py-6">
          <CheckCircle size={52} className="mx-auto mb-2" />

          <h1 className="text-2xl font-bold">Payment Successful</h1>

          <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mt-2">
            Payment Verified
          </div>

          <p className="mt-2 text-sm opacity-90">Thank you for your purchase</p>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="bg-[#f5f5f5] rounded-lg p-4">
            <div className="grid gap-3 text-sm text-[#333333]">
              <div className="flex justify-between border-b py-2">
                <span className="font-medium">Order Number</span>
                <span>{payment.order_number}</span>
              </div>

              <div className="flex justify-between border-b py-2">
                <span className="font-medium">Order ID</span>
                <span>{payment.order_id}</span>
              </div>

              <div className="flex justify-between border-b py-2">
                <span className="font-medium">Transaction ID</span>
                <span>{payment.transaction_id}</span>
              </div>

              <div className="flex justify-between border-b py-2">
                <span className="font-medium">Payment Status</span>

                <span className="font-semibold text-green-600">
                  {payment.payment_status}
                </span>
              </div>

              <div className="flex justify-between border-b py-2">
                <span className="font-medium">Amount Paid</span>
                <span className="font-sans">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(Number(payment.payment_amount))}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Gateway Order ID</span>
                <span>{payment.gateway_order_id}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <button
              onClick={() => navigate("/")}
              className="flex-1 bg-[#D0252D] text-white py-2.5 text-sm rounded-md font-semibold hover:opacity-90 transition cursor-pointer"
            >
              Back To Home
            </button>

            <button
              onClick={() => window.print()}
              className="flex-1 border border-[#D0252D] text-[#D0252D] py-3 rounded-md font-semibold hover:bg-[#D0252D] hover:text-white transition cursor-pointer"
            >
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
