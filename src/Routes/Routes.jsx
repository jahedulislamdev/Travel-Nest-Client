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
import App from "../App";
import Private from "../Private/Private";
import UpdateSpot from "../Pages/TravelSpots/UpdateSpot";
import Trendy from "../Pages/Home/Trendy";



const route = createBrowserRouter([
   {
      path: "/", element: <Root />, children: [
         {
            path: '/', element: <App />,
            loader: () => fetch('http://localhost:5000/spots'),
            hydrateFallbackElement: <Spiner />
         },
         {
            path: "/add-new-spot", element: <Private><AddSpot /></Private>,
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
            path: "/my-list/:email", element: <Private><MyList /></Private>,
            loader: ({ params }) => fetch(`http://localhost:5000/spots/email/${params.email}`),
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
            path: "/spot-detail/:id", element: <Private><SpotDetails /></Private>,
            loader: ({ params }) => fetch(`http://localhost:5000/spots/${params.id}`),
            hydrateFallbackElement: <Spiner />
         },
         {
            path: "/update-spot/:id", element: <Private><UpdateSpot /></Private>,
            loader: ({ params }) => fetch(`http://localhost:5000/spots/${params.id}`),

            hydrateFallbackElement: <Spiner />
         },
         {
            path: '/trendy', element: <Private><Trendy /></Private>,
            loader: () => fetch('http://localhost:5000/spots'),
            hydrateFallbackElement: <Spiner />
         }

      ]
   },

])

export default route;