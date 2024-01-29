import { Link, NavLink } from "react-router-dom";

import CustomLogo from "../CustomLogo/CustomLogo";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const ContestCreatorNav = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut(res=>{
      console.log(res);
    })
  }
  
  const links = (
    <>
      <li className="list-none hover:text-green-500 text-lg my-4 border px-2 py-1 rounded-lg text-center">
        <NavLink
          to="/contest-creator/add-contest"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-green-500 text-green-500 rounded-none"
              : ""
          }
        >
          Add Contest
        </NavLink>
      </li>
      <li className="list-none hover:text-green-500 text-lg my-4 border px-2 py-1 rounded-lg text-center">
        <NavLink
          to="/contest-creator/created-contest"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-green-500 text-green-500 rounded-none"
              : ""
          }
        >
          Created Contest
        </NavLink>
      </li>
      <li className="list-none hover:text-green-500 text-lg my-4 border px-2 py-1 rounded-lg text-center">
        <NavLink
          to="/contest-creator/contest-submitted"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-green-500 text-green-500 rounded-none"
              : ""
          }
        >
          Contest Submitted
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
    <div className="bg-black text-white font-font-poppins min-h-screen my-2">
      <div className="flex flex-col pt-10 px-2 text-center">
        <CustomLogo></CustomLogo>
        <h1 className="mt-4 text-white font-font-poppins text-2xl uppercase font-normal">
          {`${user.displayName}'s Navigation Panel`}
        </h1>
      </div>
      <div className="px-4 pt-5 flex justify-center">
        <Link to="/user">
          <img
            className="w-28 h-28 object-cover border-2 border-white px-4 py-4 rounded-full hover:w-32 hover:h-32 hover:px-5 hover:py-5 hover:cursor-pointer hover:border-green-500 hover:duration-700"
            src={user.photoURL}
            alt=""
          />
        </Link>
      </div>
      <div className="px-10 mt-5">{links}</div>
    </div>
  );
};

export default ContestCreatorNav;
