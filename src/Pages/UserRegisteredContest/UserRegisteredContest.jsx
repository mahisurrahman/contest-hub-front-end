import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import UseCart from "../../Hooks/UseCart";
import Swal from "sweetalert2";
import axiosSecure from "../../API";
import { Link } from "react-router-dom";

const UserRegisteredContest = () => {
  const { user } = useContext(AuthContext);
  const [cart, refetch] = UseCart();

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
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
  };

  return (
    <>
      <Fade cascade damping={0.1}>
        <Helmet>
          <title>Contest Hub | {user.displayName} Winned</title>
        </Helmet>
        <div className="text-white font-font-poppins">
          <h1 className="text-2xl font-bold underline uppercase tracking-widest">
            Registered Contest List
          </h1>
          <div className="mt-10">
            <Link to="/all-contests"><button className="px-4 py-2 rounded-lg text-white font-font-poppins font-bold tracking-widest bg-blue-500 hover:bg-green-500 hover:text-black hover:cursor-pointer hover:duration-700">Add Contest</button></Link>
          </div>
          <div className="mt-2 px-4 py-2 border-2 rounded-lg border-white ">
            <div className="overflow-x-auto ">
              <table className="table">
                {/* head */}
                <thead className="text-white">
                  <tr>
                    <th>Contest Creator Details</th>
                    <th>Contest Name</th>
                    <th>Contest Price</th>
                    <th>Winning Prize</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {cart.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="font-bold">
                              {item?.contestCreatorName
                                ? item.contestCreatorName
                                : "None"}
                            </div>
                            <div className="text-sm opacity-50">
                              {item?.contestCreatorEmail
                                ? item.contestCreatorEmail
                                : "None"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {item?.contestName ? item.contestName : "None"}
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          {item?.contestCategory
                            ? item.contestCategory
                            : "None"}
                        </span>
                      </td>
                      <td> {item?.contestCost ? item.contestCost : "None"}$</td>
                      <td>
                        {item?.contestWinningPrize
                          ? item.contestWinningPrize
                          : "None"}
                        $
                      </td>
                      <th>
                        <div className="flex gap-2">
                          <button className="bg-green-500 px-2 py-1 rounded-lg text-black hover:bg-white hover:cursor-pointer hover:duration-700">
                            Confirm
                          </button>
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="bg-red-500 px-2 py-1 rounded-lg text-black hover:bg-white hover:cursor-pointer hover:duration-700"
                          >
                            Remove
                          </button>
                        </div>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default UserRegisteredContest;
