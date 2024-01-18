import bannerImage from "../../assets/img4.jpg";
import { Link } from "react-router-dom";
import "./Banner.css";
import { DiAndroid } from "react-icons/di";
import { DiApple } from "react-icons/di";
import { DiChrome } from "react-icons/di";
import { DiCodepen } from "react-icons/di";
import { DiGit } from "react-icons/di";

const Banner = () => {
  return (
    <div className="h-screen rounded-md mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left items-center justify-between">
        <div className="flex flex-col items-center md:items-start justify-center pl-2 md:pl-10 ">
          <h1 className="text-6xl md:text-8xl font-font-dancing font-bold">
            Hey Coders !!!{" "}
          </h1>
          <h1 className="font-font-roboto-slab text-3xl md:text-4xl">
            Welcome To{" "}
            <span className="font-bold font-font-rubik">Contest Hub ...</span>
          </h1>
          <p className="font-font-poppins text-lg md:text-md my-2">
            Discover thrilling competitions on our website. <br /> From art to
            sports, compete, showcase your skills, <br /> and win exciting
            prizes.
          </p>
            <div className="flex items-center gap-10">
              <button className="font-bold px-2 py-1 border-2 rounded-md hover:bg-gray-300 border-black text-black hover:cursor-pointer hover:border-gray-300 hover:duration-700">
                Join now!!
              </button>
            </div>
            <div className="flex items-center gap-5 mt-2">
              <h1 className="font-font-poppins text-xl font-bold italic">
                Socials:{" "}
              </h1>
              <div className="flex gap-4 text-3xl text-black">
                <DiAndroid className="hover:text-gray-800 hover:duration=700"></DiAndroid>
                <DiApple className="hover:text-gray-800 hover:duration=700"></DiApple>
                <DiChrome className="hover:text-gray-800 hover:duration=700"></DiChrome>
                <DiCodepen className="hover:text-gray-800 hover:duration=700"></DiCodepen>
                <DiGit className="hover:text-gray-800 hover:duration=700"></DiGit>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2">
                <input className="px-4 py-1 border border-black rounded-md w-full" type="text" name="search" placeholder="Search By Category"/>
                <input className="px-4 py-1 border-2 bg-black text-white rounded-md font-bold tracking-widest hover:text-black hover:bg-white hover:border-black hover:cursor-pointer hover:duration-700" type="submit" name="search" id="" />
            </div>
        </div>
        <div className="hidden md:block">
          <img className="object-fit" src={bannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
