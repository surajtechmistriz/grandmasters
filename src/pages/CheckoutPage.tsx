import React, { useState } from "react";
import { useCart } from "../hooks/useCart";
import { useApplyCoupon, useRemoveCoupon } from "../services/APIs/useCoupon";
import { ChevronDown, Ticket } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { registerOrder, verifyPayment } from "../services/APIs/payment";
import { loadRazorpay } from "../utils/loadRazorpay";

const CheckoutPage = () => {
  const { data: cartData, isLoading } = useCart();
  const applyCouponMutation = useApplyCoupon();
  const removeCouponMutation = useRemoveCoupon();

  const cartItems = cartData?.data?.items || [];
  const cartTotal = cartData?.data || {};

  const navigate = useNavigate();

  const [showCouponBox, setShowCouponBox] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    designation: "",
    email: "",
    phone: "",
    country: "India",
    address: "",
    city: "",
    state: "",
    pincode: "",
    company_name: "",
  });

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      setCouponError("Please enter a coupon code.");
      return;
    }

    try {
      setCouponError("");

      await applyCouponMutation.mutateAsync(couponCode);

      setCouponCode("");
      setShowCouponBox(false);
    } catch (err: any) {
      setCouponError(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Invalid coupon code.",
      );
    }
  };

  const handleRemoveCoupon = async () => {
    try {
      await removeCouponMutation.mutateAsync(cartTotal?.coupon?.code);

      setCouponCode("");
      setShowCouponBox(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOrder = async () => {
    try {
      console.log("========== ORDER FLOW START ==========");
      console.log("Form Data:", formData);

      setLoading(true);

      if (
        !formData.first_name ||
        !formData.last_name ||
        !formData.email ||
        !formData.phone ||
        !formData.designation ||
        !formData.company_name ||
        !formData.address ||
        !formData.city ||
        !formData.state ||
        !formData.pincode
      ) {
        console.error("Validation Failed", formData);
        toast.error("Please fill all required fields");
        return;
      }

      console.log("Creating Order...");

      const registerResponse = await registerOrder({
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        designation: formData.designation,
        company_name: formData.company_name,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        pincode: formData.pincode,
      });

      console.log("========== REGISTER RESPONSE ==========");
      console.log(registerResponse);

      const order = registerResponse.data;

      console.log("Order Data:", order);

      console.log("Loading Razorpay SDK...");

      const loaded = await loadRazorpay();

      console.log("Razorpay Loaded:", loaded);

      if (!loaded) {
        toast.error("Unable to load payment gateway");
        return;
      }

      console.log("Opening Razorpay Checkout...");

      const razorpay = new window.Razorpay({
        key: order.razorpay_key,
        amount: order.amount,
        currency: order.currency,
        order_id: order.razorpay_order_id,

        name: "Grand Masters",
        description: order.order_number,

        prefill: {
          name: order.user.name,
          email: order.user.email,
          contact: order.user.phone,
        },

        handler: async (response: any) => {
          try {
            console.log("========== PAYMENT SUCCESS ==========");
            console.log("Razorpay Response:", response);

            const verifyPayload = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            };

            console.log("Verify Payload:", verifyPayload);

            const verifyRes = await verifyPayment(verifyPayload);

            console.log("========== VERIFY RESPONSE ==========");
            console.log(verifyRes);

            if (
              verifyRes.status &&
              verifyRes.data.payment_status === "SUCCESS"
            ) {
              console.log("Payment Verified Successfully");

              toast.success("Payment Successful");

              console.log("VERIFY RESPONSE", verifyRes);
              console.log("PAYMENT DATA SENT", verifyRes.data);

              navigate("/payment-success", {
                state: verifyRes.data,
              });
            } else {
              console.error("Verification Failed:", verifyRes);
              toast.error("Payment verification failed");
            }
          } catch (error: any) {
            console.error("VERIFY PAYMENT ERROR");
            console.error(error);
            console.error(error?.response?.data);

            toast.error("Payment verification failed");
          }
        },

        modal: {
          ondismiss: () => {
            console.warn("User Closed Razorpay Popup");
            toast.error("Payment cancelled");
          },
        },

        theme: {
          color: "#D0252D",
        },
      });

      console.log("Razorpay Instance:", razorpay);

      razorpay.open();
    } catch (error: any) {
      console.error("========== ORDER CREATION ERROR ==========");
      console.error(error);
      console.error(error?.response);
      console.error(error?.response?.data);

      toast.error(error?.response?.data?.message || "Order creation failed");
    } finally {
      console.log("========== ORDER FLOW END ==========");
      setLoading(false);
    }
  };

  if (isLoading && !cartData) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#D0252D]/20 border-t-[#D0252D]" />
      </div>
    );
  }

  const MiniLoader = () => (
    <div className="w-3.5 h-3.5 border-2 border-[#D12229] border-t-transparent rounded-full animate-spin" />
  );
  return (
    <div className="bg-white min-h-screen   font-sans text-[#333] mt-[100px]">
      <div className="max-w-6xl mx-auto bg-whit md:py-10 md:px-4">
        {/* Coupon Section */}
        {/* Coupon Section */}

        {cartTotal?.coupon ? (
          <div className="bg-[#f5f5f5] p-4 mb-4 flex items-center gap-3">
            <FaCheckCircle className="text-[#D0252D] text-lg" />

            <p className="text-sm md:text-base">
              Coupon code applied successfully.
              <span className="ml-2 font-semibold text-[#D0252D]">
                ({cartTotal.coupon.code})
              </span>
            </p>
          </div>
        ) : (
          <>
            <div className="bg-[#f5f5f5] p-4 mb-4 flex items-center gap-3">
              <Ticket className="text-[#D0252D] w-5 h-5" />

              <p className="text-sm md:text-base">
                Have a coupon?{" "}
                <button
                  onClick={() => setShowCouponBox(!showCouponBox)}
                  className="text-[#D0252D] underline cursor-pointer"
                >
                  Click here to enter your code
                </button>
              </p>
            </div>

            {showCouponBox && (
              <div className="border rounded-sm border-gray-300 p-6 bg-white">
                <div className="flex flex-col md:flex-row gap-4 md:gap-85">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleApplyCoupon();
                    }}
                    className="flex flex-col md:flex-row gap-4 md:gap-85"
                  >
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Coupon code"
                      className="border border-gray-300 md:px-1 md:py-1 rounded w-full md:w-35"
                    />

                    <button
                      onClick={handleApplyCoupon}
                      disabled={applyCouponMutation.isPending}
                      className="bg-[#e9e6ed] text-[#515151] hover:bg-[#d9d6dd] text-[15px] font-bold leading-3.5 px-4 py-1 rounded cursor-pointer disabled:opacity-50"
                    >
                      {applyCouponMutation.isPending
                        ? "Applying..."
                        : "Apply coupon"}
                    </button>
                  </form>
                </div>
                {couponError && (
                  <p className="mt-2 text-[11px] font-normal text-[#D0252D]">
                    {couponError}
                  </p>
                )}
              </div>
            )}
          </>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Left Column: Billing Details */}
          <div>
            <h2 className="text-[#D0252d] font-bold text-xl mb-6 uppercase tracking-wide">
              Billing Details
            </h2>

            <div className="space-y-5">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm mb-1">
                    First name <span className="text-[#D0252D]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.first_name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        first_name: e.target.value,
                      }))
                    }
                    placeholder="enter first name"
                    className="w-full border border-[#333333] p-1 rounded focus:ring-1 focus:ring-red-500 outline-none text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm mb-1">
                    Last name <span className="text-[#D0252D]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.last_name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        last_name: e.target.value,
                      }))
                    }
                    placeholder="enter last name"
                    className="w-full border border-[#333333] p-1 rounded focus:ring-1 focus:ring-red-500 outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Designation <span className="text-[#D0252D]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.designation}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      designation: e.target.value,
                    }))
                  }
                  placeholder="enter designation"
                  className="w-full border border-[#333333] p-1 rounded focus:ring-1 focus:ring-red-500 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Email address <span className="text-[#D0252D]">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  placeholder="enter email"
                  className="w-full border border-[#333333] p-1 rounded focus:ring-1 focus:ring-red-500 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Phone <span className="text-[#D0252D]">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  placeholder="enter phone"
                  className="w-full border border-[#333333] p-1 rounded focus:ring-1 focus:ring-red-500 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Company Name <span className="text-[#D0252D]">*</span>
                </label>

                <input
                  type="text"
                  value={formData.company_name}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      company_name: e.target.value,
                    }))
                  }
                  placeholder="Enter company name"
                  className="w-full border border-[#333333] p-1 rounded"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Address <span className="text-[#D0252D]">*</span>
                </label>

                <textarea
                  value={formData.address}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                  placeholder="Enter address"
                  rows={3}
                  className="w-full border border-[#333333] p-2 rounded"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    City <span className="text-[#D0252D]">*</span>
                  </label>

                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        city: e.target.value,
                      }))
                    }
                    className="w-full border border-[#333333] p-1 rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">
                    State <span className="text-[#D0252D]">*</span>
                  </label>

                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        state: e.target.value,
                      }))
                    }
                    className="w-full border border-[#333333] p-1 rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">
                    Pincode <span className="text-[#D0252D]">*</span>
                  </label>

                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        pincode: e.target.value,
                      }))
                    }
                    className="w-full border border-[#333333] p-1 rounded"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Country / Region <span className="text-[#D0252D]">*</span>
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
              <h2 className="text-[#D0252d] font-bold text-xl mb-6 uppercase tracking-wide">
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
              <h3 className="text-[#D0252d] font-bold text-lg uppercase tracking-tight">
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
          <h2 className="text-[#D0252d] font-bold text-[21px] leading-6 mb-3 uppercase">
            Your Order
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full table-fixed text-left border border-gray-300 border-collapse">
              <thead>
                <tr className="bg-[#D0252D] text-white">
                  <th className="px-4 py-3 font-semibold uppercase text-sm border border-gray-300">
                    Product
                  </th>
                  <th className="w-[420px] px-4 py-3 font-semibold uppercase text-sm border border-gray-300">
                    Subtotal
                  </th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {cartItems.map((item: any) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2 font-normal text-[#333] border border-gray-300">
                      {item.plan_name}
                      <span className="font-bold"> × {item.quantity}</span>
                    </td>

                    <td className="px-4 py-2 font-bold text-[#333] border border-gray-300">
                      ₹
                      {Number(item.price * item.quantity).toLocaleString(
                        "en-IN",
                      )}
                    </td>
                  </tr>
                ))}

                <tr className="bg-gray-50/50">
                  <td className="px-4 py-2 font-bold border border-gray-300">
                    Subtotal
                  </td>

                  <td className="px-4 py-2 font-bold text-[#333] border border-gray-300">
                    ₹{Number(cartTotal?.subtotal || 0).toLocaleString("en-IN")}
                  </td>
                </tr>

                {cartTotal?.coupon && (
                  <tr>
                    <td className="px-4 py-2 font-bold border border-gray-300">
                      Coupon ({cartTotal.coupon.code})
                    </td>

                    <td className="px-4 py-2 font-bold border border-gray-300">
                      <div className="flex items-center gap-2">
                        <span>
                          -₹
                          {Number(cartTotal.discount || 0).toLocaleString(
                            "en-IN",
                          )}
                        </span>

                        <button
                          onClick={handleRemoveCoupon}
                          disabled={removeCouponMutation.isPending}
                          className="text-[#D12229] inline-flex items-center justify-center w-[70px] h-[20px] cursor-pointer hover:underline"
                        >
                          {removeCouponMutation.isPending ? (
                            <MiniLoader />
                          ) : (
                            "[Remove]"
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                )}

                <tr>
                  <td className="px-4 py-2 font-bold text-[#333] border border-gray-300">
                    GST ({cartTotal?.gst_percent || 18}%)
                  </td>

                  <td className="px-4 py-2 font-bold text-[#333] border border-gray-300">
                    ₹
                    {Number(cartTotal?.gst_amount || 0).toLocaleString("en-IN")}
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="px-4 py-1 font-bold text-lg text-[#333] border border-gray-300">
                    Total
                  </td>

                  <td className="px-4 py-1 font-bold text-lg text-[#333] border border-gray-300">
                    ₹{Number(cartTotal?.total || 0).toLocaleString("en-IN")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-[#816e9924]">
          <div className="mt-8   rounded-md overflow-hidden">
            <div className="p-6   flex items-center  gap-2">
              <span className="text-[#333] flex font-medium">
                Credit Card/Debit Card/NetBanking
                <img
                  src="https://cdn.razorpay.com/static/assets/logo/rzp_payment_icon.svg"
                  className="h-5 md:h-10 w-auto ml-auto -mt-2"
                  alt="Credit Card/Debit Card/NetBanking"
                />
              </span>
            </div>

            <div className="mx-6  p-4 bg-gray-300 text-[#333] text-sm relative">
              <div className="absolute -top-2 left-4 w-4 h-4 bg-gray-300 rotate-45"></div>
              Pay securely by Credit or Debit card or Internet Banking through
              Razorpay.
            </div>
          </div>
          <hr className="border-gray-300 mt-8" />
          {/* Footer Actions */}
          <div className="mt-8 ">
            <p className="text-xs md:text-sm text-[#333] leading-relaxed px-6">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <button className="text-[#D0252D] hover:underline">
                privacy policy
              </button>
              .
            </p>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleOrder}
                disabled={loading}
                className="bg-[#D0252D] text-white px-6 py-3 rounded disabled:opacity-50"
              >
                {loading ? "Processing..." : "ORDER NOW"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
