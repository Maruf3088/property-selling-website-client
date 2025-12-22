import axiosPublic from "../axios/axiosPublic";

export const fetchProperties = async (filters) => {
  return axiosPublic.get("/allProperties", {
    params: filters,
  });
};

export const fetchPropertyById = (id) => {
  return axiosPublic.get(`/allProperties/${id}`);
};
