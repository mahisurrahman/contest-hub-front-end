import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
  return (
    <Fade cascade damping={0.1}>
      <div className="">
        <Helmet>
          <title>Contest Hub | Admin Home</title>
        </Helmet>
        <h1>This is the Admin Home Page</h1>
      </div>
    </Fade>
  );
};

export default AdminHome;
