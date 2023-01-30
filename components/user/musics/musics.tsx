"use client";
import dynamic from "next/dynamic";
import { Fragment } from "react";
import { CgMore, CgMusic } from "react-icons/cg";
import { FiChevronLeft } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import useShowFiltersStore from "../../../store/show-filters";
import ScaleAnimation from "../../share/animations/scale/scale-animation";
import Scroll from "../../share/animations/scroll/scroll";
import MusicContainer from "../../share/music-container/music-container";
import MusicHeader from "../../share/music-header/music-header";
import MusicsFilter from "./musics-filter/musics-filter";
import MusicsLoading from "./musics-loading/musics-loading";
import TopMusics from "./top-musics/top-musics";
import useMusics from "./use-musics";
import { IoMdCloseCircle } from "react-icons/io";

const Musics = () => {
  const [onChange] = useShowFiltersStore((state) => [state.onChange]);
  return (
    <>
      <MusicContainer>
        <MusicsLoading />
        <MusicHeader>
          <FiChevronLeft className="text-xl cursor-pointer" />
          <ScaleAnimation scale="0.95">
            <GoSearch
              onClick={() => onChange(true)}
              className="text-xl cursor-pointer"
            />
          </ScaleAnimation>
        </MusicHeader>
        <div className="absolute center-absolute top-3 duration-200 transition-all active:scale-[0.95]">
          <div
            className="group 
         cursor-pointer flex justify-between items-center text-white
           rounded-2xl border-2 border-one-dark-500 hover:border-gray-300 px-1  py-0.5 z-10"
          >
            <IoMdCloseCircle className="text-gray-400 group-hover:text-white transition-all duration-200" />
            <span className="mx-2 text-sm max-w-[100px] truncate min-w-[10px] group-hover:top-[-1px] relative">
              Erio5 
            </span>
            <CgMusic className="text-gray-400 group-hover:text-white transition-all duration-200" />
          </div>
        </div>
        <MusicsFilter />
        <TopMusics />
        <div className="w-full h-full relative">
          <span className="absolute bottom-0 right-0 left-0 h-6 bg-gradient-to-t from-one-dark via-one-dark to-transparent  rounded-t-none z-30"></span>
          <span className="absolute -top-4 right-0 left-0 h-6 bg-gradient-to-t from-transparent via-one-dark to-one-dark  rounded-t-none z-30"></span>
          <Scroll>
            <div className="w-full flex items-center justify-start flex-col relative">
              {Array.from({ length: 6 }).map((_, i) => (
                <Fragment key={i}>
                  <div className="w-full p-4  text-sm flex justify-between items-center  text-white relative cursor-pointer rounded-lg group">
                    <span className="bg-one-dark-200 duration-200 transition-all absolute top-0 bottom-0 w-[20px] opacity-0 group-hover:w-full group-hover:opacity-100 center-absolute rounded-lg z-20"></span>
                    <span className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r to-one-dark-400 from-transparent rounded-lg"></span>
                    <div className="flex justify-center items-center  relative z-20 w-full overflow-hidden pr-3">
                      <div className=" min-w-[40px]">02</div>
                      {/* <div className="w-[40px] h-[40px] flex justify-start items-center">
                <div className=" min-h-[16px] flex items-end justify-center">
                  <span className="w-[1px] h-4 border-gray-400 border-l-[1px] ml-[1.5px] animate-[wave_1s_ease-in-out_infinite]"></span>
                  <span className="w-[1px] h-4 border-gray-400 border-l-[1px] ml-[1.5px]  animate-[wave_1s_1.25s_ease-in-out_infinite]"></span>
                  <span className="w-[1px] h-4 border-gray-400 border-l-[1px] ml-[1.5px]  animate-[wave_1s_0.5s_ease-in-out_infinite]"></span>
                  <span className="w-[1px] h-4 border-gray-400 border-l-[1px] ml-[1.5px] animate-[wave_1s_0.75s_ease-in-out_infinite]"></span>
                  <span className="w-[1px] h-4 border-gray-400 border-l-[1px] ml-[1.5px]  animate-[wave_1s_0.85s_ease-in-out_infinite]"></span>
                </div>
              </div> */}
                      <div className="flex items-start justify-center flex-col font-semibold overflow-hidden w-full">
                        <span className="mb-1 max-w-[150px] 354px:max-w-[110px]  truncate max-[300px]:bg-sky-300">
                          Heaven Heaven Heaven
                        </span>
                        <div className="text-gray-400 font-medium text-[12px] flex justify-start items-center">
                          <span className="max-w-[130px] 354px:max-w-[80px] truncate max-[500px]:bg-red-200">
                            Mr.Kity Mr.Kity Mr.Kity Mr.Kity Mr.Kity
                          </span>
                          <span className="mx-2 w-1 h-1 rounded-full bg-gray-400"></span>{" "}
                          12:85
                        </div>
                      </div>
                    </div>
                    <div className="relative z-20">
                      {/* <CgMore className="text-xl  text-gray-400" /> */}
                      <span className="text-gray-400 text-xs font-semibold hover:text-white duration-200 transition-all decoration-gray-400 hover:decoration-white underline">
                        DEMO
                      </span>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </Scroll>
        </div>
      </MusicContainer>
    </>
  );
};
export default Musics;
