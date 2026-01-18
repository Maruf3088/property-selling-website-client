import React from "react";
import usePropertyById from "../../hooks/usePropertyById";
import useAgencyById from "../../hooks/useAgencyById";

import {
  FaRulerCombined,
  FaDollarSign,
  FaBed,
  FaBath,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaDoorOpen,
  FaImages,
} from "react-icons/fa";
import { MdBalcony } from "react-icons/md";

const PropertyDetailsModal = ({ id }) => {
  const { data: property } = usePropertyById(id);

  const { data: agencyData } = useAgencyById(property?.agencyId, {
    enabled: !!property?.agencyId,
  });

  if (!property) return null;

  const {
    propertyName,
    propertyType,
    propertyStatus,
    price,
    thumbnail,
    details = {},
    amenities = [],
    images = [],
    description,
    agent = {},
    isAdminAproved,
    location = {},
  } = property;

  const phone =
    typeof agent?.phone === "object"
      ? agent.phone?.$numberLong
      : agent?.phone;

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden">
      {/* Hero */}
      <div className="relative h-80">
        <img
          src={thumbnail}
          alt={propertyName}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute top-6 left-6 right-6 flex justify-between">
          <div className="flex gap-3">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {propertyType}
            </span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {propertyStatus}
            </span>
          </div>

          <span
            className={`px-4 py-2 rounded-full text-sm font-bold text-white ${
              isAdminAproved === "approved"
                ? "bg-green-600"
                : isAdminAproved === "pending"
                ? "bg-yellow-500"
                : "bg-red-600"
            }`}
          >
            {isAdminAproved.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-10">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {propertyName}
          </h2>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <FaMapMarkerAlt className="text-orange-500" />
            {location.address}, {location.area}, {location.city}
          </div>
        </div>

        {/* Price */}
        <div className="flex justify-between items-center bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
          <span className="text-gray-600 font-semibold">Price</span>
          <span className="text-3xl font-bold text-orange-600 flex items-center gap-2">
            <FaDollarSign /> {price?.toLocaleString()}
          </span>
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Info icon={<FaBed />} label="Bedrooms" value={details.beds} />
          <Info icon={<FaBath />} label="Bathrooms" value={details.baths} />
          <Info icon={<MdBalcony />} label="Balconies" value={details.belcony} />
          <Info
            icon={<FaRulerCombined />}
            label="Area"
            value={`${details.area || "N/A"} sqft`}
          />
          <Info
            icon={<FaDoorOpen />}
            label="Rooms"
            value={details.totalRoom}
          />
          <Info
            icon={<FaCalendarAlt />}
            label="Built"
            value={details.buildYear}
          />
        </div>

        {/* Description */}
        <section>
          <h3 className="text-xl font-bold mb-3">About this property</h3>
          <p className="text-gray-700 leading-relaxed bg-gray-50 p-5 rounded-lg">
            {description}
          </p>
        </section>

        {/* Amenities */}
        {amenities.length > 0 && (
          <section>
            <h3 className="text-xl font-bold mb-3">Amenities</h3>
            <div className="flex flex-wrap gap-3">
              {amenities.map((a, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
                >
                  ✓ {a}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Gallery */}
        {images.length > 0 && (
          <section>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <FaImages /> Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Property ${i + 1}`}
                  className="h-40 w-full object-cover rounded-lg cursor-pointer hover:scale-105 transition"
                />
              ))}
            </div>
          </section>
        )}

        {/* Agent */}
        <section className="bg-blue-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
          <div className="flex gap-6 items-center">
            <img
              src={agent.photoUrl}
              alt={agent.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-lg">{agent.name}</p>
              <p className="flex items-center gap-2 text-gray-700">
                <FaEnvelope /> {agent.email}
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <FaPhone /> +{phone}
              </p>
            </div>
          </div>
        </section>

        {/* Agency */}
        {agencyData && (
          <section className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Agency</h3>
            <div className="flex gap-6 items-center">
              <img
                src={agencyData.logoUrl}
                alt={agencyData.agencyName}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <p className="font-bold text-lg">{agencyData.agencyName}</p>
                <p className="text-gray-600">{agencyData.title}</p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

const Info = ({ icon, label, value }) => (
  <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
    <span className="text-blue-600 text-xl">{icon}</span>
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-bold">{value || "N/A"}</p>
    </div>
  </div>
);

export default PropertyDetailsModal;
