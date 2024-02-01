import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
  return (
    <Fade cascade damping={0.1}>
      <div className="bg-black text-white">
        <Helmet>
          <title>Contest Hub | Admin Home</title>
        </Helmet>
        <div className="mt-10 ml-10 flex justify-between">
          <h1 className="font-font-roboto-slab text-2xl font-bold uppercase underline">{`Hey Admin?`}</h1>
          <h1 className="font-font-roboto-slab text-2xl font-bold uppercase underline">{` What's Up?`}</h1>
        </div>
        <div className="ml-10 mt-10 border-2 rounded-lg px-10 py-10 text-lg font-font-poppins">
            <h1 className="my-2">Name: </h1>
            <h1 className="my-2">Email: </h1>
            <h1 className="my-2">Password: </h1>
            <h1 className="my-2">Image: </h1>
            <img src="" className="w-full h-full" alt="" />
        </div>
      </div>
    </Fade>
  );
};

export default AdminHome;
