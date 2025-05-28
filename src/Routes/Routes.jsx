import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddSpot from "../Pages/TravelSpots/AddSpot";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";
import MyList from "../Pages/TravelSpots/MyList";
import AllSpot from './../Pages/TravelSpots/AllSpot';
import Terms from "../Pages/Terms/Terms";
import SpotDetails from "../Pages/TravelSpots/SpotDetails";
import Spiner from "../Components/Loading/Spiner";

const route = createBrowserRouter([
   {
      path: "/", element: <Root />, children: [
         {
            path: "/add-new-spot", element: <AddSpot />,
            hydrateFallbackElement: <Spiner />
         },
         {
            path: "/login", element: <Login />,
            hydrateFallbackElement: <Spiner />
         },
         {
            path: "/register", element: <Register />,
            hydrateFallbackElement: <Spiner />
         },
         {
            path: "/my-list", element: <MyList />,
            hydrateFallbackElement: <Spiner />
         },
         {
            path: '/terms', element: <Terms />,
            hydrateFallbackElement: <Spiner />
         },
         {
            path: "/all-spot", element: <AllSpot />,
            loader: () => fetch('http://localhost:5000/spots'),
            hydrateFallbackElement: <Spiner />
         },
         {
            path: "/spot-detail/:id", element: <SpotDetails />,
            loader: ({ params }) => fetch(`http://localhost:5000/spots/${params.id}`),
            hydrateFallbackElement: <Spiner />
         }

      ]
   },

])

export default route