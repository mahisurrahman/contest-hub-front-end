import { Link } from "react-router-dom";


const FeaturedContestCard = ({ contest }) => {
  const truncateDetails = (details, wordCount) => {
    const words = details.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + "...";
    }
  };
  return (
    <div className="px-2 py-4 border-2 rounded-xl">
      <div className="flex flex-col gap-4 items-center mb-4">
        <img
          src={contest.contestPhoto}
          className="w-60 h-40 rounded-lg"
          alt=""
        />
        <h1 className="font-font-roboto-slab font-bold text-sm">
          {contest.contestName}
        </h1>
      </div>
      <div className="font-font-poppins text-center flex flex-col">
        <p className="text-xs mb-2">
          {truncateDetails(contest.contestDetails, 12)}
        </p>
        <p className="text-sm font-bold">
          Attempted Count:{" "}
          <span className="font-light">
            {contest.contestAttempted ? contest.contestAttempted : "0"}
          </span>
        </p>
        <Link to={`/all-contests/${contest?._id}`}>
          <button className="px-4 py-2 border-2 rounded-lg font-font-poppins hover:border-[#04FF10] hover:text-[#04FF10] hover:bg-black hover:cursor-pointer hover:duration-700">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedContestCard;
