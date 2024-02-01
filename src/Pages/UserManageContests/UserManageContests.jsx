import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import { Fade } from "react-awesome-reveal";

const UserManageContests = () => {
  const { user } = useContext(AuthContext);

  
  return (
    <>
      <Fade cascade damping={0.1}>
        <Helmet>
          <title>Contest Hub | {user?.displayName} Winned</title>
        </Helmet>
        <div className="text-white font-font-poppins">
          <h1 className="text-2xl font-bold underline uppercase tracking-widest">
            Winned Contest List
          </h1>
          <div className="mt-10 px-4 py-2 border-2 rounded-lg border-white ">
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
                  {/* <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold">None</div>
                          <div className="text-sm opacity-50">
                          None
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                    None
                      <br />
                      <span className="badge badge-ghost badge-sm">
                      None
                      </span>
                    </td>
                    <td> None</td>
                    <td>None</td>
                    <th>
                      <button className="bg-yellow-500 px-4 py-2 rounded-lg text-black hover:bg-white hover:cursor-pointer hover:duration-700">
                        Contest Details
                      </button>
                    </th>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default UserManageContests;
