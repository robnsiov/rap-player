import { CgMusic } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";
import FadeAnimation from "../../../share/animations/fade/fade-animation";
import useDemoMusic from "./use-demo-music";

const DemoMusic = () => {
  const { demo, clearDemo, title } = useDemoMusic();
  return (
    <>
      <FadeAnimation inProp={demo.length !== 0}>
        {/* {demo.length !== 0 && ( */}
        <div
          onClick={clearDemo}
          className="absolute center-absolute top-3 duration-200 transition-all active:scale-[0.95]"
        >
          <div
            className="group 
         cursor-pointer flex justify-between items-center text-white
           rounded-2xl border-2 border-one-dark-500 hover:border-gray-300 px-1  py-0.5 z-10"
          >
            <IoMdCloseCircle className="text-gray-400 group-hover:text-white transition-all duration-200" />
            <span className="mx-2 text-sm max-w-[100px] truncate min-w-[10px]  relative">
              {title.length === 0 ? "..." : title}
            </span>
            <CgMusic className="text-gray-400 group-hover:text-white transition-all duration-200" />
          </div>
        </div>
        {/* )} */}
      </FadeAnimation>
    </>
  );
};
export default DemoMusic;
