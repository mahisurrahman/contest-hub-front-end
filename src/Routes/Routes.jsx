
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllContests from "../Pages/AllContest/AllContests";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path:"all-contests",
          element: <AllContests></AllContests>,
          errorElement: <ErrorPage></ErrorPage>,
        },
        {
          path:"blog",
          element: <Blog></Blog>,
          errorElement: <ErrorPage></ErrorPage>,
        },
        {
          path:"about",
          element: <About></About>,
          errorElement: <ErrorPage></ErrorPage>,
        },
        {
          path:"contact",
          element: <Contact></Contact>,
          errorElement: <ErrorPage></ErrorPage>,
        },
      ]
    },
    { path:'/login', element:<Login></Login>, errorElement: <ErrorPage></ErrorPage>, },
    { path:'/signup', element:<SignUp></SignUp>, errorElement: <ErrorPage></ErrorPage>, },
  ]);
