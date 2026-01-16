import React, { useEffect, useState } from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axiosPublic from "../../../../axios/axiosPublic";
const SingleAgencyCard = ({ item }) => {
  const [count, setCount] = useState(0);

  // Handle both direct agency objects and nested agency in properties
  const agency = item.agency || item;
  const agencyName = agency?.agencyName;

  useEffect(() => {
    if (!item._id && !agencyName) return;

    const fetchCount = async () => {
      try {
        // Try agencyId first (for direct agency objects), then fallback to agencyName
        const queryParam = item._id 
          ? `agencyId=${item._id}` 
          : `agencyName=${agencyName}`;
        const res = await axiosPublic.get(
          `/properties/countProperty?${queryParam}`
        );
        setCount(res.data.count);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCount();
  }, [item._id, agencyName]);
  return (
    <div className="card bg-base-100 shadow-sm group hover:shadow-xl transition-all duration-300 rounded-lg">
      <figure className="h-[200px] w-full">
        <div className="relative w-full h-full ">
          <img
            src={agency?.logoUrl || "https://via.placeholder.com/300x200"}
            className="w-full h-full object-cover "
            alt={agencyName || "Agency"}
          />
          <h1 className="absolute top-3  left-3 text-xs bg-red-400 text-white font-semibold px-2 py-1 rounded-lg">
            {count} Properties
          </h1>
        </div>
      </figure>
      <div className="card-body">
        <div>
          <Link to={`/all-agency/${item._id}`} className="card-title text-2xl group-hover:text-orange-500 transition-all duration-300 ">
            {agencyName || "Agency Name"}
          </Link>
          <p className=" text-gray-700 text-md ">{agency?.title || ""}</p>
        </div>
        {/* contact */}
        <div className="space-y-2 my-4">
          {agency?.email && (
            <div className="flex items-center   text-gray-600 gap-1">
              <CiMail className="text-lg " />
              <span>{agency.email}</span>
            </div>
          )}
          <div className="flex items-center   text-gray-600 gap-1">
            <CiLocationOn className="text-lg " />
            <span>{agency?.location || "Location not specified"}</span>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link
            to={`/all-agency/${item._id}`}
            className="flex items-center gap-2 btn btn-sm rounded-full bg-orange-500 shadow-lg hover:bg-white hover:text-black text-white"
          >
            View Profile
            <FaArrowRightLong className="animate-pulse" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAgencyCard;
