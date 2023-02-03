import Image from "next/image";
import useMusic from "./use-music";
import { CgMore } from "react-icons/cg";
import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";
import { Fragment, useState } from "react";
import HeartAnimation from "../../share/animations/heart/heart-animation";
import MusicBackdrop from "./music-backdrop/music-backdrop";
import { HiHome, HiOutlineHome } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { TbMusic } from "react-icons/tb";
import ShadowBorder from "../../UI/borders/shadow-border";
import MusicContainer from "../../share/music-container/music-container";
import MusicHeader from "../../share/music-header/music-header";
import Player from "./player/player";

const Music = () => {
  const {
    showBackdrop,
    toggleBackdrop,
    showMusicPage,
    mdSize,
    hidePageMusic,
    artists,
    cover,
    id,
    index,
    title,
    src,
  } = useMusic();
  const [like, setLike] = useState(false);
  return (
    <>
      {/* <MusicContainer className="mr-4 md:absolute md:left-2 md:w-[calc(100%-17px)] md:h-[calc(100%-17px)] md:top-2  md:z-[500] md:mr-0"> */}
      <MusicContainer
        innerClassName="justify-between"
        className={`duration-200 opacity-100 visible transition-all mr-4 md:absolute 
      md:left-2 md:w-[calc(100%-17px)] md:h-[calc(100%-17px)] md:top-2  
      md:z-[500] md:invisible md:opacity-0 md:mr-0 justify-between ${
        mdSize ? "md:opacity-0 md:invisible" : ""
      } ${showMusicPage ? "show-music-page" : ""}`}
      >
        <div className="w-full flex justify-center items-center flex-col">
          <MusicHeader>
            <FiChevronDown
              className="text-xl cursor-pointer md:inline-block hidden"
              onClick={hidePageMusic}
            />
            <span className=" md:hidden"></span>
            <span className="font-medium">Now Playing</span>
            <TbMusic className="text-xl cursor-pointer" />
          </MusicHeader>
          <MusicBackdrop
            src={cover}
            toggleBackdrop={toggleBackdrop}
            showBackdrop={showBackdrop}
          />
          <div
            onClick={toggleBackdrop}
            className="w-[280px] h-[280px] 340px:w-full 340px:height-unset 340px:aspect-square relative cursor-pointer flex justify-center items-center"
          >
            <div className="absolute inset-0 z-20  flex justify-center items-center">
              <Image
                src={cover}
                alt="music-cover"
                priority
                width={280}
                height={280}
                className="object-cover object-top rounded-2xl"
              />
            </div>
            <div className="absolute inset-y-0 inset-x-4 translate-y-12 z-10 flex justify-center items-center">
              <Image
                src={cover}
                alt="music-cover"
                priority
                width={280}
                height={280}
                className="object-cover object-top rounded-2xl blur-2xl"
              />
            </div>
          </div>
          <div className="w-full flex justify-between items-center mt-9 text-white relative z-50">
            <HeartAnimation
              onClick={() => setLike((prev) => !prev)}
              first={
                <RiHeart2Line className="text-xl cursor-pointer text-gray-400" />
              }
              next={<RiHeart2Fill className="text-xl cursor-pointer" />}
              show={like ? "next" : "first"}
            />

            <h3 className="text-white text-2xl font-semibold w-[150px] truncate text-center">
              {title}
            </h3>
            <CgMore className="text-xl cursor-pointer text-gray-400" />
          </div>
          <div className="w-[180px] text-center mt-2 mb-5">
            <h5 className="text-gray-400 truncate">
              {artists.map(({ id, name }, index) => (
                <Fragment key={id}>
                  {name} {index !== artists.length - 1 && <>X</>}{" "}
                </Fragment>
              ))}
            </h5>
          </div>
        </div>
        <div className="w-full  flex justify-center items-center mb-16">
          <Player src={src} />
        </div>

        <div className="text-white absolute bottom-0 right-0 left-0 py-4 px-4 flex justify-between items-center rounded-xl rounded-t-none">
          <div
            className={
              "group flex items-center text-center flex-col justify-center relative"
            }
          >
            <span
              className={`absolute w-4 h-4 bg-white blur-xl z-10 transition-all duration-200   ${
                like ? "opacity-100" : "opacity-0"
              } group-hover:opacity-100`}
            ></span>
            <div className="relative z-20">
              <HeartAnimation
                onClick={() => setLike((prev) => !prev)}
                first={
                  <HiOutlineHome className="text-2xl cursor-pointer text-gray-400" />
                }
                next={<HiHome className="text-2xl cursor-pointer" />}
                show={like ? "next" : "first"}
              />
            </div>
            <span
              className={`text-[8px] relative z-20 duration-200 transition-all mt-1 ${
                like ? "text-white" : "text-gray-400"
              }`}
            >
              Home
            </span>
          </div>
        </div>
      </MusicContainer>
    </>
  );
};
export default Music;
