import { Link, NavLink } from "react-router-dom";
import adminImage from "../../assets/img6.jpg";

const AdminNav = () => {
  const links = (
    <>
      <li className="list-none hover:text-green-500 text-2xl my-4 border px-2 py-2 rounded-lg text-center">
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
      <li className="list-none hover:text-green-500 text-2xl my-4 border px-2 py-2 rounded-lg text-center">
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
      <div className="">
        <button className="flex justify-center w-full py-2 border-2 rounded-xl text-xl text-black bg-white font-bold hover:bg-red-300 hover:border-red-300 hover:cursor-pointer hover:duration-700">Log Out</button>
      </div>
    </>
  );
  return (
    <div className="bg-black text-white font-font-poppins min-h-screen">
      <div className="flex pt-10 px-2 text-center">
        <h1 className="text-white font-font-poppins text-2xl uppercase font-bold underline">
          Admin Navigation Panel
        </h1>
      </div>
      <div className="px-4 pt-10 flex justify-center">
        <Link to="/admin">
          <img
            className="w-40 border-2 border-white px-4 py-4 rounded-full hover:w-48 hover:px-5 hover:py-5 hover:cursor-pointer hover:border-green-500 hover:duration-700"
            src={adminImage}
            alt=""
          />
        </Link>
      </div>
      <div className="px-10 mt-10">{links}</div>
    </div>
  );
};

export default AdminNav;
