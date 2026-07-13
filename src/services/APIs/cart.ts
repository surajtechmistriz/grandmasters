import api from "../axios";

export const addToCart = async (data: {
  event_type_id: number;
  event_id: number;
  plan_id: number;
  quantity: number;
}) => {
  const res = await api.post("/cart/add", data);


  return res;
};

export const getCart = async () => {
  const res = await api.get("/cart/summary");


  return res;
};

export const updateCart = async (plan_id: number, quantity: number) => {
  const res = await api.post("/cart/update", {
    plan_id: String(plan_id),
    quantity: String(quantity),
  });


  return res;
};

export const removeItem = async (plan_id: number) => {
  const res = await api.post("/cart/remove", {
    plan_id: String(plan_id),
  });


  return res;
};

export const applyCoupon = async (coupon_code: string) => {
  const res = await api.post("/cart/apply-coupon", {
    coupon_code,
  });


  return res;
};

export const removeCoupon = async (coupon_code: string) => {
  const res = await api.post("/cart/remove-coupon", {
    coupon_code,
  });


  return res;
};

// Undo removed item
export const undoRemoveItem = async () => {

  try {
    const res = await api.post("/cart/undo");



    return res.data;
  } catch (error: any) {
    console.error("  [UNDO API] Error:");
    console.error(error?.response?.data || error);

    throw error;
  }
};
