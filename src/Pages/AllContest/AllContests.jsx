import { Helmet } from "react-helmet-async";


const AllContests = () => {
  return (
    <div className="px-4 py-4 border-2 rounded-lg mt-2">
      <Helmet>
        <title>Contest Hub | Contests</title>
      </Helmet>
      <div className="flex flex-col items-center w-10/12 md:w-6/12 mx-auto text-center mt-4">
        <h1 className="font-font-rubik text-3xl md:text-7xl uppercase">
          Oye Coder?
        </h1>
        <p className="font-font-dancing text-xl md:text-4xl">
          Dont Dodge Any Constests !!!
        </p>
      </div>
      <div className="mt-4 border-2 rounded-lg px-4 py-4">
        <div className="flex gap-4 justify-between items-center text-sm font-font-poppins font-normal">
            <h1>All Contest</h1>
            <h1>Website Designs</h1>
            <h1>Coding Challenges</h1>
            <h1>JS Challenges</h1>
            <h1>WordPress</h1>
            <h1>Full Stacker</h1>
            <h1>Youtube Thumbnailers</h1>
            <h1>Facebook Covers</h1>
            <h1>Bug Solvers</h1>
        </div>
      </div>
    </div>
  );
};

export default AllContests;
