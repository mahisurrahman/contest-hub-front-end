
import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import axiosSecure from "../../API";

const AddContest = () => {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);

  const handleAddContest = (event)=>{
    event.preventDefault();
    const form = event.target;
    const contestName = form.contestName.value || null;
    const contestCategory = form.contestCategory.value || null;
    const contestCost = form.contestCost.value || null;
    const contestWinningPrize = form.contestWinningPrize.value || null;
    const contestPhoto = form.contestPhoto.value || null;
    const contestDeadline = form.contestDeadline.value || null;
    const contestDetails = form.contestDetails.value || null;
    const creatorName = user.displayName;
    const creatorEmail = user.email;

    const contestInfo = {
      creatorEmail,
      creatorName,
      contestName,
      contestCategory,
      contestCost,
      contestWinningPrize,
      contestPhoto,
      contestDeadline,
      contestDetails,
    }
    // console.log(contestInfo);
    axiosSecure.post('/contests', contestInfo)
    .then(res=>{
      console.log(res);
      if(res.data.insertedId){
        Swal.fire('Successfully Added the Contest');
        navigate('/contest-creator');
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  return (
    <Fade cascade damping={0.1}>
      <div className="text-white rounded-lg font-font-poppins px-4 py-2">
        <Helmet>
          <title>Contest Hub | Add Contest</title>
        </Helmet>
        <div>
          <h1 className="text-2xl font-bold tracking-widest underline">
            Add Contest...
          </h1>
        </div>
        <div className="py-2 my-2">
          <form onSubmit={handleAddContest} className="py-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="my-2">
                <label htmlFor="contestName">Contest Name</label>
                <input
                  type="text"
                  name="contestName"
                  placeholder="Contest Name"
                  className="text-black w-full px-4 py-2  rounded-lg"
                />
              </div>
              <div className="my-2 flex flex-col">
                <label htmlFor="contestCategory">Select Contest Category</label>
                <select
                  className="text-black px-4 py-2 rounded-lg"
                  name="contestCategory"
                >
                  <option value="Front-End-Experts">Front End Experts</option>
                  <option value="Coding-Challenges">Coding Challenges</option>
                  <option value="JS-Challenges">JS Challenges</option>
                  <option value="WordPress">WordPress</option>
                  <option value="Full-Stacker">Full Stacker</option>
                  <option value="Youtube-Thumbnailers">
                    Youtube Thumbnailers
                  </option>
                  <option value="Facebook-Covers">Facebook Covers</option>
                  <option value="Bug-Solvers">Bug Solvers</option>
                </select>
              </div>
              <div className="my-2">
                <label htmlFor="contestCost">Contest Purchasing Price</label>
                <input
                  type="number"
                  name="contestCost"
                  placeholder="Contest Cost $"
                  className="text-black w-full px-4 py-2 rounded-lg"
                />
              </div>
              <div className="my-2">
                <label htmlFor="contestWinningPrize">
                  Contest Winning Prize
                </label>
                <input
                  type="number"
                  name="contestWinningPrize"
                  placeholder="Contest Winning Prize $"
                  className="text-black w-full px-4 py-2 rounded-lg"
                />
              </div>
              <div className="my-2">
                <label htmlFor="contestPhoto">Contest Photo URL</label>
                <input
                  type="text"
                  name="contestPhoto"
                  placeholder="Photo URL"
                  className="text-black w-full px-4 py-2 rounded-lg"
                />
              </div>
              <div className="my-2">
                <label htmlFor="contestDeadline">Contest Deadline</label>
                <input
                  type="date"
                  name="contestDeadline"
                  placeholder="Contest Deadline"
                  className="text-black w-full px-4 py-2 rounded-lg"
                />
              </div>
            </div>
            <div className="w-full mt-6">
              <label htmlFor="contestDetails">Contest Details</label>
              <textarea
                type="text"
                name="contestDetails"
                placeholder="Elaborate the Contest's Context "
                className="text-black w-full px-4 py-2 rounded-lg"
                rows="10"
              />
            </div>
            <div className="w-full mt-2">
                <input className="w-full text-center py-2 hover:bg-white hover:text-black text-2xl font-bold rounded-lg hover:cursor-pointer text-white bg-black border-2 border-white border-rounded-lg hover:duration-700" type="submit" value="Add Contest" />
            </div>
          </form>
        </div>
      </div>
    </Fade>
  );
};

export default AddContest;
