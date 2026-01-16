
import { NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png'
import {
  FaHome,
  FaBuilding,
  FaPlusCircle,
  FaUsers,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaBlog,
  FaEnvelope,
  FaGlobe,
  FaHeart,
  FaCalendarCheck,
  FaClipboardList,
  FaUserShield,
} from "react-icons/fa";

import { AuthContext } from "../../../provider/AuthProvider";

const DashboardSidebar = () => {

const role =localStorage.getItem("role");



  const linkBase =
    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300";

  const activeLink = "bg-white text-orange-600 font-semibold shadow-md";

  const normalLink = "text-white hover:bg-orange-400";

  const navClass = ({ isActive }) =>
    `${linkBase} ${isActive ? activeLink : normalLink}`;

  return (
    <aside className="h-auto sticky top-0  bg-linear-to-b from-orange-500 to-orange-700 text-white flex flex-col">
      {/* Logo */}
      <div className="px-6 py-5 text-2xl bg-white flex justify-center items-center font-bold border-b border-orange-400">
        <img src={logo} alt="" />
      </div>

      {/* ================= Dashboard ================= */}
      <nav className="px-4 py-6 space-y-2 border-b border-orange-400">
        <p className="px-4 text-xs uppercase tracking-wide opacity-80">
          Dashboard
        </p>
        {/* Common */}
        {(role === "buyer" || role === "seller") && (
          <>
            <NavLink to="/dashboard" end className={navClass}>
              <FaHome /> Dashboard
            </NavLink>
          </>
        )}
        {/* Buyer */}
        {role === "buyer" && (
          <>
            <NavLink to="/dashboard/favourites" className={navClass}>
              <FaHeart /> Favourites
            </NavLink>

            <NavLink to="/dashboard/appointments" className={navClass}>
              <FaCalendarCheck />My Appointments
            </NavLink>
          </>
        )}
        {/* Seller */}
        {role === "seller" && (
          <>
            <NavLink to="/dashboard/seller/add-property" className={navClass}>
              <FaPlusCircle /> Add Property
            </NavLink>

            <NavLink to="/dashboard/seller/manage-properties" className={navClass}>
              <FaBuilding /> Manage Properties
            </NavLink>

            <NavLink to="/dashboard/seller/manage-appointments" className={navClass}>
              <FaCalendarCheck /> Appointments Request
            </NavLink>
          </>
        )}
        {/* Admin */}
        {role === "admin" && (
          <>
            <NavLink to="/dashboard/admin" className={navClass}>
              <FaUserShield /> Admin Dashboard
            </NavLink>

            <NavLink to="/dashboard/manage-users" className={navClass}>
              <FaUsers /> Manage Users
            </NavLink>

            <NavLink to="/dashboard/manage-properties" className={navClass}>
              <FaBuilding /> Manage Properties
            </NavLink>

            <NavLink to="/dashboard/property-requests" className={navClass}>
              <FaClipboardList /> Property Requests
            </NavLink>

            <NavLink to="/dashboard/seller/add-property" className={navClass}>
              <FaPlusCircle /> Add Property
            </NavLink>
          </>
        )}
      </nav>

      {/* ================= Website ================= */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <p className="px-4 text-xs uppercase tracking-wide opacity-80">
          Website
        </p>

        <NavLink to="/" className={navClass}>
          <FaGlobe /> Home
        </NavLink>

        <NavLink to="/all-property" className={navClass}>
          <FaBuilding /> Property
        </NavLink>

        <NavLink to="/all-agency" className={navClass}>
          <FaUsers /> Agency
        </NavLink>

        <NavLink to="/blog" className={navClass}>
          <FaBlog /> Blog
        </NavLink>

        <NavLink to="/contact" className={navClass}>
          <FaEnvelope /> Contact
        </NavLink>
      </nav>

      {/* ================= Bottom ================= */}
      <div className="border-t border-orange-400 px-4 py-4 space-y-2">
        <NavLink to="/dashboard/profile" className={navClass}>
          <FaUserCircle /> Profile
        </NavLink>

        <NavLink to="/dashboard/settings" className={navClass}>
          <FaCog /> Settings
        </NavLink>

        <button className={`${linkBase} hover:bg-red-500 w-full`}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
