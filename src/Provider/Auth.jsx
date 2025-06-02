import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import app from '../Firebase/config';
import AuthContext from './context';
import toast from 'react-hot-toast';


const Auth = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(false);

   const auth = getAuth(app);

   // Register a new user
   const registrUser = async (email, password) => {
      setLoading(true);
      try {
         const result = await createUserWithEmailAndPassword(auth, email, password);
         return result;
      } finally {
         setLoading(false);
      }
   };

   // Login existing user
   const loginUser = async (email, password) => {
      setLoading(true);
      try {
         const result = await signInWithEmailAndPassword(auth, email, password);
         return result;
      } finally {
         setLoading(false);
      }
   };
   // logout existing user
   const logout = async () => {
      setLoading(true)
      signOut(auth)
         .then(() => {
            setUser(null)
            toast.success("Logout Successfully!")
         })
         .catch((err) => {
            toast.error("Logout Faild! Please Try Again!");
            console.error(err);
         })
   }
   // login With Google
   const Gprovider = new GoogleAuthProvider()
   const loginWithGoogle = async (navigate, path) => {
      if (user) {
         return toast.error('You are already logged in!')
      }
      setLoading(true)
      signInWithPopup(auth, Gprovider)
         .then(res => {
            toast.success("Login Successfully!")
            setUser(res.user)
         })
         .catch(err => {
            toast.error('Login Faild!')
            console.log(err)
         })
         .finally(() => {
            setLoading(false)
            navigate(path.state ? path.state : '/')
         })
   }

   // login with facebook
   const Fprovider = new FacebookAuthProvider()

   const loginWithFacebook = async (navigate, path) => {
      if (user) {
         return toast.error('You are already logged in!')
      }
      setLoading(true)
      signInWithPopup(auth, Fprovider)
         .then(res => {
            toast.success("Login Successfully!")
            setUser(res.user)
         })
         .catch(err => {
            toast.error('Login Faild!')
            console.log(err)
         })
         .finally(() => {
            setLoading(false)
            navigate(path.state ? path.state : '/');
         })
   }


   // auth observer
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser)
         setLoading(false)
      })
      return () => unSubscribe()
   }, [auth])

   const providedData = {
      user,
      setUser,
      loading,
      setLoading,
      registrUser,
      loginUser,
      logout,
      loginWithGoogle,
      loginWithFacebook,
   };

   return (
      <AuthContext.Provider value={providedData}>
         {children}
      </AuthContext.Provider>
   );
};

export default Auth;
