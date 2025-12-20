import { Slider } from "@mui/material";
import React, { useState } from "react";
import { RiResetLeftFill } from "react-icons/ri";

const FilterSection = () => {
  const [priceRange, setPriceRange] = useState([2401, 6536]);
  const [areaRange, setAreaRange] = useState([1200, 2500]);

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  const handleAreaRangeChange = (event, newValue) => {
    setAreaRange(newValue);
  };
  return (
    <div className="mt-3">
      <h1 className="text-gray-600 font-semibold text-xl">Filter</h1>
      <div className="bg-orange-500 w-[30px] h-0.5 rounded-full"></div>
      <form className="flex flex-col gap-4 my-4">
        <div>
          <select defaultValue="" className="select">
            <option value={""} disabled={true}>
              Property status
            </option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
        <div>
          <select defaultValue="" className="select">
            <option value={""} disabled={true}>
              Property type
            </option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
        <div className="flex gap-2">
          <select defaultValue="" className="select">
            <option value={""} disabled={true}>
              Max rooms
            </option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
          <select defaultValue="" className="select">
            <option value={""} disabled={true}>
              Bed
            </option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
        <div className="flex gap-2">
          <select defaultValue="" className="select">
            <option value={""} disabled={true}>
              Bath
            </option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
          <select defaultValue="" className="select">
            <option value={""} disabled={true}>
              Belcony
            </option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>

        <div className="mt-8">
          <h1 className="text-gray-600 font-semibold">
            Price : $2,401.00 - $6,536.00
          </h1>
          <Slider
            value={priceRange}
            onChange={handlePriceRangeChange}
            min={0}
            max={10000}
            valueLabelDisplay="auto"
            sx={{
              color: "orange", // <-- main slider color
              "& .MuiSlider-thumb": {
                backgroundColor: "#F54A00",
              },
              "& .MuiSlider-track": {
                backgroundColor: "#F54A00",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#ffcc80", // light orange
              },
            }}
          />
        </div>
        <div>
          <h1 className="text-gray-600 font-semibold">
            Area : 1000 - 3000 sq ft
          </h1>
          <Slider
            value={areaRange}
            onChange={handleAreaRangeChange}
            min={1000}
            max={3000}
            valueLabelDisplay="auto"
            sx={{
              color: "orange", // <-- main slider color
              "& .MuiSlider-thumb": {
                backgroundColor: "#F54A00",
              },
              "& .MuiSlider-track": {
                backgroundColor: "#F54A00",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#ffcc80", // light orange
              },
            }}
          />
        </div>

        <button className="flex self-start items-center space-x-1 px-4 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-white hover:text-orange-600 outline active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg group text-sm">
          <RiResetLeftFill />
          <span>Reset</span>
        </button>
      </form>
    </div>
  );
};

export default FilterSection;
