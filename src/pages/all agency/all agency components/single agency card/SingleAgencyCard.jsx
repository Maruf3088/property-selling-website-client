import React, { useEffect, useState } from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axiosPublic from "../../../../axios/axiosPublic";
const SingleAgencyCard = ({ item }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!item?.agency?.agencyName) return;

    const fetchCount = async () => {
      try {
        const res = await axiosPublic.get(
          `/properties/countProperty?agencyName=${item.agency.agencyName}`
        );
        setCount(res.data.count);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCount();
  }, [item]);
  return (
    <div className="card bg-base-100 shadow-sm group hover:shadow-xl transition-all duration-300 rounded-lg">
      <figure className="h-[200px] w-full">
        <div className="relative w-full h-full ">
          <img
            src={item.agency.logoUrl}
            className="w-full h-full object-center "
            alt="Shoes"
          />
          <h1 className="absolute top-3  left-3 text-xs bg-red-400 text-white font-semibold px-2 py-1 rounded-lg">
            {count} Properties
          </h1>
        </div>
      </figure>
      <div className="card-body">
        <div>
          <Link to={`/all-agency/${item._id}`} className="card-title text-2xl group-hover:text-orange-500 transition-all duration-300 ">
            {item.agency.agencyName}
          </Link>
          <p className=" text-gray-700 text-md ">{item.agency.title}</p>
        </div>
        {/* contact */}
        <div className="space-y-2 my-4">
          <div className="flex items-center   text-gray-600 gap-1">
            <CiPhone className="text-lg " /> <span>{item.agent.phone}</span>
          </div>
          <div className="flex items-center   text-gray-600 gap-1">
            <CiMail className="text-lg " />

            <span>{item.agent.email}</span>
          </div>
          <div className="flex items-center   text-gray-600 gap-1">
            <CiLocationOn className="text-lg " />
            <span>{item.agency.location}</span>
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
