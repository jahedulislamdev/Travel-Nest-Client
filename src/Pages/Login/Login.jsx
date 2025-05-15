import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
   return (
      <div className=" bg-base-200 flex items-center justify-center p-2 md:p-7 md:px-4 font-ubuntu ">
         <form className="w-full max-w-md bg-base-100 shadow-xl rounded-xl px-4 md:p-8 border-2 border-gray-700/40  space-y-5 pt-7">
            <h2 className="text-2xl font-bold text-center text-sky-300">Login</h2>
            {/* Email Field */}
            <div className="form-control">
               <input
                  type="email"
                  placeholder="example@email.com"
                  className="input input-lg input-bordered w-full focus:outline-0"
                  required
               />
            </div>

            {/* Password Field */}
            <div className="form-control">
               <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-lg input-bordered w-full focus:outline-0"
                  required
               />
               <div className=" text-sm flex justify-between items-center p-1 mt-1">
                  <label className="label block">
                     <input type="checkbox" className="checkbox checkbox-primary checkbox-xs me-1" />
                     Remember me
                  </label>
                  <button type="button" className="cursor-pointer text-sky-400">Forget Password?</button>
               </div>
            </div>
            {/* Login Button */}
            <div>
               <button type="submit" className="btn bg-sky-600 w-full">Login</button>
               <p className="p-1 opacity-70 text-sm">Don't have an account? <Link to={'/register'} className="text-sky-200 font-medium">Register</Link> </p>
            </div>
            {/* Divider */}
            <div className="divider">or</div>
            {/* Social Login */}
            <div className="flex justify-center itemsc-center w-full space-x-5 py-5">
               <button type="button" className="w-full flex justify-center items-center cursor-pointer border border-gray-700 p-2 rounded hover:bg-gray-100/10 transition-colors"><FcGoogle className="mr-2 size-5" />Google</button>
               <button type="button" className="w-full flex justify-center items-center cursor-pointer border border-gray-700 p-2 rounded hover:bg-gray-100/10 transition-colors"><FaFacebook className="mr-2 size-5 text-blue-400" />Facebook</button>
            </div>
         </form>
      </div>
   );
};

export default Login;
