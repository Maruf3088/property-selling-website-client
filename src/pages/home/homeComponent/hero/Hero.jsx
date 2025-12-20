import { Link } from "react-router-dom";
import herobg from "../../../../assets/herobg.jpg";
import Particles from "react-tsparticles";
import { useState } from "react";

const Hero = () => {
  const [toggle, setToggle] = useState("sell");

  return (
    <div
      className="pb-36 pt-10 sm:pt-20"
      style={{
        backgroundImage: "url(" + (herobg || "/placeholder.svg") + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[95%]">

          {/* Heading */}
          <h1 className="mb-5 text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-950 tracking-wide leading-tight">
            You're local Real estate <br />
            professionals
          </h1>

          {/* Subtitle */}
          <p className="mb-5 text-white text-sm sm:text-base max-w-xl">
            Residences can be classified by and connected to residences.
            Different types of housing can use the same physical type.
          </p>

          {/* Toggle Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 gap-3 sm:gap-0">
            <button
              onClick={() => setToggle("sell")}
              className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 w-full sm:w-auto ${
                toggle === "sell"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600 hover:bg-orange-600 hover:text-white"
              }`}
            >
              For Sell
            </button>

            <button
              onClick={() => setToggle("rent")}
              className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 w-full sm:w-auto ${
                toggle === "rent"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600 hover:bg-orange-600 hover:text-white"
              }`}
            >
              For Rent
            </button>
          </div>

          {/* Search Box */}
          <div className="bg-white p-5 sm:p-8 rounded-xl max-w-3xl">
            <form className="space-y-4">
              
              {/* First Row */}
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Search location"
                  className="input w-full border border-gray-300 rounded px-3 py-2"
                />

                <select defaultValue="" className="select w-full border border-gray-300 rounded px-3 py-2">
                  <option value="" disabled>Property Type</option>
                  <option value="crimson">Crimson</option>
                  <option value="amber">Amber</option>
                  <option value="velvet">Velvet</option>
                </select>

                <select defaultValue={""} className="select w-full border border-gray-300 rounded px-3 py-2">
                  <option value={""} disabled>Max room</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>

              {/* Second Row */}
              <div className="flex flex-col md:flex-row gap-3">
                <select defaultValue="" className="select w-full border border-gray-300 rounded px-3 py-2">
                  <option value="" disabled>Bed</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>

                <select defaultValue={""} className="select w-full border border-gray-300 rounded px-3 py-2">
                  <option value="" disabled>Bath</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>

                <button
                  type="submit"
                  className="px-3 py-2 bg-orange-600 text-white font-medium rounded-lg w-full md:w-auto hover:bg-white hover:text-orange-600 border border-orange-600 transition-all duration-200"
                >
                  Search
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
