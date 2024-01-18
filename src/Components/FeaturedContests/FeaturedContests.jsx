import { Link } from "react-router-dom";
import FeaturedContestCard from "../FeaturedContestCard/FeaturedContestCard";
import TitleSubTitle from "../TitleSubtitle/TitleSubTitle";

const FeaturedContests = () => {
    return (
        <div className="mt-4 px-1 py-1 border-2 rounded-lg mx-auto">
            <div className="mt-20 mb-10">
                <TitleSubTitle></TitleSubTitle>
            </div>
            <div className="grid grid-cols-5 gap-4 mb-10">
                <FeaturedContestCard></FeaturedContestCard>
                <FeaturedContestCard></FeaturedContestCard>
                <FeaturedContestCard></FeaturedContestCard>
                <FeaturedContestCard></FeaturedContestCard>
                <FeaturedContestCard></FeaturedContestCard>
            </div>
            <div>
                <Link to="/all-contests"><button>Show Call Contests</button></Link>
            </div>
        </div>
    );
};

export default FeaturedContests;