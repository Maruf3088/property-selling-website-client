import React from "react";
import agent1 from "../../../../assets/agent1.jpg";
import { FaFacebook, FaHeart, FaInstagram, FaLinkedin } from "react-icons/fa";

const OurAgentCard = () => {
  return (
    <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg overflow-hidden shadow-lg mx-auto">
      {/* Agent Image */}
      <img
        src={agent1}
        alt="Agent"
        className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-lg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center px-4">
        <div className="bg-white w-full sm:w-11/12 md:w-3/4 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg text-center space-y-3">
          {/* Name & Favorite */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <h1 className="text-lg sm:text-xl font-bold text-red-500">Tex Ryta</h1>
            <div className="bg-[#FEF0F1] text-red-500 rounded-full p-2 flex items-center justify-center">
              <FaHeart size={16} />
            </div>
          </div>

          {/* Short Description */}
          <p className="text-gray-700 font-semibold text-sm sm:text-base md:text-lg">
            Real estate professional providing huge space to live peacefully
          </p>

          {/* Email */}
          <p className="text-gray-500 font-medium text-xs sm:text-sm">user@gmail.com</p>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap mt-2 sm:mt-3">
            <div className="bg-[#FEF0F1] text-red-500 rounded-full p-2 flex items-center justify-center hover:bg-red-50 transition">
              <FaFacebook size={16} />
            </div>
            <div className="bg-[#FEF0F1] text-red-500 rounded-full p-2 flex items-center justify-center hover:bg-red-50 transition">
              <FaInstagram size={16} />
            </div>
            <div className="bg-[#FEF0F1] text-red-500 rounded-full p-2 flex items-center justify-center hover:bg-red-50 transition">
              <FaLinkedin size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAgentCard;
