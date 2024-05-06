import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/HomePage/Home/Home";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/BookingServices/CheckOut";
import Bookings from "../pages/Bookings/Bookings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children:[
        {
            path: '/',
            element:<Home />
        },
        {
            path:'/login',
            element:<Login />
        },
        {
            path:'/signUp',
            element:<SignUp />
        },
        {
            path:'/checkout/:id',
            element:<CheckOut />,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:'/bookings',
            element:<Bookings />
        }
      ]
    },
  ]);

  export default router;