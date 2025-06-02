import { useContext } from "react";
import AuthContext from './../Provider/context';
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
   const { user } = useContext(AuthContext);
   const clickedRoute = useLocation();
   if (user) {
      return children;
   } else {
      return <Navigate to={'/login'} state={clickedRoute.pathname}></Navigate>
   }

};

export default Private;