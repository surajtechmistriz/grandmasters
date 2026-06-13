import api from "../axios";

export const registerOrder = async (payload: any) => {
  console.log("=== REGISTER ORDER REQUEST ===");
  console.log(payload);

  const res = await api.post("/order/register", payload);

  console.log("=== REGISTER ORDER RESPONSE ===");
  console.log(res);

  console.log("=== REGISTER ORDER DATA ===");
  console.log(res.data);

  return res.data;
};

export const verifyPayment = async (payload: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}) => {
  console.log("=== VERIFY PAYMENT REQUEST ===");
  console.log(payload);

  const res = await api.post("/order/verify-payment", payload);

  console.log("=== VERIFY PAYMENT RESPONSE ===");
  console.log(res);

  console.log("=== VERIFY PAYMENT DATA ===");
  console.log(res.data);

  return res.data;
};