import api from "../axios";

export const registerOrder = async (payload: any) => {
  const res = await api.post("/order/register", payload);

  return res.data;
};

export const verifyPayment = async (payload: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}) => {
  const res = await api.post("/order/verify-payment", payload);

  return res.data;
};

export const paymentFail = async (payload: { razorpay_order_id: string }) => {
  console.log("PAYMENT FAIL REQUEST =>", payload);

  const res = await api.post("/payment-fail", payload);

  console.log("PAYMENT FAIL RESPONSE =>", res);
  console.log("PAYMENT FAIL RESPONSE DATA =>", res.data);

  return res.data;
};
