import { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AuthContext from "../../Provider/context";

const Login = () => {
   const navigate = useNavigate();
   const path = useLocation();
   const { loginUser, setUser, loginWithGoogle, loginWithFacebook } = useContext(AuthContext);
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      loginUser(email, password)
         .then(res => {
            setUser(res.user);
            toast.success('Login successfully 🎉', {
               style: {
                  background: '#1E293B',
                  color: '#A7F3D0',
                  border: '1px solid #10B981',
                  padding: '14px 18px',
                  borderRadius: '6px',
                  fontWeight: '500',
               },
               icon: '🟢',
            });
            e.target.reset();
            navigate(path.state ? path.state : '/')
         })
         .catch(err => {
            if (err.code === "auth/invalid-credential") {
               toast.error(`Invalid Email or Password 🚫`, {
                  style: {
                     background: '#1F2937',
                     color: '#FCA5A5',
                     border: '1px solid #EF4444',
                     padding: '14px 18px',
                     borderRadius: '6px',
                     fontWeight: '500',
                  },
                  icon: '❗',
               });
            } else {
               toast.error("Login Faild!")
            }
         });
   }
   return (
      <div className=" bg-base-200 flex items-center justify-center p-2 md:p-7 md:px-4 font-ubuntu ">
         <form onSubmit={handleFormSubmit} className="w-full max-w-md bg-base-100 shadow-xl rounded-xl px-4 md:p-8 border border-gray-700/40  space-y-5 pt-7 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-center text-sky-300">Login</h2>
            {/* Email Field */}
            <div className="form-control">
               <input type="email" name="email" placeholder="example@email.com" className="input input-lg input-bordered w-full focus:outline-0" required
               />
            </div>

            {/* Password Field */}
            <div className="form-control">
               <input type="password" name="password" placeholder="Enter your password" className="input input-lg input-bordered w-full focus:outline-0" required
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
               <button type="submit" className="btn bg-sky-700 w-full text-white">Login</button>
               <p className="p-1 opacity-70 text-sm">Don't have an account? <Link to={'/register'} className="text-sky-700 font-medium">Register</Link> </p>
            </div>
            {/* Divider */}
            <div className="divider">or</div>
            {/* Social Login */}
            <div className="flex justify-center itemsc-center w-full space-x-5 py-5">
               <button onClick={() => loginWithGoogle(navigate, path)} type="button" className="w-full flex justify-center items-center cursor-pointer shadow p-2 rounded hover:bg-gray-100/10 transition-colors"><FcGoogle className="mr-2 size-5" />Google</button>
               <button onClick={() => loginWithFacebook(navigate, path)} type="button" className="w-full flex justify-center items-center cursor-pointer shadow p-2 rounded hover:bg-gray-100/10 transition-colors"><FaFacebook className="mr-2 size-5 text-blue-400" />Facebook</button>
            </div>
         </form>

      </div>
   );
};

export default Login;
