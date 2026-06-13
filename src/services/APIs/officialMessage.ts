import api from "../axios";

export const getOfficialMessages = async (eventTypeId: number) => {
  const res = await api.get(`/official-messages/${eventTypeId}`);
  return res.data;
};