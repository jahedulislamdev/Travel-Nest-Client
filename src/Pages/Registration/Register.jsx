import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import AuthContext from "./../../Provider/context";

const Register = () => {
   const { registrUser, setUser } = useContext(AuthContext);
   const [err, setErr] = useState('');

   const handleFormSubmit = (e) => {
      e.preventDefault();
      setErr('');

      const form = new FormData(e.currentTarget);
      const name = form.get("name");
      const email = form.get("email");
      const profile = form.get("photo");
      const password = form.get("password");
      const terms = form.get("terms");

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      if (!passwordRegex.test(password)) {
         return setErr("Password must be 6+ characters with both uppercase and lowercase letters!");
      }

      if (!terms) {
         return setErr("Please accept the terms and conditions.");
      }

      registrUser(email, password)
         .then((res) => {
            updateProfile(res.user, {
               displayName: name,
               photoURL: profile,
            });

            toast.success('Account created successfully 🎉', {
               style: {
                  background: '#1E293B',
                  color: '#A7F3D0',
                  border: '1px solid #10B981',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  fontWeight: '500',
               },
               icon: '🟢',
            });
            setUser(null)
            e.target.reset();
         })
         .catch((err) => {
            if (err.code === "auth/email-already-in-use") {
               toast.error('Email already in use 🚫', {
                  style: {
                     background: '#1F2937',
                     color: '#FCA5A5',
                     border: '1px solid #EF4444',
                     padding: '14px 18px',
                     borderRadius: '10px',
                     fontWeight: '500',
                  },
                  icon: '❗',
               });
            } else {
               toast.error('Registration failed. Please try again 🚫', {
                  style: {
                     background: '#1F2937',
                     color: '#FCA5A5',
                     border: '1px solid #EF4444',
                     padding: '14px 18px',
                     borderRadius: '10px',
                     fontWeight: '500',
                  },
                  icon: '❗',
               });
            }
         });
   };

   return (
      <div className="bg-base-200 flex items-center justify-center p-1.5 md:px-4 py-7 font-ubuntu">
         <form onSubmit={handleFormSubmit} className="w-full max-w-md bg-base-100 shadow-xl rounded-xl p-4 md:p-8 space-y-4 border-2 border-gray-800">
            <h2 className="text-2xl font-bold text-center text-sky-200">Register</h2>

            {/* Username */}
            <div className="form-control">
               <input type="text" name="name" placeholder="Enter your username" className="input focus:outline-0 w-full input-lg" required />
            </div>

            {/* Email */}
            <div className="form-control">
               <input type="email" name="email" placeholder="Enter your email" className="input focus:outline-0 w-full input-lg" required />
            </div>

            {/* Photo URL */}
            <div className="form-control">
               <input type="url" name="photo" placeholder="Enter your photo URL" className="input focus:outline-0 w-full input-lg" required />
            </div>

            {/* Password */}
            <div className="form-control">
               <input type="password" name="password" placeholder="Create a password" className="input focus:outline-0 w-full input-lg" required />
               {err && <p className="text-error capitalize mt-1">{err}</p>}
            </div>

            {/* Terms */}
            <div className="form-control">
               <label className="label cursor-pointer text-sm">
                  <input type="checkbox" name="terms" className="checkbox checkbox-xs mr-2" required />
                  Accept our <Link to="/terms" className="text-sky-200">terms and conditions</Link>
               </label>
            </div>

            {/* Submit & Link */}
            <div>
               <button type="submit" className="btn btn-primary w-full mt-4">Register</button>
               <p className="text-sm opacity-80 p-1 text-base-content/80 text-center">
                  Already have an account?{" "}
                  <Link to="/login" className="text-sky-200 font-medium">Login</Link>
               </p>
            </div>
         </form>

      </div>
   );
};

export default Register;
