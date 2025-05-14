import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
   return (
      <div className="md:min-h-screen bg-base-200 flex items-center justify-center p-2 md:px-4 ">
         <div className="w-full max-w-md bg-base-100 shadow-xl rounded-xl px-4 md:p-8 space-y-6">
            <h2 className="text-2xl font-bold text-center text-base-content">Login</h2>

            {/* Email Field */}
            <div className="form-control">
               <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full focus:outline-0"
               />
            </div>

            {/* Password Field */}
            <div className="form-control">
               <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full focus:outline-0"
               />
            </div>

            {/* Login Button */}
            <button className="btn btn-primary w-full">Login</button>
            <p>Don't have an account? <Link to={'/register'} className="text-pink-200 font-medium">Register</Link> </p>
            {/* Divider */}
            <div className="divider">or</div>

            {/* Social Login */}
            <div className="space-y-2">
               <button className="btn btn-outline w-full">
                  <FaGoogle className="mr-2" />
                  Continue with Google
               </button>
               <button className="btn btn-outline w-full">
                  <FaFacebookF className="mr-2" />
                  Continue with Facebook
               </button>
            </div>
         </div>
      </div>
   );
};

export default Login;
