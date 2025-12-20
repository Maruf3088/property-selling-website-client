import React from "react";
import bannerImage from "../../assets/all-agency-bg.jpg";
import Breadcumb from "../../component/breadcrumb/Breadcumb";
import AgencyListing from "./all agency components/agency listing/AgencyListing";

const AllAgency = () => {
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
          <h1 className="text-white text-4xl font-semibold ">All Agency</h1>
          <div>
            <Breadcumb></Breadcumb>
          </div>
        </div>
      </div>
      {/* agency listing */}
      <AgencyListing></AgencyListing>
    </div>
  );
};

export default AllAgency;
