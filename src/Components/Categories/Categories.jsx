import { RiHtml5Line } from "react-icons/ri";
import { TbBrandCss3 } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandReact } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandMongodb } from "react-icons/tb";

const Categories = () => {
    return (
        <div className="my-4 border-2 rounded-lg mx-auto">
             <div className="flex gap-4 md:gap-20 justify-center py-5">
                <RiHtml5Line className="text-2xl md:text-5xl"></RiHtml5Line>
                <TbBrandCss3 className="text-2xl md:text-5xl"></TbBrandCss3>
                <SiTailwindcss className="text-2xl md:text-5xl"></SiTailwindcss>
                <BsBootstrap className="text-2xl md:text-5xl"></BsBootstrap>
                <RiJavascriptLine className="text-2xl md:text-5xl"></RiJavascriptLine>
                <TbBrandReact className="text-2xl md:text-5xl"></TbBrandReact>
                <FaNodeJs className="text-2xl md:text-5xl"></FaNodeJs>
                <TbBrandMongodb className="text-2xl md:text-5xl"></TbBrandMongodb>
             </div>
        </div>
    );
};

export default Categories;