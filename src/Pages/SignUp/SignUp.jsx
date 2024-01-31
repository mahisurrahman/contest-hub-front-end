import { Helmet } from "react-helmet-async";
import CustomLogo from "../../Components/CustomLogo/CustomLogo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import axiosSecure from "../../API";
import { getToken } from "../../API/auth";
import { TbFidgetSpinner } from "react-icons/tb";

const SignUp = () => {
  const { createUser, googleLogin, loading, updateUserInfo } =
    useContext(AuthContext);
  const [authErrors, setAuthErrors] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // if (loading) {
  //   return <LoadingComp></LoadingComp>;
  // }

  const onSubmit = async (values) => {
    const email = values.email; //Email Taken
    const name = values.name; // Name Taken
    const password = values.password; //Passowrd Taken
    const image = values.photo;//Image Taken
    // const imageData = values.photo[0]; //Image data Taken from Form
    // const formData = new FormData(); //Breaking the Image Data to Push to IMG BB
    // formData.append("image", imageData); //Added the Image Data to the IMG BB
    // const { data } = await axios.post(
    //   `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_API}`,
    //   formData
    // ); // Pushed the Image Data to IMG BB
    // const image = data.data.display_url; //Final Image URL is Ready

    const userInfo = {
      name: name,
      email: email,
      password: password,
      userImage: image,
      role: "guest",
      status: "verified",
    };

    console.log(userInfo);

    createUser(userInfo.email, userInfo.password)
      .then(() => {
        updateUserInfo(
          userInfo.name,
          userInfo.userImage,
        )
          .then(() => {
            console.log("user Profile Info Updated");
            axiosSecure.post('/users', userInfo);
            getToken(userInfo?.email)
            reset();
            Swal.fire("Successfully Created User");
            navigate(from, { replace: true });
          })
          .catch((err) => {
            console.log(err);
            if (err.message) {
              setAuthErrors(err.message);
            } else {
              setAuthErrors("Unexpected Error Occured, Try Again Later");
            }
          });
      })
      .catch((err) => {
        console.log(err);
        if (err.message) {
          setAuthErrors(err.message);
        } else {
          setAuthErrors("Unexpected Error Occured, Try Again Later");
        }
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      googleLogin().then((result) => {
        axiosSecure.post("/users", result?.user);
        getToken(result?.user?.email);
        navigate(from, { replace: true });
        Swal.fire("Successfully Logged In");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fade cascade damping={0.1}>
      <div className="my-10 md:my-10 py-5 md:py-10 border border-black rounded-2xl w-full md:w-6/12 mx-auto bg-white text-black">
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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <span className="text-sm text-red-700">Name Required</span>
              )}
            </div>
            <div className="flex flex-col mb-2 md:mb-5">
              <label
                htmlFor="photo"
                className="font-font-rubik text-lg md:text-sm font-bold text-black tracking-widest"
              >
                Photo
              </label>
              <input
                className="bg-white font-font-poppins border-2 border-black px-4 py-1 rounded-md placeholder:font-font-dancing placeholder:text-md placeholder:tracking-widest placeholder:font-bold"
                type="text"
                name="photo"
                placeholder="Enter Your Photo URL"
                {...register("photo", { required: true })}
              />
              {errors.photo?.type === "required" && (
                <span className="text-sm text-red-700">Photo Required</span>
              )}
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
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <span className="text-sm text-red-700">Email Required</span>
              )}
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
                {...register("password", { required: true, minLength: 8 })}
              />
              {errors.password?.type === "minLength" && (
                <span className="text-sm text-red-700">
                  Password Must be Above 8 Characters
                </span>
              )}
              {errors.password?.type === "required" && (
                <span className="text-sm text-red-700">
                  Password is Required
                </span>
              )}
            </div>
            <div className="flex justify-center mt-10">
            <button
                type="submit"
                className="px-10 py-2 border-2 border-dotted rounded-md font-font-rubik text-xl tracking-widest font-bold uppercase hover:cursor-pointer hover:duration-700 border-black hover:bg-black hover:text-white hover:border-white"
              >{loading ? <TbFidgetSpinner className="animate-spin m-auto"></TbFidgetSpinner> : "Sign Up"}</button>
            </div>
            {authErrors && (
              <div className="text-sm text-red-700 mb-2">{authErrors}</div>
            )}
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
              <button
                onClick={handleGoogleSignIn}
                className="px-4 py-1 font-font-poppins border-2 rounded-md bg-green-900 font-bold text-white hover:border-green-900 hover:text-green-900 hover:bg-white hover:cursor-pointer hover:duration-700"
              >
                Sign Up With Google
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default SignUp;
