import { Fade } from "react-awesome-reveal";
import UserNav from "../Components/UserNav/UserNav";
import { Outlet } from "react-router-dom";

const UserDash = () => {
  return (
    <Fade cascade damping={0.1}>
      <div>
        <div className="grid grid-cols-12 gap-2 min-h-screen">
          <div className="col-span-3">
            <UserNav></UserNav>
          </div>
          <div className="col-span-9">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default UserDash;
