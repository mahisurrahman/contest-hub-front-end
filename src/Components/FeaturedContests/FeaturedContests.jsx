import { Link } from "react-router-dom";
import FeaturedContestCard from "../FeaturedContestCard/FeaturedContestCard";
import TitleSubTitle from "../TitleSubtitle/TitleSubTitle";

const FeaturedContests = () => {
    return (
        <div className="min-h-screen my-4 px-4 md:px-4 py-4 md:py-6 border-2 rounded-lg mx-auto">
            <div className=" mb-2 md:mb-10">
                <TitleSubTitle title={'Featured Contest'} subTitle={'Our Top-Most Contest Lists'}></TitleSubTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
                <FeaturedContestCard></FeaturedContestCard>
                <FeaturedContestCard></FeaturedContestCard>
                <FeaturedContestCard></FeaturedContestCard>
                <FeaturedContestCard></FeaturedContestCard>
                <FeaturedContestCard></FeaturedContestCard>
            </div>
            <div className="text-center mb-5">
                <Link to="/all-contests"><button className="px-6 py-2 font-font-poppins font-bold rounded-lg bg-black text-white hover:border-2 hover:border-black hover:text-black hover:bg-white hover:cursor-pointer hover:duration-700 ">Show Call Contests</button></Link>
            </div>
        </div>
    );
};

export default FeaturedContests;