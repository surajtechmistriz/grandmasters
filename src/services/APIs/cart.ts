import api from "../axios";

export const addToCart = async (data: {
  event_type_id: number;
  event_id: number;
  plan_id: number;
  quantity: number;
}) => {
  const res = await api.post("/cart/add", data);

  console.log("=== ADD TO CART RESPONSE ===");
  console.log(res);
  console.log("=== ADD TO CART DATA ===");
  console.log(res.data);

  return res;
};

export const getCart = async () => {
  const res = await api.get("/cart/summary");

  console.log("=== CART SUMMARY RESPONSE ===");
  console.log(res);
  console.log("=== CART SUMMARY DATA ===");
  console.log(res.data);

  return res;
};

export const updateCart = async (plan_id: number, quantity: number) => {
  const res = await api.post("/cart/update", {
    plan_id: String(plan_id),
    quantity: String(quantity),
  });

  console.log("=== UPDATE CART RESPONSE ===");
  console.log(res.data);

  return res;
};

export const removeItem = async (plan_id: number) => {
  const res = await api.post("/cart/remove", {
    plan_id: String(plan_id),
  });

  console.log("=== REMOVE ITEM RESPONSE ===");
  console.log(res.data);

  return res;
};

export const applyCoupon = async (coupon_code: string) => {
  const res = await api.post("/cart/apply-coupon", {
    coupon_code,
  });

  console.log("=== APPLY COUPON RESPONSE ===");
  console.log(res.data);

  return res;
};

export const removeCoupon = async (coupon_code: string) => {
  const res = await api.post("/cart/remove-coupon", {
    coupon_code,
  });

  console.log("=== REMOVE COUPON RESPONSE ===");
  console.log(res.data);

  return res;
};

// Undo removed item
export const undoRemoveItem = async () => {
  console.log("  [UNDO API] Request started");

  try {
    const res = await api.post("/cart/undo");

    console.log("   [UNDO API] Success response:");
    console.log(res);
    console.log("  [UNDO API] Response data:");
    console.log(res.data);

    return res.data;
  } catch (error: any) {
    console.error("  [UNDO API] Error:");
    console.error(error?.response?.data || error);

    throw error;
  }
};
