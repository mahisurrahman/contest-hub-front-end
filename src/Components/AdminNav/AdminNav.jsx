import { Link, NavLink, useNavigate } from "react-router-dom";
import adminImage from "../../assets/img6.jpg";
import CustomLogo from "../CustomLogo/CustomLogo";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const AdminNav = () => {
  const {logOut} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () =>{
    logOut(res=>{
      navigate('/')
      console.log(res);
    })
  }
  
  const links = (
    <>
      <li className="list-none hover:text-green-500 text-lg my-4 border px-2 py-1 rounded-lg text-center">
        <NavLink
          to="/admin/manage-users"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-green-500 text-green-500 rounded-none"
              : ""
          }
        >
          Manage Users
        </NavLink>
      </li>
      <li className="list-none hover:text-green-500 text-lg my-4 border px-2 py-1 rounded-lg text-center">
        <NavLink
          to="/admin/manage-contests"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-green-500 text-green-500 rounded-none"
              : ""
          }
        >
          Manage Contests
        </NavLink>
      </li>
      <li className="list-none hover:text-green-500 text-sm my-4 border px-2 py-2 rounded-lg text-center">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-green-500 text-green-500 rounded-none"
              : ""
          }
        >
          Contest Hub (Home Page)
        </NavLink>
      </li>
      <div className="">
        <button onClick={handleLogOut} className="flex justify-center w-full py-2 border-2 rounded-xl text-xl text-black bg-white font-bold hover:bg-red-300 hover:border-red-300 hover:cursor-pointer hover:duration-700">Log Out</button>
      </div>
    </>
  );
  return (
    <div className="bg-black text-white font-font-poppins min-h-screen">
      <div className="flex flex-col pt-10 px-2 text-center">
        <CustomLogo></CustomLogo>
        <h1 className="mt-4 text-white font-font-poppins text-2xl uppercase font-normal">
          Admin Navigation Panel
        </h1>
      </div>
      <div className="px-4 pt-5 flex justify-center">
        <Link to="/admin">
          <img
            className="w-36 border-2 border-white px-4 py-4 rounded-full hover:w-48 hover:px-5 hover:py-5 hover:cursor-pointer hover:border-green-500 hover:duration-700"
            src={adminImage}
            alt=""
          />
        </Link>
      </div>
      <div className="px-10 mt-5">{links}</div>
    </div>
  );
};

export default AdminNav;
