import api from "../axios"

export const getPlans = async ()=>{
   try {
  const { data } = await api.get("/plans");
  console.log(data)
  return data;
} catch (error: any) {
  console.log("Status:", error.response?.status);
  console.log("Data:", error.response?.data);
  throw error;
}
}