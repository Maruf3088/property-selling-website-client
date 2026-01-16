
import axiosSecure from "../axios/axiosSecure";

export const addAgency = async (agencyData) => {
  return axiosSecure.post("/agencies", agencyData);
};

export const fetchAgencies = async () => {
  return axiosSecure.get("/agencies");
};

export const fetchAgencyById = (id) => {
  return axiosSecure.get(`/agencies/${id}`);
};