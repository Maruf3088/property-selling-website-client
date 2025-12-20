import React from "react";
import { FcGoogle } from "react-icons/fc";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl w-full">
        
        {/* LEFT SIDE LOTTIE */}
        <div className="hidden lg:flex items-center justify-center bg-orange-50 p-8">
          <DotLottieReact
            src="/lotties/Appointment booking with smartphone.lottie"
            loop
            autoplay
            style={{ width: "100%", maxWidth: 400 }}
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-8 lg:p-12">
          <h2 className="text-3xl font-bold mb-2">Welcome Back </h2>
          <p className="text-gray-500 mb-6">Login to manage your properties easily</p>

          <button className="btn btn-outline w-full mb-4 flex items-center gap-2">
            <FcGoogle size={20} />
            Continue with Google
          </button>

          <div className="divider">OR</div>

          <form className="space-y-4">
            <div>
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" placeholder="example@email.com" className="input input-bordered w-full" required />
            </div>

            <div>
              <label className="label"><span className="label-text">Password</span></label>
              <input type="password" placeholder="••••••••" className="input input-bordered w-full" required />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-sm checkbox-orange" required />
              <p className="text-sm text-gray-600">
                I agree to the <span className="text-orange-500 cursor-pointer">Privacy Policy</span>
              </p>
            </div>

            <button className="btn bg-orange-500 hover:bg-orange-600 text-white w-full">Login</button>
          </form>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Don’t have an account? <Link to={'/register'} className="text-orange-500 cursor-pointer font-semibold">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
