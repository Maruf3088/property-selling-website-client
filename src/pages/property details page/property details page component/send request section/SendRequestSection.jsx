import React from "react";
import { BsSend } from "react-icons/bs";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import {
  MdPerson,
  MdEmail,
  MdPhone,
  MdDateRange,
  MdAccessTime,
} from "react-icons/md";
import { useParams } from "react-router-dom";
import usePropertyById from "../../../../hooks/usePropertyById";

const SendRequestSection = () => {
  const { id } = useParams();
  const { data: property } = usePropertyById(id);

  return (
    <section className="md:bg-gray-50 py-8 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* ---- Title & Subtitle ---- */}
        <div className=" space-y-2">
          <h2 className="text-3xl font-bold text-gray-800">
            Contact <span className="text-orange-600">Property Agent</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below or contact the agent directly for any
            inquiries about the property.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-10 items-start">
          {/* ---- Agent Info ---- */}
          <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              {property?.agent?.name}
            </h3>
            <p className="text-gray-500">Senior Real Estate Agent</p>

            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-3 text-gray-600">
                <FaEnvelope className="text-orange-600" />
                <span>{property?.agent?.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <FaPhone className="text-orange-600" />
                <span>{property?.agent?.phone}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                className="text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-white bg-green-500 p-2 rounded-full hover:bg-green-600 transition"
              >
                <FaWhatsapp />
              </a>
            </div>

            <button className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg shadow-md transition flex items-center justify-center gap-2">
              <IoChatbubbleEllipsesOutline size={20} />
              Chat with Agent
            </button>
          </div>

          {/* ---- Appointment Form ---- */}
          <div className="bg-white md:p-8 md:rounded-xl md:shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Book an Appointment
            </h3>

            <form className="space-y-4">
              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <MdPerson className="text-orange-600 text-xl" /> Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <MdEmail className="text-orange-600 text-xl" /> Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="mt-1 p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <MdPhone className="text-orange-600 text-xl" /> Phone
                </label>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="mt-1 p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <MdDateRange className="text-orange-600 text-xl" />{" "}
                  Appointment Date
                </label>
                <input
                  type="date"
                  className="mt-1 p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <MdAccessTime className="text-orange-600 text-xl" />{" "}
                  Appointment Time
                </label>
                <input
                  type="time"
                  className="mt-1 p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 font-medium">
                  Additional Request
                </label>
                <textarea
                  placeholder="Your message or requirements..."
                  className="mt-1 p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                  rows={4}
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg shadow-md transition flex items-center justify-center gap-2"
              >
                <BsSend size={17} />
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendRequestSection;
