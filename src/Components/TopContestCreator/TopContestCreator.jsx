/* eslint-disable react/no-unescaped-entities */
import TitleSubTitle from "../TitleSubtitle/TitleSubTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TopContestCreator.css";
import { Pagination, Navigation } from "swiper/modules";

import contestCreatorImage from "../../assets/img7.jpg";
import { GiCrownedSkull } from "react-icons/gi";
import { DiLinux } from "react-icons/di";
import { Link } from "react-router-dom";
import Buttton from "../Button/Buttton";

const TopContestCreator = () => {
  return (
    <div className="border-2 rounded-lg py-5 md:py-20">
      <div>
        <TitleSubTitle
          title={"Best Picks"}
          subTitle={"Of Our Contest Creators"}
        ></TitleSubTitle>

        <div className="mx-2 my-2 border-2 rounded-lg px-4 py-4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-2">
          <div className="flex flex-col items-center md:items-start font-font-poppins justify-center md:justify-end px-4">
            <GiCrownedSkull className="text-center text-9xl mb-5 border-2 px-2 py-2 rounded-full"></GiCrownedSkull>
            <h1 className="text-2xl font-bold uppercase">
              What Makes Our Creators <br /> 'The Best'?
            </h1>
            <p className="font-normal mt-2 border-l-2 pl-4 border-black">
              Contest creators conceive engaging challenges, crafting rules and
              criteria to inspire participants, fostering creativity, and
              selecting deserving winners judiciously.
            </p>
          </div>
          <div className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="border-2 rounded-lg">
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="w-48 object-cover rounded-full px-4 py-4 border-2 "
                    src={contestCreatorImage}
                    alt=""
                  />
                  <div className="text-left text-md">
                    <h1 className="mt-2 font-semibold">Name: <span className="font-normal">{}</span></h1>
                    <h1 className=" font-semibold">Contest Name: <span className="font-normal">{}</span></h1>
                    <h1 className=" font-semibold">Contest Des: <span className="font-normal">{}</span></h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-col items-center md:items-end text-right font-font-poppins justify-center md:justify-end px-4">
            <h1 className="uppercase text-2xl font-bold">
              You Wanna Be A <br /> Contest Creator Too?
            </h1>
            <p className="font-normal mt-2 border-r-2 pr-4 border-black">
              Deciding to join as a contest creator involves shaping imaginative
              competitions, setting guidelines, and influencing outcomes,
              providing an enriching experience.
            </p>
            <div className="mt-4">
              <Link to="/signup">
                <Buttton title={"Join Now"}></Buttton>
              </Link>
            </div>
            <DiLinux className="text-center text-9xl mt-5 border-2 px-2 py-2 rounded-full"></DiLinux>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContestCreator;
