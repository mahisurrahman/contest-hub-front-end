import { Helmet } from "react-helmet-async";
import axiosSecure from "../../API";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseContests from "../../Hooks/UseContests";

const AdminManageContests = () => {
  const [contests, refetch] = UseContests();

  const handleDelete = (id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/contests/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        })
      }
    });
  }

  return (
    <div>
      <Helmet>
        <title>Contest Hub | Admin Manage Contests</title>
      </Helmet>
      <div className="mt-10 ml-10 text-white">
        <h1 className="font-font-roboto-slab text-2xl font-bold uppercase underline">{`Manage Contests ...`}</h1>
        <div className="mt-10">
          <div className="overflow-x-auto border-2 rounded-lg">
            <table className="table">
              {/* head */}
              <thead className="text-white">
                <tr>
                  <th>Creator Name</th>
                  <th>Creator Email</th>
                  <th>Contest Name </th>
                  <th>Contest Category</th>
                  <th>Contest Deadline</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {contests.map((contest) => (
                  <tr key={contest._id}>
                    <td>{contest.creatorName}</td>
                    <td>{contest.creatorEmail}</td>
                    <td>{contest.contestName}</td>
                    <td>{contest.contestCategory}</td>
                    <td>
                      {contest.contestDeadline
                        ? contest.contestDeadline
                        : "Null"}
                    </td>
                    <th className="flex gap-2">
                      <button onClick={()=>handleDelete(contest._id)} className="bg-red-500 px-4 py-2 rounded-lg text-black hover:bg-white hover:cursor-pointer hover:duration-700">
                        Remove
                      </button>
                      <Link to={`/all-contests/${contest?._id}`}>
                        <button className="bg-yellow-500 px-4 py-2 rounded-lg text-black hover:bg-white hover:cursor-pointer hover:duration-700">
                          Details
                        </button>
                      </Link>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminManageContests;
