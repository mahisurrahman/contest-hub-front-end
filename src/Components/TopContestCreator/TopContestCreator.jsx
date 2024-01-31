/* eslint-disable react/no-unescaped-entities */
import TitleSubTitle from "../TitleSubtitle/TitleSubTitle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TopContestCreator.css";
import { GiCrownedSkull } from "react-icons/gi";
import { DiLinux } from "react-icons/di";
import { Link } from "react-router-dom";
import Buttton from "../Button/Buttton";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const TopContestCreator = () => {
  const {user} = useContext(AuthContext);

  return (
    <div className="border-2 rounded-lg py-5 md:py-10">
      <div>
        <TitleSubTitle
          title={"Best Picks"}
          subTitle={"Of Our Contest Creators"}
        ></TitleSubTitle>

        <div className="mx-4 my-2 border-2 rounded-lg px-4 py-4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-2">
          <div className="flex flex-col items-center md:items-start font-font-poppins justify-center md:justify-end px-4">
            <GiCrownedSkull className="text-center text-9xl mb-5 border-2 px-2 py-2 rounded-full"></GiCrownedSkull>
            <h1 className="text-2xl font-bold uppercase">
              What Makes Our Creators <br /> 'The Best'?
            </h1>
            <p className="font-normal mt-2 border-l-2 pl-4 border-black">
              Contest creators conceive engaging challenges, crafting rules and
              criteria to inspire participants, fostering creativity, and
              selecting deserving winners judiciously.
            </p>
          </div>
          {
            user ? <div className="flex flex-col items-center justify-center">
            <img className="rounded-full" src={user.photoURL ? user.photoURL : 'null' } />
            <h1 className="text-2xl font-bold mt-5">{user?.displayName}</h1>
          </div> : <div className="flex justify-center items-center"><h1 className="text-2xl font-bold font-font-poppins px-4 py-2 border-2 rounded-lg">No Top Contest Creator Yet</h1></div>
          }
          <div className="flex flex-col items-center md:items-end text-right font-font-poppins justify-center md:justify-end px-4">
            <h1 className="uppercase text-2xl font-bold">
              You Wanna Be A <br /> Contest Creator Too?
            </h1>
            <p className="font-normal mt-2 border-r-2 pr-4 border-black">
              Deciding to join as a contest creator involves shaping imaginative
              competitions, setting guidelines, and influencing outcomes,
              providing an enriching experience.
            </p>
            <div className="mt-4">
              <Link to="/signup">
                <Buttton title={"Join Now"}></Buttton>
              </Link>
            </div>
            <DiLinux className="text-center text-9xl mt-5 border-2 px-2 py-2 rounded-full"></DiLinux>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContestCreator;
