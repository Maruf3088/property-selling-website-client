import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  const [role, setRole] = useState("buyer");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    alert("Registration successful!");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-orange-100">
      
      {/* LEFT SIDE LOTTIE */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-orange-50 p-8">
        <DotLottieReact
          src="/lotties/login.lottie"
          loop
          autoplay
          style={{ width: "100%", maxWidth: 500 }}
        />
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2 ">Register Now </h2>
          <p className="text-gray-500 mb-6 ">
            Create your account as a Buyer or Seller
          </p>

          {/* Buyer / Seller Toggle */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              type="button"
              className={`btn flex-1 ${role === "buyer" ? "bg-orange-500 text-white" : "btn-outline"}`}
              onClick={() => setRole("buyer")}
            >
              Buyer
            </button>
            <button
              type="button"
              className={`btn flex-1 ${role === "seller" ? "bg-orange-500 text-white" : "btn-outline"}`}
              onClick={() => setRole("seller")}
            >
              Seller
            </button>
          </div>

          {/* Social Login */}
          <button className="btn btn-outline w-full mb-4 flex items-center justify-center gap-2">
            <FcGoogle size={20} />
            Sign up with Google
          </button>

          <div className="divider">OR</div>

          {/* Registration Form */}
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div>
              <label className="label"><span className="label-text">Full Name</span></label>
              <input
                type="text"
                placeholder="Your full name"
                className="input input-bordered w-full"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Username */}
            <div>
              <label className="label"><span className="label-text">Username</span></label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>

            {/* Profile Photo */}
            <div>
              <label className="label"><span className="label-text">Profile Photo</span></label>
              <input
                type="file"
                accept="image/*"
                className="file-input file-input-bordered w-full"
                {...register("photo")}
              />
            </div>

            {/* Email */}
            <div>
              <label className="label"><span className="label-text">Email</span></label>
              <input
                type="email"
                placeholder="example@email.com"
                className="input input-bordered w-full"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="label"><span className="label-text">Password</span></label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input input-bordered w-full pr-12"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                      message: "Password must include uppercase, lowercase, and number",
                    },
                  })}
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="label"><span className="label-text">Re-enter Password</span></label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input input-bordered w-full pr-12"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) => value === password || "Passwords do not match",
                  })}
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Privacy */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-sm checkbox-orange"
                {...register("privacy", { required: "You must accept privacy policy" })}
              />
              <p className="text-sm text-gray-600">
                I agree to the{" "}
                <span className="text-orange-500 cursor-pointer">Privacy Policy</span>
              </p>
            </div>

            {/* Register */}
            <button className="btn bg-orange-500 hover:bg-orange-600 text-white w-full">
              Register
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Already have an account?{" "}
            <Link to={'/login'} className="text-orange-500 cursor-pointer font-semibold">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
