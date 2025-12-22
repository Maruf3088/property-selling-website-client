import React from "react";

import { CiCamera, CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { format } from "date-fns";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { GiThermometerScale } from "react-icons/gi";
import { Link } from "react-router-dom";

const SinglePropertyCard = ({ property }) => {
  const {
    propertyName,
    price,
    propertyStatus,
    thumbnail,
    details,
    createAt,
    views,
    description,
  } = property;
  const formattedDate = format(new Date(createAt), "dd MMMM, yyyy");

  return (
    <div className="card bg-base-100  shadow-sm group">
      <figure>
        <div className="relative">
          <img src={thumbnail} alt="Shoes" />
          <div className="absolute top-3 left-3 bg-red-600 px-4 text-xs py-1 text-white font-semibold rounded-lg">
            {propertyStatus}
          </div>
          <div className="absolute top-3 right-3 bg-gray-600 px-4 text-xs py-1 text-white font-semibold rounded-lg flex items-center gap-1">
            <CiCamera /> {views}
          </div>
          <div className="absolute bottom-15 right-3 bg-white p-2 cursor-pointer   text-xl  font-bold rounded-lg flex items-center gap-1">
            <IoIosGitCompare />
          </div>
          <div className="absolute bottom-3 right-3 bg-white p-2 cursor-pointer   text-xl  font-bold rounded-lg flex items-center gap-1">
            <CiHeart />
          </div>
        </div>
      </figure>
      <div className="card-body justify-between">
        <div className="space-y-2">
          <Link
            to={`/all-property/${property._id}`}
            className="text-2xl font-bold group-hover:text-orange-500 transition-all duration-300 cursor-pointer "
          >
            {propertyName}
          </Link>
          <p className="text-xl font-semibold text-orange-500 ">${price}*</p>
          <p className="text-gray-600">{description.slice(0, 100)}</p>
        </div>
        {/* icon div */}
        <div className="flex justify-between">
          <div className="flex items-center gap-1 font-semibold text-gray-600">
            <IoBedOutline />
            <p>Bed : {details.beds}</p>
          </div>
          <div className="flex items-center gap-1 font-semibold text-gray-600">
            <LiaBathSolid />

            <p>Baths : {details.baths}</p>
          </div>
          <div className="flex items-center gap-1 font-semibold text-gray-600">
            <GiThermometerScale />

            <p>Sq Ft : {details.area}</p>
          </div>
        </div>
        <div className="flex justify-between  items-center mt-5 ">
          <h1 className="text-gray-600 font-semibold ">{formattedDate}</h1>
          <Link
            to={`/all-property/${property._id}`}
            className="btn rounded-full bg-orange-500 shadow-lg hover:bg-white hover:text-black text-white"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePropertyCard;
