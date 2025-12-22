import React from "react";
import ImageSlider from "./property details page component/image slider/ImageSlider";
import PropertyInfo from "./property details page component/property info/PropertyInfo";
import GridSection from "./property details page component/grid section/GridSection";
import usePropertyById from "../../hooks/userPropertyById";
import { useParams } from "react-router-dom";

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const { data: property, isLoading } = usePropertyById(id);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
        <span className="loading loading-spinner loading-xl text-orange-500"></span>
        <p className="mt-4 text-sm text-gray-500 tracking-wide">
          loading data...
        </p>
      </div>
    );
  }

  return (
    <div>
      <ImageSlider property={property}></ImageSlider>
      <div className="px-1 md:px-4">
        <PropertyInfo property={property}></PropertyInfo>
        <GridSection ></GridSection>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
