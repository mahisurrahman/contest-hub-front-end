import { Fade } from "react-awesome-reveal";
import { Outlet } from "react-router-dom";
import ContestCreatorNav from "../Components/ContestCreatorNav/ContestCreatorNav";


const ContestCreatorDash = () => {
    return (
        <Fade cascade damping={0.1}>
        <div>
          <div className="grid grid-cols-12 gap-2 h-full bg-black">
            <div className="col-span-3">
              <ContestCreatorNav></ContestCreatorNav>
            </div>
            <div className="col-span-9 mx-2 my-2 px-4 py-4 border-2 rounded-lg">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </Fade>
    );
};

export default ContestCreatorDash;