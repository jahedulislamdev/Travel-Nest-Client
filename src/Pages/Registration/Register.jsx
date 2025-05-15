import { Link } from "react-router-dom";

const Register = () => {
   return (
      <div className="bg-base-200 flex items-center justify-center p-1.5 md:px-4 py-7 font-ubuntu">
         <form className="w-full max-w-md bg-base-100 shadow-xl rounded-xl p-4 md:p-8 space-y-4 border-2 border-gray-800">
            <h2 className="text-2xl font-bold text-center text-sky-200">Register</h2>

            {/* Username */}
            <div className="form-control">
               <input
                  type="text"
                  name="name"
                  placeholder="Enter your username"
                  className="input focus:outline-0 w-full input-lg"
                  required
               />
            </div>
            {/* Email */}
            <div className="form-control">
               <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input focus:outline-0 w-full input-lg"
                  required
               />
            </div>
            {/* Mobile Number */}
            <div className="form-control">
               <input
                  type="number"
                  name="number"
                  placeholder="Enter your mobile number"
                  className="input focus:outline-0 w-full input-lg"
                  required
               />
            </div>
            {/* Password */}
            <div className="form-control">
               <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  className="input focus:outline-0 w-full input-lg"
                  required
               />
            </div>
            <div>
               <label className="label capitalize  text-sm">
                  <input type="checkbox" defaultChecked className="checkbox checkbox-xs" />
                  Accept our <Link to={'/terms'} className="text-sky-200">tems and conditions</Link>
               </label>
            </div>
            <div>
               <button type="submit" className="btn btn-primary w-full mt-4">Register</button>
               <p className="text-sm opacity-80 p-1 text-base-content/80">
                  Already have an account?{" "}
                  <Link to={'/login'} className="text-sky-200 font-medium ">
                     Login
                  </Link>
               </p>
            </div>
         </form>
      </div>
   );
};

export default Register;
