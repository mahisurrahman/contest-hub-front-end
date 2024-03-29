/* eslint-disable no-unused-vars */
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import contestDetailsImage from "../../assets/img2.jpg";
import Buttton from "../../Components/Button/Buttton";
import { useContext, useEffect, useState } from "react";
import LoadingComp from "../../Components/LoadingComp/LoadingComp";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import axiosSecure from "../../API";
import UseCart from "../../Hooks/UseCart";

const DetailContest = () => {
    const {user} = useContext(AuthContext);
    const contestss = useLoaderData();
    const [loading, setLoading] = useState(false);
    const contestDetails = contestss.data;
    const navigate = useNavigate();
    const [cart,refetch] = UseCart();

    // useEffect(()=>{
    //     setLoading(true);
    //     fetch('')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const singleContest = data.find(contest => contest._id === contestDetails._id);
    //         setSpecficContest(singleContest);
    //         setLoading(false);
    //     })
    //     .catch(err=> console.log(err));
    // },[contestDetails])

    const handleRegister = (contestDetails) =>{
      if(user && user.email){
        const cartItem = {
          cartContestID: contestDetails._id,
          cartUserEmail: user.email,
          cartUserName: user.displayName,
          cartUserPhoto: user.photoURL,
          contestCreatorName: contestDetails.creatorName,
          contestCreatorEmail: contestDetails.creatorEmail, 
          contestName: contestDetails.contestName,
          contestCategory: contestDetails.contestCategory,
          contestCost: contestDetails.contestCost,
          contestWinningPrize: contestDetails.contestWinningPrize,
          contestPhoto: contestDetails.contestPhoto,
          contestDeadline: contestDetails.contestDeadline,
          contestDetails: contestDetails.contestDetails,
        }
        axiosSecure.post('/carts', cartItem)
        .then(res=>{
          console.log(res.data);
          Swal.fire(`Successfully Registered the ${contestDetails.contestName}`);
          navigate('/all-contests');
          refetch();
        })
        .catch((err)=>{
          console.log(err);
        })
      }else{
        Swal.fire('Please Login');
        navigate('/login');
      }
    }

    if(loading) return <LoadingComp></LoadingComp>
  return (
    <div className="min-h-screen border-2 rounded-lg my-4">
      <Helmet>
        <title>Contest Hub | {}</title>
      </Helmet>
      <div className="grid grid-cols-2 justify-between items-center py-10 px-10 gap-4">
        <div className="px-10 py-10 font-font-poppins border-2 w-full h-full rounded-lg flex flex-col items-start justify-center">
          <div className="py-2 w-full border-l-2 pl-2 border-black">
            <h1 className="mb-4 text-md font-bold uppercase">
              Contest Title: <span className="font-normal">{contestDetails.contestName}</span>
            </h1>
            <h1 className="mb-4 text-md font-bold uppercase">
              Attempted Participants: <span className="font-normal">0</span>
            </h1>
            <h1 className="mb-4 text-md font-bold uppercase">
              Contest Price: <span className="font-normal">{contestDetails.contestCost}</span>
            </h1>
            <h1 className="mb-4 text-md font-bold uppercase">
              Contest Creator Name: <span className="font-normal">{contestDetails.creatorName ? contestDetails.creatorName : "No One"}</span>
            </h1>
            <div>
            </div>
            <h1 className="my-4 text-md font-bold uppercase">
              Contest Deadline: <span className="font-normal">{contestDetails.contestDeadline}</span>
            </h1>
            <h1 className="mb-4 text-md font-bold uppercase">
              Contest Description: <span className="font-normal">{contestDetails.contestDetails}</span>
            </h1>
            <div>
                <button onClick={()=>handleRegister(contestDetails)} className="px-4 py-2 border-2 rounded-lg border-black text-black bg-white hover:text-white hover:border-white hover:bg-black hover:cursor-pointer hover:duration-700 font-bold">Register</button>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full">
            <img
              src={contestDetails.contestPhoto}
              className="w-full h-full rounded-lg object-cover object-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContest;
