import React from "react";
import photo1 from "../../../../assets/newsletterbg.jpg";

const RecentlyAddedSection = () => {
  return (
    <div className="mt-8">
      <h1 className="text-gray-600 font-semibold text-xl">Recently Added</h1>
      <div className="bg-orange-500 w-[30px] h-0.5 rounded-full"></div>
      <div className="mt-6">
        <div className="flex w-full gap-3 justify-between p-2 rounded-xl items-center ">
          <img className="w-[40%] rounded-lg " src={photo1} alt="" />
          <div className="w-[60%]">
            <h1 className="text-gray-600 font-semibold">Apartment</h1>
            <p className="text-orange-500">
              $ 1234.00 <sub className="text-gray-600">/month</sub>
            </p>
          </div>
        </div>
        <div className="flex w-full gap-3 justify-between p-2 rounded-xl items-center ">
          <img className="w-[40%] rounded-lg " src={photo1} alt="" />
          <div className="w-[60%]">
            <h1 className="text-gray-600 font-semibold">Apartment</h1>
            <p className="text-orange-500">
              $ 1234.00 <sub className="text-gray-600">/month</sub>
            </p>
          </div>
        </div>
        <div className="flex w-full gap-3 justify-between p-2 rounded-xl items-center ">
          <img className="w-[40%] rounded-lg " src={photo1} alt="" />
          <div className="w-[60%]">
            <h1 className="text-gray-600 font-semibold">Apartment</h1>
            <p className="text-orange-500">
              $ 1234.00 <sub className="text-gray-600">/month</sub>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyAddedSection;
