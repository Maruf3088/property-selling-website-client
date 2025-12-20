import React from "react";
import agency1 from "../../../../assets/agency1.png";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SingleAgencyCard = () => {
  return (
    <div className="card bg-base-100 shadow-sm group hover:shadow-xl transition-all duration-300 rounded-lg">
      <figure>
        <div className="relative">
          <img src={agency1} alt="Shoes" />
          <h1 className="absolute top-3 left-3 text-xs bg-red-400 text-white font-semibold px-2 py-1 rounded-lg">3 Properties</h1>
        </div>
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title text-2xl group-hover:text-orange-500 transition-all duration-300 ">Broadleaf Homes</h2>
          <p className=" text-gray-700 text-md ">Real estate agent</p>
        </div>
        {/* contact */}
        <div className="space-y-2 my-4">
          <div className="flex items-center   text-gray-600 gap-1">
            <CiPhone className="text-lg " /> <span>+91 5470087201</span>
          </div>
          <div className="flex items-center   text-gray-600 gap-1">
            <CiMail className="text-lg " />

            <span>broadleaf@gmail.in</span>
          </div>
          <div className="flex items-center   text-gray-600 gap-1">
            <CiLocationOn className="text-lg " />
            <span>A-32, Albany, Newyork</span>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link to={'/all-agency/ss'} className="flex items-center gap-2 btn btn-sm rounded-full bg-orange-500 shadow-lg hover:bg-white hover:text-black text-white">
            View Profile
            <FaArrowRightLong className="animate-pulse" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAgencyCard;
