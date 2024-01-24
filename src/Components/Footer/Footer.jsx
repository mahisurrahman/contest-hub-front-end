import CustomLogo from "../CustomLogo/CustomLogo";
import {
  FaFacebook,
  FaGit,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import { MdControlPoint } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-2 rounded-lg mt-4 bg-black text-white px-4 py-4">
      <footer className="bg-black grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 px-2 md:px-4 py-5">
        <div className="flex flex-col items-start font-font-poppins">
          <header className="footer-title text-[#04FF10]">Contests</header>
          <a className="flex items-center gap-2 link link-hover text-sm leading-6">
            <MdControlPoint />
            Website Designs
          </a>
          <a className="flex items-center gap-2 link link-hover text-sm leading-6">
            <MdControlPoint />
            Coding Challenge
          </a>
          <a className="flex items-center gap-2 link link-hover text-sm leading-6">
            <MdControlPoint />
            Javascript Challenges
          </a>
          <a className="flex items-center gap-2 link link-hover text-sm leading-6">
            <MdControlPoint />
            WordPress Enthusiasts
          </a>
          <a className="flex items-center gap-2 link link-hover text-sm leading-6">
            <MdControlPoint />
            Full Stack Developer
          </a>
          <a className="flex items-center gap-2 link link-hover text-sm leading-6">
            <MdControlPoint />
            Youtube Thumbnailers
          </a>
          <a className="flex items-center gap-2 link link-hover text-sm leading-6">
            <MdControlPoint />
            Facebook Cover Stylists
          </a>
          <a className="flex items-center gap-2 link link-hover text-sm leading-6">
            <MdControlPoint />
            Bug Solvers
          </a>
        </div>
        <div className="flex flex-col items-start font-font-poppins">
          <header className="footer-title text-[#04FF10]">Navigations</header>
          <Link to="/">
            <a className="link link-hover">Home</a>
          </Link>
          <Link to="about">
            <a className="link link-hover">About us</a>
          </Link>
          <Link to="contact">
            <a className="link link-hover">Contact</a>
          </Link>
          <Link to="blog">
            <a className="link link-hover">Blog</a>
          </Link>
          <Link to="all-contests">
            <a className="link link-hover">All Contests</a>
          </Link>
          <Link to="/login">
            <a className="link link-hover">Login</a>
          </Link>
          <Link to="/signup">
            <a className="link link-hover">Sign-Up</a>
          </Link>
        </div>
        <div className="hidden md:flex flex-col items-start font-font-poppins">
          <header className="footer-title text-[#04FF10]">Legal</header>
          <Link to="error-page">
            <a className="link link-hover">Terms of use</a>
          </Link>
          <Link to="error-page">
            <a className="link link-hover">Privacy policy</a>
          </Link>
          <Link to="error-page">
            <a className="link link-hover">Cookie policy</a>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <CustomLogo></CustomLogo>
          <div className="flex gap-4 text-3xl text-white mt-4">
            <FaFacebook className="hover:text-gray-800 hover:duration=700 text-[#04FF10]"></FaFacebook>
            <FaInstagram className="hover:text-gray-800 hover:duration=700 text-[#04FF10]"></FaInstagram>
            <FaTwitter className="hover:text-gray-800 hover:duration=700 text-[#04FF10]"></FaTwitter>
            <FaTwitch className="hover:text-gray-800 hover:duration=700 text-[#04FF10]"></FaTwitch>
            <FaGit className="hover:text-gray-800 hover:duration=700 text-[#04FF10]"></FaGit>
          </div>
          <div className="mt-10 w-full flex flex-col items-center">
            <input
              className="font-font-poppins w-11/12 md:w-10/12 px-2 py-2 md:py-1 rounded-lg placeholder:text-sm text-black"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input className="w-10/12 text-lg font-font-poppins px-4 py-1 border-2 text-[#04FF10] border-[#04FF10] rounded-lg mt-4 md:mt-2 hover:bg-[#04FF10] hover:text-black hover:border-black hover:cursor-pointer hover:duration-700" type="submit" value="Subscribe" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
