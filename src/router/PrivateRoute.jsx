import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation(); // ✅ FIX

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
        <span className="loading loading-spinner loading-xl text-orange-500"></span>
        <p className="mt-4 text-sm text-gray-500 tracking-wide">
          Checking authentication...
        </p>
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }} // ✅ SAFE
      />
    );
  }

  return children;
};

export default PrivateRoute;
