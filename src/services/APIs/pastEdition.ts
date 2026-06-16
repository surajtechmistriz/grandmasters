import api from "../axios";

export const getPastEdition = async () => {
  const response = await api.get("/events/1", {
    params: {
      is_past_edition: 1,
    },
  });
  console.log("PastEdition data", response);
  return response.data;
};

export const getPastEditionDetail = async (
  id: number | string,
  year?: number | string,
) => {
  const res = await api.get(`/event/${id}`, {
    params: { year },
  });

  return res;
};
