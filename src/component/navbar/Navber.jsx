"use client";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../provider/AuthProvider";
import { CiHeart } from "react-icons/ci";
import { MdNotificationsActive } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { FiSettings, FiLogOut, FiUser, FiLayout } from "react-icons/fi";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  // Filter out false values if user doesn't exist
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Property", href: "/all-property" },
    { name: "Agency", href: "/all-agency" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <p className="text-gray-800 font-medium">
            Are you sure you want to logout?
          </p>
          <div className="flex justify-center gap-2">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 text-sm"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                logout().then(() => {
                  toast.success("Logout successful!");
                });
                toast.dismiss(t.id);
              }}
              className="px-3 py-1 bg-red-600 rounded-md hover:bg-red-700 text-white text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      ),
      {
        duration: Infinity,
      }
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={logo || "/placeholder.svg"}
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-orange-600 group-hover:w-1/2 transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons / Icons - Desktop */}
          {user?.email ? (
            <div className="flex gap-5 items-center">
              {/* Favourite, Notifications, Chat */}
              <div className="flex gap-2 items-center">
                <div
                  role="button"
                  className="btn btn-ghost btn-circle tooltip tooltip-bottom"
                  data-tip="Favourites"
                >
                  <div className="indicator">
                    <FaHeart color="#F54900" size={25} />
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="btn btn-ghost btn-circle tooltip tooltip-bottom"
                  data-tip="Notifications"
                >
                  <div className="indicator">
                    <MdNotificationsActive color="#FBBF24" size={25} />
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="btn btn-ghost btn-circle tooltip tooltip-bottom"
                  data-tip="Messages"
                >
                  <div className="indicator">
                    <RiMessage2Fill color="#A6A5E0" size={25} />
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>
              </div>

              {/* Profile Dropdown */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                  data-tip="Profile"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Avatar"
                      src={user?.photoURL || "/placeholder.svg"}
                    />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link className="flex items-center gap-2">
                      <FiUser /> Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center gap-2">
                      <FiSettings /> Settings
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center gap-2">
                      <FiLayout /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full text-left"
                    >
                      <FiLogOut /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-white hover:text-orange-600 transition"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-orange-600 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Auth Buttons */}
          {!user?.email && (
            <div className="pt-4 pb-3 border-t border-gray-200 space-y-2">
              <Link
                to="/login"
                className="block px-3 py-2 text-center font-medium text-gray-700 hover:bg-gray-50 hover:text-orange-500 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 text-center bg-orange-600 text-white font-medium rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
