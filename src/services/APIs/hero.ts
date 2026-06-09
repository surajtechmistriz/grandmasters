import api from "../axios";

export const getEvents = async () => {
  const { data } = await api.get("/events/6");
  return data;
};