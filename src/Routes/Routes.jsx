import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddSpot from "../Pages/TravelSpots/AddSpot";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";
import MyList from "../Pages/TravelSpots/MyList";
import AllSpot from './../Pages/TravelSpots/AllSpot';

const route = createBrowserRouter([
   {
      path: "/", element: <Root />, children: [
         { path: "/add-new-spot", element: <AddSpot /> },
         { path: "/login", element: <Login /> },
         { path: "/register", element: <Register /> },
         { path: "/my-list", element: <MyList /> },
         { path: "/all-spot", element: <AllSpot /> },
      ]
   },

])

export default route