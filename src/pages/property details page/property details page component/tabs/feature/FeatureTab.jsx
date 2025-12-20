import React from "react";
import {
  FaWifi,
  FaBuilding,
  FaBatteryFull,
  FaTshirt,
  FaShieldAlt,
  FaVideo,
  FaDoorOpen,
  FaStethoscope,
  FaShower,
  FaParking,
  FaSnowflake,
} from "react-icons/fa";

// Data mapping the features to their corresponding icons
const featuresData = [
  { name: "Free Wi-Fi", icon: FaWifi },
  { name: "Elevator Lift", icon: FaBuilding },
  { name: "Power Backup", icon: FaBatteryFull },
  { name: "Laundry Service", icon: FaTshirt },
  { name: "Security Guard", icon: FaShieldAlt },
  { name: "CCTV Surveillance", icon: FaVideo },
  { name: "Emergency Exit", icon: FaDoorOpen },
  { name: "Doctor On Call", icon: FaStethoscope },
  { name: "Private Shower", icon: FaShower },
  { name: "Free Parking", icon: FaParking },
  { name: "Air Conditioning", icon: FaSnowflake },
];

const FeatureItem = ({ name, Icon }) => {
  return (
    <div
      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 
                    hover:shadow-lg hover:border-orange-200 transition duration-300 transform hover:-translate-y-0.5"
    >
      {/* Icon is used here — so NO warning */}
      <div className="w-10 h-10 flex items-center justify-center bg-orange-50 text-orange-600 rounded-full">
        {Icon && <Icon className="text-xl" />}
      </div>

      <p className="text-sm font-semibold text-gray-700">{name}</p>
    </div>
  );
};

const FeatureTab = () => {
  return (
    <section className="py-12 md:bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className=" mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Amenities &{" "}
            <span className="text-orange-600">Property Features</span>
          </h2>
          <p className="text-gray-600">
            Everything you need for comfort and security.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature) => (
            <FeatureItem
              key={feature.name}
              name={feature.name}
              Icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTab;
