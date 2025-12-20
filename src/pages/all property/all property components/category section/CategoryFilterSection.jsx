import React from "react";
import { HiArrowSmRight } from "react-icons/hi";

const CategoryFilterSection = () => {
  return (
    <div className="mt-8">
      <div>
        <h1 className="text-gray-600 font-semibold text-xl  ">Category</h1>
        <div className="bg-orange-500 w-[30px] h-0.5 rounded-full"></div>
      </div>
      <div className="mt-4">
        <ul className="flex flex-col gap-2">
          <li className="flex justify-between items-center text-gray-600 ">
            <div className="flex gap-2 items-center hover:text-orange-500 cursor-pointer">
              <HiArrowSmRight />
              <h1>Apartment</h1>
            </div>
            <h1>(8)</h1>
          </li>
          <li className="flex justify-between items-center text-gray-600 ">
            <div className="flex gap-2 items-center hover:text-orange-500 cursor-pointer">
              <HiArrowSmRight />
              <h1>Apartment</h1>
            </div>
            <h1>(6)</h1>
          </li>
          <li className="flex justify-between items-center text-gray-600 ">
            <div className="flex gap-2 items-center hover:text-orange-500 cursor-pointer">
              <HiArrowSmRight />
              <h1>Office</h1>
            </div>
            <h1>(4)</h1>
          </li>
          <li className="flex justify-between items-center text-gray-600 ">
            <div className="flex gap-2 items-center hover:text-orange-500 cursor-pointer">
              <HiArrowSmRight />
              <h1>Building</h1>
            </div>
            <h1>(8)</h1>
          </li>
          <li className="flex justify-between items-center text-gray-600 ">
            <div className="flex gap-2 items-center hover:text-orange-500 cursor-pointer">
              <HiArrowSmRight />
              <h1>Flat</h1>
            </div>
            <h1>(4)</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilterSection;
