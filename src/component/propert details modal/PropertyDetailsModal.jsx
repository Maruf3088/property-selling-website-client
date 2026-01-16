import React from "react";
import usePropertyById from "../../hooks/usePropertyById";

import { FaRulerCombined, FaCamera, FaDollarSign, FaBed, FaBath } from "react-icons/fa";
import { MdBalcony } from "react-icons/md";

const PropertyDetailsModal = ({ id}) => {
  const { data: property } = usePropertyById(id);

  if (!property) return null;

  const {
    propertyName,
    propertyType,
    propertyStatus,
    price,
    thumbnail,
    details,
    amenities,
    images,
    description,
    agent,
    isAdminAproved,
    location,
  } = property;

  return (
    <div className="flex items-center justify-center  ">
      <div className="bg-white w-full max-w-5xl rounded-xl  animate-fade-in">
        {/* Header */}
        <div className="">
          <img
            src={thumbnail}
            alt={propertyName}
            className="w-full h-64 object-cover"
          />
          <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-lg font-semibold">
            {propertyStatus}
          </span>
          <span
            className={`absolute top-4 right-4 px-3 py-1 rounded-lg font-semibold ${
              isAdminAproved === "approved"
                ? "bg-green-600"
                : isAdminAproved === "pending"
                ? "bg-yellow-500"
                : "bg-red-600"
            } text-white`}
          >
            {isAdminAproved}
          </span>
          
        </div>

        {/* Main Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{propertyName}</h2>
          <p className="text-gray-500 mb-4">{propertyType}</p>
          <p className="text-gray-700 mb-4 flex items-center gap-1">
            <FaDollarSign /> Price: ${price.toLocaleString()}
          </p>

          {/* Location */}
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Location:</span> {location.address},{" "}
            {location.area}, {location.city}, {location.country} ({location.zip_code})
          </p>

          {/* Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-gray-700">
            <div className="flex items-center gap-2">
              <FaBed /> Beds: {details.beds}
            </div>
            <div className="flex items-center gap-2">
              <FaBath /> Baths: {details.baths}
            </div>
            <div className="flex items-center gap-2">
              <MdBalcony /> Balcony: {details.belcony}
            </div>
            <div className="flex items-center gap-2">
              <FaRulerCombined /> Area: {details.area} sqft
            </div>
            <div className="flex items-center gap-2">
              <FaCamera /> Rooms: {details.totalRoom}
            </div>
            <div className="flex items-center gap-2">Built: {details.buildYear}</div>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-4">{description}</p>

          {/* Amenities */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Amenities:</h4>
            <div className="flex flex-wrap gap-2">
              {amenities.map((amenity, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Gallery:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Property image ${idx + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Agent Info */}
          <div className="flex items-center gap-4 mt-6 p-4 bg-gray-50 rounded-lg">
            <img
              src={agent.photoUrl}
              alt={agent.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{agent.name}</p>
              <p className="text-gray-500 text-sm">{agent.email}</p>
              <p className="text-gray-500 text-sm">+{agent.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsModal;
