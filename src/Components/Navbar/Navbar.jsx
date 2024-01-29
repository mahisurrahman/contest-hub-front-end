import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import CustomLogo from "../CustomLogo/CustomLogo";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-black rounded-none"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="all-contests"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-black rounded-none"
              : ""
          }
        >
          Contests
        </NavLink>
      </li>
      <li>
        <NavLink
          to="blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-black rounded-none"
              : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-black rounded-none"
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-black rounded-none"
              : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut().then(() => {
      navigate("/");
      Swal.fire("Successfully Logged Out");
    });
  };

  const authButtons = user ? (
    <>
      <Link to="/user">
        <button className="hover:border-b-2 mb-2 font-font-poppins px-2">
          Dashboard
        </button>
      </Link>
      <Link to="">
        <button
          onClick={handleLogOut}
          className="hover:border-b-2 font-font-poppins px-2"
        >
          Logout
        </button>
      </Link>
    </>
  ) : (
    <>
      <Link to="/login">
        <button className="hover:border-b-2 mb-2 font-font-poppins px-2">
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button className="hover:border-b-2 font-font-poppins px-2">
          Sign Up
        </button>
      </Link>
    </>
  );

  return (
    <div className="">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-font-poppins"
            >
              {links}
              <Link to="/login">
                <button className="flex items-center gap-2 text-xl px-2 py-1 border text-black border-black rounded-md hover:bg-black hover:text-white hover:border-none hover:cursor-pointer hover:duration-700">
                  <FaUserCircle className="text-xl hover:text-white hover:duration-700"></FaUserCircle>
                  Login
                </button>
              </Link>
            </ul>
          </div>
          <CustomLogo></CustomLogo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-font-poppins text-xl">
            {links}
          </ul>
        </div>
        <div className="hidden md:block">
          {user ? (
            <>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="flex font-bold items-center gap-2 text-md px-2 py-2 text-black rounded-xl hover:border-2 hover:border-black hover:rounded-full hover:cursor-pointer hover:duration-700"
              >
                <img className="w-10 h-10 rounded-full object-cover" src={user.photoURL} alt="" />
                <sup>0</sup>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="flex font-bold items-center gap-2 text-md px-4 py-2 border-2 text-black border-black rounded-xl hover:bg-black hover:text-white hover:border-white hover:cursor-pointer hover:duration-700"
              >
                <FaUserCircle className="text-2xl hover:text-white hover:duration-700"></FaUserCircle>
                User
              </button>
            </>
          )}
          {isOpen && (
            <div className="absolute flex flex-col px-4 py-2 items-start bg-black text-white rounded-lg mt-2">
              {authButtons}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
