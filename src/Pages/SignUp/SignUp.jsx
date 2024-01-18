import { Helmet } from "react-helmet-async";
import CustomLogo from "../../Components/CustomLogo/CustomLogo";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="my-10 md:my-0 py-5 md:py-10 border border-black rounded-2xl w-full md:w-6/12 mx-auto bg-white text-black">
      <Helmet>
        <title>Contest Hub | Sign-Up</title>
      </Helmet>
      <CustomLogo></CustomLogo>
      <div className="divider divider-success">
        {" "}
        <h1 className="font-font-rubik text-4xl md:text-4xl uppercase">
          Sign UP Here
        </h1>
      </div>
      <div className="w-10/12 md:w-7/12 mx-auto my-5 md:mt-5">
        <form>
          <div className="flex flex-col mb-2 md:mb-5">
            <label
              htmlFor="name"
              className="font-font-rubik text-lg md:text-sm font-bold text-black tracking-widest"
            >
              Name
            </label>
            <input
              className="bg-white font-font-poppins border-2 border-black px-4 py-1 rounded-md placeholder:font-font-dancing placeholder:text-md placeholder:tracking-widest placeholder:font-bold"
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col mb-2 md:mb-5">
            <label
              htmlFor="photo"
              className="font-font-rubik text-lg md:text-sm font-bold text-black tracking-widest"
            >
              Photo URL
            </label>
            <input
              className="bg-white font-font-poppins border-2 border-black px-4 py-1 rounded-md placeholder:font-font-dancing placeholder:text-md placeholder:tracking-widest placeholder:font-bold"
              type="text"
              name="photo"
              placeholder="Enter Your Photo URL"
            />
          </div>
          <div className="flex flex-col mb-2 md:mb-5">
            <label
              htmlFor="email"
              className="font-font-rubik text-lg md:text-sm font-bold text-black tracking-widest"
            >
              Email
            </label>
            <input
              className="bg-white font-font-poppins border-2 border-black px-4 py-1 rounded-md placeholder:font-font-dancing placeholder:text-md placeholder:tracking-widest placeholder:font-bold"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col mb-2 md:mb-5">
            <label
              htmlFor="password"
              className="font-font-rubik text-lg md:text-sm font-bold text-black tracking-widest"
            >
              Password
            </label>
            <input
              className="bg-white font-font-poppins border-2 border-black px-4 py-1 rounded-md placeholder:font-font-dancing placeholder:text-md placeholder:tracking-widest placeholder:font-bold"
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="flex justify-center mt-10">
            <input
              type="submit"
              value="Sign Up"
              className="px-10 py-2 border-2 border-dotted rounded-md font-font-rubik text-xl tracking-widest font-bold uppercase border-black hover:bg-black hover:text-white hover:cursor-pointer hover:duration-700"
            />
          </div>
        </form>
        <div className="mt-10 flex items-center justify-between">
          <div>
            <h1 className="font-font-robot-slab md:text-md">
              Old User of{" "}
              <span className="font-font-rubik tracking-widest font-bold">
                Contest Hub
              </span>
              ?
            </h1>
          </div>
          <div>
            <Link to="/login">
              <button className="font-font-roboto-slab px-2 py-1 underline md:text-lg font-bold text-green-900 hover:text-white hover:duration-700 ">
                Login Here
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <Link>
            <button className="px-4 py-1 font-font-poppins border-2 rounded-md bg-green-900 font-bold text-white hover:border-green-900 hover:text-green-900 hover:bg-white hover:cursor-pointer hover:duration-700">
              Sign Up With Google
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
