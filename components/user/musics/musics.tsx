import { CgMore } from "react-icons/cg";
import { FiChevronLeft } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import TopMusics from "./top-musics/top-musics";

const Musics = () => {
  return (
    <>
      <div className="overflow-hidden  h-full bg-one-dark rounded-2xl flex items-center justify-start flex-col relative pt-4 w-[350px] ml-2">
        <div className="w-full text-white pr-4 pl-4 flex justify-between items-center mb-6">
          <FiChevronLeft className="text-xl cursor-pointer" />

          <GoSearch className="text-xl cursor-pointer" />
        </div>
        <div className="flex justify-center items-center pr-4 pl-4 pb-6">
          <TopMusics />
        </div>
        <div className="w-full flex items-center justify-start flex-col relative">
          <div className="w-full p-4  text-sm flex justify-between items-center  text-white relative cursor-pointer rounded-lg group">
            <span className="bg-one-dark-200 duration-200 transition-all absolute top-0 bottom-0 w-[20px] opacity-0 group-hover:w-full group-hover:opacity-100 center-absolute rounded-lg z-20"></span>
            <span className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r to-one-dark-400 from-transparent rounded-lg"></span>
            <div className="flex justify-center items-center mr-4 relative z-20">
              <div className=" w-[40px]">02</div>
              <div className="flex items-start justify-center flex-col font-semibold">
                <span className="mb-1 max-w-[150px] truncate">
                  Heaven Heaven Heaven
                </span>
                <div className="text-gray-400 font-medium text-[12px] flex justify-start items-center">
                  <span className="max-w-[150px] truncate">
                    Mr.Kity Mr.Kity Mr.Kity Mr.Kity Mr.Kity
                  </span>
                  <span className="mx-2 w-1 h-1 rounded-full bg-gray-400"></span>{" "}
                  12:85
                </div>
              </div>
            </div>
            <div className="relative z-20">
              <CgMore className="text-xl  text-gray-400" />
            </div>
          </div>
          <div className="w-full p-4  text-sm flex justify-between items-center  text-white relative cursor-pointer rounded-lg">
            <div className="flex justify-center items-center mr-4 relative z-30">
              <div className="w-[40px] flex justify-start items-center">
                <div className="flex items-end justify-center">
                  <span className="w-[1px] h-4 border-gray-400 border-l-[1px] ml-[1.5px] animate-[wave_1s_ease-in-out_infinite]"></span>
                  <span className="w-[1px] h-4 border-gray-400 border-l-[1px] ml-[1.5px]  animate-[wave_1s_1.25s_ease-in-out_infinite]"></span>
                  <span className="w-[1px] h-4 border-gray-400 border-l-[1px] ml-[1.5px]  animate-[wave_1s_0.5s_ease-in-out_infinite]"></span>
                  <span className="w-[1px] h-4 border-gray-400 border-l-[1px] ml-[1.5px] animate-[wave_1s_0.75s_ease-in-out_infinite]"></span>
                  <span className="w-[1px] h-4 border-gray-400 border-l-[1px] ml-[1.5px]  animate-[wave_1s_0.85s_ease-in-out_infinite]"></span>
                </div>
              </div>
              <div className="flex items-start justify-center flex-col font-semibold">
                <span className="mb-1 max-w-[150px] truncate">
                  Heaven Heaven Heaven
                </span>
                <div className="text-gray-400 font-medium text-[12px] flex justify-start items-center">
                  <span className="max-w-[150px] truncate">
                    Mr.Kity Mr.Kity Mr.Kity Mr.Kity Mr.Kity
                  </span>
                  <span className="mx-2 w-1 h-1 rounded-full bg-gray-400"></span>{" "}
                  12:85
                </div>
              </div>
            </div>
            <div className="relative z-30">
              <CgMore className="text-xl  text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Musics;
