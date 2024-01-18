import { Link } from "react-router-dom";

const CustomLogo = () => {
  return (
    <div className="flex md:flex-col gap-5 md:gap-0 items-center text-center">
     <Link to='/'><h1 className="font-font-rubik text-3xl font-bold hover:text-green-600 hover:cursor-pointer hover:duration-700">Contest Hub</h1></Link>
      <p className="font-font-dancing font-bold">Developers Meet Innovation</p>
    </div>
  );
};

export default CustomLogo;
