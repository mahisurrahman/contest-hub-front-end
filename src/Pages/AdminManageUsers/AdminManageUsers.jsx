
import { Helmet } from "react-helmet-async";
import axiosSecure from "../../API";
import UseUser from "../../Hooks/UseUser";
import Swal from "sweetalert2";

const AdminManageUsers = () => {
  const [users, refetch] = UseUser();

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
        axiosSecure.delete(`/users/${id}`).then((res) => {
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

  // const [userDetails, setUserDetails] = useState([]);

  // useEffect(()=>{
  //   axiosSecure.get('/users')
  //   .then(res=>{
  //     setUserDetails(res.data)
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // },[])

  return (
    <div>
      <Helmet>
        <title>Contest Hub | Admin Manage Users</title>
      </Helmet>
      <div className="mt-10 ml-10 text-white">
        <h1 className="font-font-roboto-slab text-2xl font-bold uppercase underline">{`Manage Users ...`}</h1>
        <div className="mt-10">
          <div className="overflow-x-auto border-2 rounded-lg">
            <table className="table">
              {/* head */}
              <thead className="text-white">
                <tr>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>User Password</th>
                  <th>Remove?</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map(user=> <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <th>
                      <button onClick={()=>handleDelete(user._id)} className="bg-red-500 px-4 py-2 rounded-lg text-black hover:bg-white hover:cursor-pointer hover:duration-700">
                        Remove The User
                      </button>
                    </th>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminManageUsers;
