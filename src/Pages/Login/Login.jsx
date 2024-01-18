import { Helmet } from "react-helmet-async";
import CustomLogo from "../../Components/CustomLogo/CustomLogo";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="my-10 md:my-0 py-5 md:py-10 border rounded-2xl w-full md:w-6/12 mx-auto bg-black text-white">
      <Helmet>
        <title>Contest Hub | Login</title>
      </Helmet>
      <CustomLogo></CustomLogo>
      <div className="divider divider-warning"> <h1 className="font-font-rubik text-4xl md:text-4xl uppercase">
          Sign UP Here
        </h1></div>
      <div className="w-10/12 md:w-7/12 mx-auto my-5 md:my-20">
        <form>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="font-font-rubik text-lg md:text-sm font-bold text-white tracking-widest"
            >
              Email
            </label>
            <input
              className="bg-black font-font-poppins border-2 px-4 py-2 rounded-md placeholder:font-font-dancing placeholder:text-xl placeholder:tracking-widest placeholder:font-bold"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label
              htmlFor="password"
              className="font-font-rubik text-lg md:text-sm font-bold text-white tracking-widest"
            >
              Password
            </label>
            <input
              className="bg-black font-font-poppins border-2 px-4 py-2 rounded-md placeholder:font-font-dancing placeholder:text-xl placeholder:tracking-widest placeholder:font-bold"
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="flex justify-center mt-10">
            <input
              type="submit"
              value="Login"
              className="px-10 py-2 border-2 border-dotted rounded-md font-font-rubik text-xl tracking-widest font-bold uppercase hover:bg-white hover:text-black hover:cursor-pointer hover:duration-700"
            />
          </div>
        </form>
        <div className="mt-10 flex items-center justify-between">
          <div>
            <h1 className="font-font-robot-slab">
              New to <span className="font-font-rubik tracking-widest">Contest Hub</span>?
            </h1>
          </div>
          <div>
            <Link to="/signup"><button className="font-font-roboto-slab px-2 py-1 underline font-bold text-sm text-yellow-500 hover:text-white hover:duration-700 ">Sign Up Here</button></Link>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <Link>
            <button className="px-4 py-1 font-font-poppins rounded-md bg-yellow-500 text-black font-bold hover:border-black hover:text-black hover:bg-white hover:cursor-pointer hover:duration-700">
              Sign Up With Google
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
