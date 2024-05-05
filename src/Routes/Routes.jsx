import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/HomePage/Home/Home";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

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
        }
      ]
    },
  ]);

  export default router;