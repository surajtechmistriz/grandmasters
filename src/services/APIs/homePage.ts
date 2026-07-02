import api from "../axios";

export const getEvents = async () => {
  const { data } = await api.get("/events/1");
  return data;
};


export const getSponsors = async () => {
  const res = await api.get("/events/1?is_merge=1");
  // console.log("Raw data",res)
  return res.data;
};

export const getSummitgallery = async ()=>{
  const res = await api.get("/galleries/1")
  return res
}


// Get events for tabs
export const getSummitEvents = async (year: string) => {
  return api.get(
    `/events/1?is_past_edition=1&year=${year}`
  );
};

// Get gallery by event id
export const getHomepageGallery = async (eventId: number) => {
  return api.get(`/homepage-gallery/${eventId}`);
};