import { Helmet } from "react-helmet-async";
import CustomLogo from "../../Components/CustomLogo/CustomLogo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { TbFidgetSpinner } from "react-icons/tb";
import axiosSecure from "../../API";
import { getToken } from "../../API/auth";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const {register, handleSubmit, formState:{errors}} = useForm();
  const {logInUser, googleLogin, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname ||"/";

  // if(loading){
  //   return <LoadingComp></LoadingComp>
  // }
  const onSubmit = values =>{
    const email = values.email;
    const password = values.password;
    logInUser(email, password)
    .then(() =>{
      getToken(email);
      navigate(from, {replace: true});
      Swal.fire('Successfully Logged in');
    })
  };

  const handleGoogleSignIn = async ()=>{
    try{
      googleLogin()
    .then((result)=>{
      axiosSecure.post('/users', result?.user);
      getToken(result?.user?.email);
      navigate(from, {replace: true});
      Swal.fire('Successfully Logged In');
    })
    }catch(err){
      console.log(err);
    }
  };


  return (
    <Fade cascade damping={0.1}>
      <div className="my-10 md:my-10 py-5 md:py-10 border rounded-2xl w-full md:w-6/12 mx-auto bg-black text-white">
        <Helmet>
          <title>Contest Hub | Login</title>
        </Helmet>
        <CustomLogo></CustomLogo>
        <div className="divider divider-warning">
          <h1 className="font-font-rubik text-4xl md:text-4xl uppercase">
            Sign UP Here
          </h1>
        </div>
        <div className="w-10/12 md:w-7/12 mx-auto my-5 md:my-20">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("email", {required:true})}
              />
              {errors.email?.type ==='required' && <span className="text-sm text-red-600">Email is Required</span>}
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
                {...register('password',{required:true})}
              />
              {errors.password?.type === 'required'&& <span className="text-sm text-red-600">Password is Required</span>}
            </div>
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="px-10 py-2 border-2 border-dotted rounded-md font-font-rubik text-xl tracking-widest font-bold uppercase hover:bg-white hover:text-black hover:cursor-pointer hover:duration-700"
              >{loading ? <TbFidgetSpinner className="animate-spin m-auto"></TbFidgetSpinner> : "Login"}</button>
            </div>
          </form>
          <div className="mt-10 flex items-center justify-between">
            <div>
              <h1 className="font-font-robot-slab">
                New to{" "}
                <span className="font-font-rubik tracking-widest">
                  Contest Hub
                </span>
                ?
              </h1>
            </div>
            <div>
              <Link to="/signup">
                <button className="font-font-roboto-slab px-2 py-1 underline font-bold text-sm text-yellow-500 hover:text-white hover:duration-700 ">
                  Sign Up Here
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <Link>
              <button onClick={handleGoogleSignIn} className="px-4 py-1 font-font-poppins rounded-md bg-yellow-500 text-black font-bold hover:border-black hover:text-black hover:bg-white hover:cursor-pointer hover:duration-700">
                Sign Up With Google
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Login;
