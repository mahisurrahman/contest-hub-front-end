import { Outlet } from "react-router-dom";
import AdminNav from "../Components/AdminNav/AdminNav";
import { Fade } from "react-awesome-reveal";

const AdminDash = () => {
  return (
    <Fade cascade damping={0.1}>
      <div>
        <div className="grid grid-cols-12 gap-2 min-h-screen bg-black pr-10">
          <div className="col-span-3">
            <AdminNav></AdminNav>
          </div>
          <div className="col-span-9">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AdminDash;
