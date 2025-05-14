import React from 'react';
import AuthProvider from './context';

const Auth = ({ children }) => {
   const user = "Jishan"
   const providedData = { user }
   return (
      <AuthProvider.Provider value={providedData}>
         {children}
      </AuthProvider.Provider>
   );
};

export default Auth;