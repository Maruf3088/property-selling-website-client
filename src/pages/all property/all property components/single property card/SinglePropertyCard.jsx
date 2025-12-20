import React from "react";
import image1 from "../../../../assets/newsletterbg.jpg";
import { CiCamera, CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { GiThermometerScale } from "react-icons/gi";

const SinglePropertyCard = () => {
  return (
    <div className="card bg-base-100  shadow-sm group">
      <figure>
        <div className="relative">
          <img src={image1} alt="Shoes" />
          <div className="absolute top-3 left-3 bg-red-600 px-4 text-xs py-1 text-white font-semibold rounded-lg">
            Sale
          </div>
          <div className="absolute top-3 right-3 bg-gray-600 px-4 text-xs py-1 text-white font-semibold rounded-lg flex items-center gap-1">
            <CiCamera /> 120
          </div>
          <div className="absolute bottom-15 right-3 bg-white p-2 cursor-pointer   text-xl  font-bold rounded-lg flex items-center gap-1">
            <IoIosGitCompare />
          </div>
          <div className="absolute bottom-3 right-3 bg-white p-2 cursor-pointer   text-xl  font-bold rounded-lg flex items-center gap-1">
            <CiHeart />
          </div>
        </div>
      </figure>
      <div className="card-body">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold group-hover:text-orange-500 transition-all duration-300 cursor-pointer ">Little Acorn Farm</h2>
          <p className="text-xl font-semibold text-orange-500 ">$6,558.00*</p>
          <p className="text-gray-600">
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
        {/* icon div */}
        <div className="flex justify-between">
          <div className="flex items-center gap-1 font-semibold text-gray-600">
            <IoBedOutline />
            <p>Bed : 1</p>
          </div>
          <div className="flex items-center gap-1 font-semibold text-gray-600">
            <LiaBathSolid />

            <p>Baths : 1</p>
          </div>
          <div className="flex items-center gap-1 font-semibold text-gray-600">
            <GiThermometerScale />

            <p>Sq Ft : 5000</p>
          </div>
        </div>
        <div className="flex justify-between  items-center mt-5 ">
          <h1 className="text-gray-600 font-semibold ">March 25, 2023</h1>
          <button className="btn rounded-full bg-orange-500 shadow-lg hover:bg-white hover:text-black text-white">Details</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePropertyCard;
