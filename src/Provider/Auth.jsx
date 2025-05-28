import { useState } from 'react';
import AuthProvider from './context';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/config';

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

   const providedData = {
      user,
      setUser,
      loading,
      setLoading,
      registrUser,
      loginUser,
   };

   return (
      <AuthProvider.Provider value={providedData}>
         {children}
      </AuthProvider.Provider>
   );
};

export default Auth;
