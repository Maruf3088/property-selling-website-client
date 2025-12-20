import React, { useState } from "react";
import SinglePropertyCard from "../single property card/SinglePropertyCard";
import { Box, Drawer } from "@mui/material";
import FilterSection from "../filter section/FilterSection";
import CategoryFilterSection from "../category section/CategoryFilterSection";
import ContactInfo from "../contact info/ContactInfo";
import RecentlyAddedSection from "../recently added property/RecentlyAddedSection";

const AllPropertyCardSection = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Drawer list component
  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
      {/* filter section */}
        <div className="   bg-white shadow-xl rounded-xl px-4 py-6">
          <h1 className="font-semibold text-2xl ">Advance search</h1>
          <FilterSection></FilterSection>
          <CategoryFilterSection></CategoryFilterSection>
          <ContactInfo></ContactInfo>
          <RecentlyAddedSection></RecentlyAddedSection>
        </div>
    </Box>
  );

  return (
    <div className="my-5">
      <div>
        <div>
          <h1 className=" font-bold text-3xl">Property Listing</h1>
          <p className="text-gray-500">
            Showing <span className="text-orange-500">1- 6 of 35</span> Listings
          </p>
        </div>
      </div>
      <div>
        {/* filter option */}
        <button
          onClick={toggleDrawer(true)}
          className="btn lg:hidden mt-4 rounded-full bg-orange-500 shadow-lg hover:bg-white hover:text-black text-white"
        >
          Advance search
        </button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
      <div className="divider mt-5"></div>
      {/* all card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <SinglePropertyCard></SinglePropertyCard>
        <SinglePropertyCard></SinglePropertyCard>
        <SinglePropertyCard></SinglePropertyCard>
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

export default AllPropertyCardSection;
