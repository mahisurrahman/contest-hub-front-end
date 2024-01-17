import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const links = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="all-contests">Contests</Link></li>
        <li><Link to="blog">Blog</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="contact">Contact</Link></li>
    </>
    
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-font-poppins">
                {links}
                <Link to="/login"><button className="flex items-center gap-2 text-xl px-2 py-1 border text-black border-black rounded-md hover:bg-black hover:text-white hover:border-none hover:cursor-pointer hover:duration-700"><FaUserCircle className="text-xl hover:text-white hover:duration-700"></FaUserCircle>Login</button></Link>
            </ul>
          </div>
          <div className="flex md:flex-col gap-5 md:gap-0 items-center text-center">
            <h1 className="font-font-rubik text-3xl font-bold">Contest Hub</h1>
            <p className="font-font-dancing font-bold">Developers Meet Innovation</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-font-poppins text-xl">
            {links}
          </ul>
        </div>
        <div className="hidden md:block">
          <Link to="/login"><button className="flex items-center gap-2 text-2xl px-4 py-2 border-2 text-black border-black rounded-xl hover:bg-black hover:text-white hover:border-white hover:cursor-pointer hover:duration-700"><FaUserCircle className="text-3xl hover:text-white hover:duration-700"></FaUserCircle>Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
