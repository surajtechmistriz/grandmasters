import api from "../axios";

export const getEvents = async () => {
  const { data } = await api.get("/events/1");
  return data;
};


export const getSponsors = async () => {
  const res = await api.get("/events/1?is_merge=1");
  console.log("Raw data",res)
  return res.data;
};

export const getSummitgallery = async ()=>{
  const res = await api.get("/galleries/1")
  return res
}