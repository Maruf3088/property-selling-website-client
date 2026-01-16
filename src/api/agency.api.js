import axiosPublic from "../axios/axiosPublic";

export const addAgency = async (agencyData) => {
  return axiosPublic.post("/agencies", agencyData);
};

export const fetchAgencies = async () => {
  return axiosPublic.get("/agencies");
};

export const fetchAgencyById = (id) => {
  return axiosPublic.get(`/agencies/${id}`);
};