/* eslint-disable react/no-unescaped-entities */
import TitleSubTitle from "../TitleSubtitle/TitleSubTitle";
import winnerContest from "../../assets/img3.jpg";
import winnerContest2 from "../../assets/img6.jpg";
import Buttton from "../Button/Buttton";

const AdvertiesMent = () => {
  return (
    <div className="my-4 px-1 py-5 md:py-20 border-2 rounded-lg mx-auto">
      <TitleSubTitle
        title={"Hear What Our"}
        subTitle={"Top Player Says"}
      ></TitleSubTitle>

      <div className="mx-4 my-2 rounded-lg py-4 px-0 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-full px-4 py-4 rounded-lg border-0 md:border-2">
          <div className="col-span-4">
            <div className="grid grid-cols-2 items-center gap-10">
              <div className="col-span-1">
                <img
                  className="rounded-full px-2 py-2 border-2"
                  src={winnerContest}
                  alt=""
                />
              </div>
              <div className="col-span-1">
                <h1 className="font-font-poppins">
                  <span className="font-bold">Cofidence</span> is what Matters
                  the most !!!
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-10">
              <div className="col-span-1">
                <h1 className="font-font-poppins">
                  <span className="font-bold">Action</span> Ensures The
                  Top-Notch Confidence !!!
                </h1>
              </div>
              <div className="col-span-1">
                <img
                  className="rounded-full px-2 py-2 border-2"
                  src={winnerContest2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-8 pl-0 md:pl-20 pr-0 md:pr-10 flex flex-col justify-center items-center md:items-start gap-2 text-center md:text-left mt-4 md:mt-0">
            <h1 className="font-font-dancing text-2xl md:text-4xl font-extrabold">
              Aim For The Output <br /> (Not the Struggles)
            </h1>
            <p className="font-font-poppins text-md md:text-lg font-normal">
              "Contest victor candidly shares triumphs and tribulations,
              inspiring enthusiasts by revealing the unspoken challenges behind
              the coveted victory. Real talk."
            </p>
            <h1 className="hidden md:block font-bold font-font-poppins">Our Top Contest With Top The Top Winner : </h1>
            <div className="font-font-poppins w-full hidden md:flex justify-between">
              <h1>
                <span className="font-bold underline">Contest's Name</span>:
                ABCD
              </h1>
              <h1>
                <span className="font-bold underline">Winner's Name</span>:
                JKLGAS WASDASG
              </h1>
            </div>
            <div className="flex items-center justify-center md:justify-start w-full mt-1">
                <Buttton title={'See Details'}></Buttton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiesMent;
