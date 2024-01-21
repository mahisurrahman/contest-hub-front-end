import { DiProlog } from "react-icons/di";

const TitleSubTitle = ({title, subTitle}) => {
    return (
        <div className="flex flex-col items-center w-10/12 md:w-6/12 mx-auto text-center">
            <div className="divider divider-neutral"><DiProlog className="text-8xl text-black"></DiProlog></div>
            <h1 className="font-font-rubik text-3xl md:text-4xl uppercase">{title}</h1>
            <p className="font-font-dancing text-xl md:text-2xl">{subTitle}</p>
            <div className="divider divider-neutral"></div>
        </div>
    );
};

export default TitleSubTitle;