import { Slider } from "@mui/material";
import React from "react";

import CategoryFilterSection from "../category section/CategoryFilterSection";
import ContactInfo from "../contact info/ContactInfo";
import FilterSection from "../filter section/FilterSection";
import RecentlyAddedSection from "../recently added property/RecentlyAddedSection";
import AllPropertyCardSection from "../all property card section/AllPropertyCardSection";

const PropertyListing = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-8 items-start  gap-5">
        {/* filter section */}
        <div className="hidden lg:block col-span-2   bg-white shadow-xl rounded-xl px-4 py-6">
          <h1 className="font-semibold text-2xl ">Advance search</h1>
          <FilterSection></FilterSection>
          <CategoryFilterSection></CategoryFilterSection>
          <ContactInfo></ContactInfo>
          <RecentlyAddedSection></RecentlyAddedSection>
        </div>
        {/* property listing section */}
        <div className="col-span-6 ">
          <AllPropertyCardSection></AllPropertyCardSection>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
