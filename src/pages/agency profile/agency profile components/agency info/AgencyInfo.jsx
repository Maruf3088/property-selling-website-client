import React from "react";
import profile from "../../../../assets/agentprofile.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail, CiPhone } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLink, FaLinkedin } from "react-icons/fa6";
import AgencyPropertyListing from "../agency property listing/AgencyPropertyListing";
import FilterSection from "../../../all property/all property components/filter section/FilterSection";
import SidebarContent from "../drawer content/SidebarContent";

const AgencyInfo = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-8 items-start gap-2">
        {/* ================= Agency Listing ================= */}
        <div className="lg:col-span-6">
          <div className="flex flex-col lg:flex-row gap-4 w-full bg-white rounded-lg p-3">
            <img
              className="lg:w-1/2 h-[350px] rounded-lg object-cover"
              src={profile}
              alt=""
            />

            <div className="lg:w-1/2 items-center flex">
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <h1 className="font-bold text-3xl">Agent Name</h1>
                  <p className="text-gray-600 text-lg">
                    Real estate Property Agent
                  </p>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex text-gray-600 font-semibold items-center gap-1">
                    <div className="bg-gray-100 font-bold p-2 rounded-lg">
                      <IoLocationOutline size={20} />
                    </div>
                    <span>123 Main St, City, Country</span>
                  </div>

                  <div className="flex text-gray-600 font-semibold items-center gap-1">
                    <div className="bg-gray-100 font-bold p-2 rounded-lg">
                      <CiPhone size={20} />
                    </div>
                    <span>+8801-3222-333</span>
                  </div>

                  <div className="flex text-gray-600 font-semibold items-center gap-1">
                    <div className="bg-gray-100 font-bold p-2 rounded-lg">
                      <CiMail size={20} />
                    </div>
                    <span>5Gt5y@example.com</span>
                  </div>

                  <div className="flex text-gray-600 font-semibold items-center gap-1">
                    <div className="bg-gray-100 font-bold p-2 rounded-lg">
                      <FaLink size={20} />
                    </div>
                    <span>example.com</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-3">
                  <div className="bg-[#FEF0F1] text-orange-500 rounded-full p-2">
                    <FaFacebook size={18} />
                  </div>
                  <div className="bg-[#FEF0F1] text-orange-500 rounded-full p-2">
                    <FaInstagram size={18} />
                  </div>
                  <div className="bg-[#FEF0F1] text-orange-500 rounded-full p-2">
                    <FaLinkedin size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="mt-4">
            <p className="text-2xl font-semibold mb-3">About the agency</p>
            <p className="text-gray-600">
              Residences can be classified by and how they are connected
              residences and land. Different types of housing tenure can be used
              for the same physical type.lorem2022 ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            </p>
          </div>

          {/* ================= Mobile Drawer ================= */}
          <div className="drawer lg:hidden mt-4">
            <input id="agency-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
              <label
                htmlFor="agency-drawer"
                className="btn drawer-button"
              >
                Filter Properties
              </label>
            </div>

            <div className="drawer-side">
              <label
                htmlFor="agency-drawer"
                className="drawer-overlay"
              ></label>
              <SidebarContent />
            </div>
          </div>

          <AgencyPropertyListing />
        </div>

        {/* ================= Desktop Sidebar ================= */}
        <div className="hidden lg:block lg:col-span-2">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Contact Agent</h2>
            <form className="space-y-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Your Name"
              />

              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Your Email"
              />

              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-2"
                rows="4"
                placeholder="Your Message"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white rounded-lg p-2 hover:bg-white hover:text-black border border-orange-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Featured Properties */}
          <div className="bg-white shadow-xl rounded-xl p-4 mt-5">
            <h2 className="font-semibold text-lg mb-4">Featured Properties</h2>

            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border-b last:border-b-0 pb-3 last:pb-0"
                >
                  <img
                    src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=400"
                    alt="property"
                    className="w-20 h-16 object-cover rounded-lg"
                  />

                  <div>
                    <h3 className="text-sm font-semibold">
                      Modern Family Home
                    </h3>
                    <p className="text-xs text-gray-500">New York, USA</p>
                    <p className="text-sm font-bold text-orange-500">
                      $450,000
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-3 mt-5 rounded-lg">
            <FilterSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyInfo;
