// hooks/useCart.ts
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../services/APIs/cart";

export const useCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await getCart();
      return res.data;
    },
  });
};