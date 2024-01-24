import contestImage from "../../assets/img1.jpg";
import contestCreatorImage from "../../assets/img2.jpg";
import { VscCircleLargeFilled } from "react-icons/vsc";

const ContestsCard = () => {
  return (
    <div className="flex flex-col items-start border-2 rounded-lg">
      <div className="py-2 px-4 flex items-center justify-between gap-4 w-full">
        <div className="flex gap-2 items-center">
          <img src={contestCreatorImage} className="w-14 rounded-full" alt="" />
          <div className="font-font-poppins">
            <h1 className="text-xl">Contest Name</h1>
            <h1 className="text-sm">Creator Name</h1>
          </div>
        </div>
        <div className="">
          <VscCircleLargeFilled className="text-[#04FF10]"></VscCircleLargeFilled>
        </div>
      </div>
      <div className="w-full">
        <img src={contestImage} className="w-full h-40 object-cover" alt="" />
      </div>
      <div className="w-full py-4 px-4 font-font-poppins">
        <h1 className="text-sm font-normal">
          Participation Count: <span>{}</span>
        </h1>
        <h1 className="text-md font-normal mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, alias!
          Lorem ipsum dolor
        </h1>
      </div>
      <div className="w-full px-4 py-2">
        <button className="px-4 py-2 border-2 rounded-lg font-font-poppins hover:border-[#04FF10] hover:text-[#04FF10] hover:bg-black hover:cursor-pointer hover:duration-700">See Details</button>
      </div>
    </div>
  );
};

export default ContestsCard;
