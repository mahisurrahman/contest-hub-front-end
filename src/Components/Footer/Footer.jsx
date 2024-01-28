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
          <Link className="flex items-center gap-2 link link-hover text-sm leading-6">
            <MdControlPoint />
            Website Designs
          </Link>
          <Link className="flex items-center gap-2 link link-hover text-sm leading-6">
            <MdControlPoint />
            Coding Challenge
          </Link>
          <Link className="flex items-center gap-2 link link-hover text-sm leading-6">
            <MdControlPoint />
            Javascript Challenges
          </Link>
          <Link className="flex items-center gap-2 link link-hover text-sm leading-6">
            <MdControlPoint />
            WordPress Enthusiasts
          </Link>
          <Link className="flex items-center gap-2 link link-hover text-sm leading-6">
            <MdControlPoint />
            Full Stack Developer
          </Link>
          <Link className="flex items-center gap-2 link link-hover text-sm leading-6">
            <MdControlPoint />
            Youtube Thumbnailers
          </Link>
          <Link className="flex items-center gap-2 link link-hover text-sm leading-6">
            <MdControlPoint />
            Facebook Cover Stylists
          </Link>
          <Link className="flex items-center gap-2 link link-hover text-sm leading-6">
            <MdControlPoint />
            Bug Solvers
          </Link>
        </div>
        <div className="flex flex-col items-start font-font-poppins">
          <header className="footer-title text-[#04FF10]">Navigations</header>
          <Link to="/">
            <Link className="link link-hover">Home</Link>
          </Link>
          <Link to="about">
            <Link className="link link-hover">About us</Link>
          </Link>
          <Link to="contact">
            <Link className="link link-hover">Contact</Link>
          </Link>
          <Link to="blog">
            <Link className="link link-hover">Blog</Link>
          </Link>
          <Link to="all-contests">
            <Link className="link link-hover">All Contests</Link>
          </Link>
          <Link to="/login">
            <Link className="link link-hover">Login</Link>
          </Link>
          <Link to="/signup">
            <Link className="link link-hover">Sign-Up</Link>
          </Link>
        </div>
        <div className="hidden md:flex flex-col items-start font-font-poppins">
          <header className="footer-title text-[#04FF10]">Legal</header>
          <Link to="error-page">
            <Link className="link link-hover">Terms of use</Link>
          </Link>
          <Link to="error-page">
            <Link className="link link-hover">Privacy policy</Link>
          </Link>
          <Link to="error-page">
            <Link className="link link-hover">Cookie policy</Link>
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
