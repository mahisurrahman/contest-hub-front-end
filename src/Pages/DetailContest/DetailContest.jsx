/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import contestDetailsImage from "../../assets/img2.jpg";
import Buttton from "../../Components/Button/Buttton";
import { useEffect, useState } from "react";
import LoadingComp from "../../Components/LoadingComp/LoadingComp";
import { Helmet } from "react-helmet-async";

const DetailContest = () => {
    const contestss = useLoaderData();
    const [loading, setLoading] = useState(false);
    const contestDetails = contestss.data;

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

    const handleRegister = () =>{

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
            <h1 className="mb-4 text-md font-bold uppercase">Creator Image: </h1>
              <img
                src={contestDetails.creatorPhoto ? contestDetails.creatorPhoto : "Null"}
                className="w-20 h-20 rounded-full"
                alt=""
              />
            </div>
            <h1 className="my-4 text-md font-bold uppercase">
              Contest Deadline: <span className="font-normal">{contestDetails.contestDeadline}</span>
            </h1>
            <h1 className="mb-4 text-md font-bold uppercase">
              Contest Description: <span className="font-normal">{contestDetails.contestDetails}</span>
            </h1>
            <div>
                <button onClick={handleRegister} className="px-4 py-2 border-2 rounded-lg border-black text-black bg-white hover:text-white hover:border-white hover:bg-black hover:cursor-pointer hover:duration-700 font-bold">Register</button>
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
