import React from "react";
import SinglePropertyCard from "../../../all property/all property components/single property card/SinglePropertyCard";

const AgencyPropertyListing = () => {
  return (
    <div className="mt-8">
      <div>
        <div>
          <h1 className=" font-bold text-3xl">Property Listing</h1>
          <p className="text-gray-500">
            Showing <span className="text-orange-500">1- 6 of 35</span> Listings
          </p>
        </div>
      </div>
      <div className="divider mt-5"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <SinglePropertyCard></SinglePropertyCard>
        <SinglePropertyCard></SinglePropertyCard>
        <SinglePropertyCard></SinglePropertyCard>
        <SinglePropertyCard></SinglePropertyCard>
        <SinglePropertyCard></SinglePropertyCard>
        <SinglePropertyCard></SinglePropertyCard>
      </div>
    </div>
  );
};

export default AgencyPropertyListing;
