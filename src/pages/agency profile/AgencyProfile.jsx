import React from "react";
import bannerImage from "../../assets/agency-profile-bg.jpg";
import Breadcumb from "../../component/breadcrumb/Breadcumb";
import AgencyInfo from "./agency profile components/agency info/AgencyInfo";
const AgencyProfile = () => {
  return (
    <div className="bg-gray-50">
      <div
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
        }}
        className="flex items-center "
      >
        <div className="container mx-auto px-4 lg:px-0">
          <h1 className="text-white text-4xl font-semibold ">Agency Profile</h1>
          <div>
            <Breadcumb></Breadcumb>
          </div>
        </div>
      </div>
      {/* agency profile content */}
      <AgencyInfo></AgencyInfo>
    </div>
  );
};

export default AgencyProfile;
