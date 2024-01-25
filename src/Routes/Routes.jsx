import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllContests from "../Pages/AllContest/AllContests";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ScrollToTop from "../Components/ScrollRestoration/ScrollToTop";
import AdminDash from "../Layouts/AdminDash";
import AdminHome from "../Pages/AdminHome/AdminHome";
import AdminManageUsers from "../Pages/AdminManageUsers/AdminManageUsers";
import AdminManageContests from "../Pages/AdminManageContests/AdminManageContests";
import DetailContest from "../Pages/DetailContest/DetailContest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop></ScrollToTop>
        <Main></Main>
      </>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "all-contests",
        element: <AllContests></AllContests>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "about",
        element: <About></About>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "error-page",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path:"/all-contests/:id",
        element: <DetailContest></DetailContest>,
      }
    ],
  },
  {
    path: "/login",
    element: (
      <>
        <ScrollToTop></ScrollToTop>
        <Login></Login>
      </>
    ),
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/signup",
    element: (
      <>
        <ScrollToTop></ScrollToTop>
        <SignUp></SignUp>
      </>
    ),
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/admin",
    element: (
      <>
        <ScrollToTop></ScrollToTop>
        <AdminDash></AdminDash>
      </>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/admin",
        element: (
          <>
            <ScrollToTop></ScrollToTop>,
            <AdminHome></AdminHome>,
          </>
        ),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/admin/manage-users",
        element:(
          <>
            <ScrollToTop></ScrollToTop>,
            <AdminManageUsers></AdminManageUsers>,
          </>
        ),
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: "/admin/manage-contests",
        element:(
          <>
            <ScrollToTop></ScrollToTop>,
            <AdminManageContests></AdminManageContests>
          </>
        ),
        errorElement: <ErrorPage></ErrorPage>
      },
    ]
  },
  
]);
