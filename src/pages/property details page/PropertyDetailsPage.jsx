import React from "react";
import ImageSlider from "./property details page component/image slider/ImageSlider";
import PropertyInfo from "./property details page component/property info/PropertyInfo";
import GridSection from "./property details page component/grid section/GridSection";


const PropertyDetailsPage = () => {
  return (
    <div className="">
      
      <ImageSlider></ImageSlider>
      <div className="px-1 md:px-4">
        <PropertyInfo></PropertyInfo>
        <GridSection></GridSection>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
