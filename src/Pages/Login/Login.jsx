import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
   return (
      <div className="md:h-screen bg-base-200 flex items-center justify-center p-2 md:px-4 ">
         <div className="w-full max-w-md bg-base-100 shadow-xl rounded-xl px-4 md:p-8 space-y-5 pt-7">
            <h2 className="text-2xl font-bold text-center text-base-content/80">Login</h2>
            {/* Email Field */}
            <div className="form-control">
               <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-lg input-bordered w-full focus:outline-0"
               />
            </div>

            {/* Password Field */}
            <div className="form-control">
               <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-lg input-bordered w-full focus:outline-0"
               />
            </div>

            {/* Login Button */}
            <div>
               <button className="btn btn-primary w-full">Login</button>
               <p className="p-1">Don't have an account? <Link to={'/register'} className="text-pink-200 font-medium">Register</Link> </p>
            </div>
            {/* Divider */}
            <div className="divider">or</div>
            {/* Social Login */}
            <div className="flex justify-center itemsc-center w-full space-x-5 py-5">
               <button className="w-full flex justify-center items-center cursor-pointer border border-gray-700 p-2 rounded"><FcGoogle className="mr-2 size-5" />Google</button>
               <button className="w-full flex justify-center items-center cursor-pointer border border-gray-700 p-2 rounded"><FaFacebook className="mr-2 size-5 text-blue-400" />Facebook</button>
            </div>
         </div>
      </div>
   );
};

export default Login;
