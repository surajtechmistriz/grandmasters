import api from "../axios";

export const getCities = async () => {
  const { data } = await api.get("/cities");
  return data;
};
