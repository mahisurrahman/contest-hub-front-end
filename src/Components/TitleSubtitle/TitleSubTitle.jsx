import { DiProlog } from "react-icons/di";

const TitleSubTitle = () => {
    return (
        <div className="flex flex-col items-center w-6/12 mx-auto">
            <div className="divider divider-neutral"><DiProlog className="text-8xl text-black"></DiProlog></div>
            <h1 className="font-font-rubik text-4xl uppercase">Featured Contest</h1>
            <p className="font-font-dancing text-2xl">Our Top-Most Contest Lists</p>
            <div className="divider divider-neutral"></div>
        </div>
    );
};

export default TitleSubTitle;