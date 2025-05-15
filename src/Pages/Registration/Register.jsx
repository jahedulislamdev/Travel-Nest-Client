import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
   return (
      <div className="md:min-h-screen bg-base-200 flex items-center justify-center p-1.5 md:px-4">
         <div className="w-full max-w-md bg-base-100 shadow-xl rounded-xl p-4 md:p-8 space-y-6">
            <h2 className="text-2xl font-bold text-center text-base-content">Create Your Account</h2>

            {/* Username */}
            <div className="form-control">
               <label className="label block">
                  <span className="label-text">Username</span>
               </label>
               <input
                  type="text"
                  placeholder="Enter your username"
                  className="input focus:outline-0 w-full"
               />
            </div>

            {/* Email */}
            <div className="form-control">
               <label className="label block">
                  <span className="label-text">Email</span>
               </label>
               <input
                  type="email"
                  placeholder="Enter your email"
                  className="input focus:outline-0 w-full"
               />
            </div>

            {/* Mobile Number */}
            <div className="form-control">
               <label className="label block">
                  <span className="label-text">Mobile Number</span>
               </label>
               <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="input focus:outline-0 w-full"
               />
            </div>

            {/* Password */}
            <div className="form-control">
               <label className="label block">
                  <span className="label-text">Password</span>
               </label>
               <input
                  type="password"
                  placeholder="Create a password"
                  className="input focus:outline-0 w-full"
               />
            </div>

            {/* Register Button */}
            <button className="btn btn-primary w-full mt-4">Register</button>

            {/* Already have account? */}
            <p className="text-sm text-center text-gray-500">
               Already have an account?{" "}
               <Link to={'/login'} className="text-violet-300 font-medium">
                  Login
               </Link>
            </p>
         </div>
      </div>
   );
};

export default Register;
