import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Main = () => {
    return (
        <div  className="max-w-screen-xl mx-2 md:mx-auto text-black font-font-roboto-slab bg-white px-5 md:px-10 pt-0 md:pt-5 pb-0 md:pb-2 border-2 my-2 rounded-xl">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;