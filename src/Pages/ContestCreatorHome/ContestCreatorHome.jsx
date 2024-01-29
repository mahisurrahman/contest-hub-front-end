import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";


const ContestCreatorHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <Fade cascade damping={0.1}>
      <div className="text-white rounded-lg font-font-poppins px-4 py-2">
        <Helmet>
          <title>{`Contest Hub | ${user.displayName} Home`}</title>
        </Helmet>
        <div className="">
        <h1 className="text-4xl font-bold tracking-widest underline">{`${user.displayName}'s Home...`}</h1>
        </div>
        <div className="mt-10 border-2 rounded-lg px-4 py-2 flex flex-col gap-4">
            <h1 className="font-bold text-xl ">Name : <span className="font-light">{user.displayName}</span></h1>
            <h1 className="font-bold text-xl ">Email : <span className="font-light">{user.email}</span></h1>
            <h1 className="font-bold text-xl ">Account Created : <span className="font-light">{user.metadata.creationTime}</span></h1>
            <h1 className="font-bold text-xl ">{`Contest's Created`} : <span className="font-light"> </span></h1>
            <img src={user.photoURL} alt="" />
        </div>
      </div>
    </Fade>
    );
};

export default ContestCreatorHome;