import React from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  FaHome,
  FaCalendarAlt,
  FaRulerCombined,
  FaBed,
  FaBath,
  FaCar,
  FaMoneyBillWave,
  FaTag,
  FaBuilding,
  FaFilePdf,
  FaImage,
  FaDownload,
} from "react-icons/fa";

const AboutTab = () => {
  return (
    <div className="md:bg-gray-50  md:p-6 sm:p-8 rounded-xl md:shadow-lg">
      <div className="space-y-12">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 border-gray-200">
          <div className=" mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              About & <span className="text-orange-600">Property Details</span>
            </h2>
            <p className="text-gray-600">
              Everything you need for comfort and security.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-orange-600 text-lg font-semibold hover:text-orange-800 transition"
          >
            <CiLocationOn className="text-2xl" />
            View on map
          </a>
        </div>

        {/* KEY FEATURES */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-700">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <Detail label="Property Type" value="House" icon={<FaHome />} />
              <Detail
                label="Operating Since"
                value="2008"
                icon={<FaCalendarAlt />}
              />
              <Detail
                label="Property Size"
                value="2200 sq ft"
                icon={<FaRulerCombined />}
              />
            </div>

            <div className="space-y-4">
              <Detail label="Bedrooms" value="3" icon={<FaBed />} />
              <Detail label="Bathrooms" value="2" icon={<FaBath />} />
              <Detail label="Garage" value="1 Car" icon={<FaCar />} />
            </div>

            <div className="space-y-4">
              <Detail
                label="Price"
                value="$450,000"
                icon={<FaMoneyBillWave />}
              />
              <Detail label="Status" value="For Sale" icon={<FaTag />} />
              <Detail label="Build Year" value="2010" icon={<FaBuilding />} />
            </div>
          </div>
        </div>

        {/* ATTACHMENTS */}
        <div className="space-y-5 pt-4 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-700">Attachments</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AttachmentItem
              icon={<FaFilePdf className="text-red-600 text-3xl" />}
              title="Floorplan PDF"
              size="1.2 MB"
              link="#"
            />

            <AttachmentItem
              icon={<FaImage className="text-blue-600 text-3xl" />}
              title="Blueprint Gallery"
              size="High Resolution"
              link="#"
            />

            <AttachmentItem
              icon={<FaFilePdf className="text-green-600 text-3xl" />}
              title="Property Documents"
              size="900 KB"
              link="#"
            />
          </div>
        </div>

        {/* PROPERTY BRIEF */}
        <div className="space-y-4 pt-4 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-700">Property Brief</h2>

          <p className="text-gray-700 leading-relaxed">
            This beautiful 3-bedroom family house is located in a peaceful
            residential area with easy access to schools, shopping centers, and
            parks. It features a modern open-plan kitchen, spacious living room,
            and a private backyard.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Renovated in 2022, the property includes a high-efficiency heating
            system and premium flooring. Ideal for families seeking comfort,
            convenience, and long-term value.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ---------------------- REUSABLE COMPONENTS ---------------------- */

const Detail = ({ label, value, icon }) => (
  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
    <div className="text-orange-600 text-xl">{icon}</div>

    <p className="text-sm font-medium text-gray-500 flex-1">
      {label}:
      <span className="ml-2 font-semibold text-gray-800 text-base">
        {value}
      </span>
    </p>
  </div>
);

const AttachmentItem = ({ icon, title, size, link }) => (
  <a
    href={link}
    className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200 shadow-sm 
               hover:shadow-lg hover:border-orange-300 transition"
  >
    <div className="flex items-center gap-4">
      <div>{icon}</div>

      <div>
        <h3 className="font-bold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500">{size}</p>
      </div>
    </div>

    <FaDownload className="text-lg text-gray-500 hover:text-orange-600 transition" />
  </a>
);

export default AboutTab;
