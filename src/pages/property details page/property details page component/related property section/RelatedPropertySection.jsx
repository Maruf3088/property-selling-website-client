import React from "react";
import SinglePropertyCard from "../../../all property/all property components/single property card/SinglePropertyCard";

const RelatedPropertySection = () => {
  return (
    <div className="pb-8 px-2 md:px-0">
      <div className=" mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Related <span className="text-orange-600">Property</span>
        </h2>
        <p className="text-gray-600">
          Everything you need for comfort and security.
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <SinglePropertyCard></SinglePropertyCard>
        <SinglePropertyCard></SinglePropertyCard>
        <SinglePropertyCard></SinglePropertyCard>
      </div>
    </div>
  );
};

export default RelatedPropertySection;
