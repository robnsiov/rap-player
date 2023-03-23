import Image from "next/image";
import useMusic from "./use-music";
import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";
import { Fragment, useState } from "react";
import HeartAnimation from "../../share/animations/heart/heart-animation";
import MusicBackdrop from "./music-backdrop/music-backdrop";
import { FiChevronDown } from "react-icons/fi";
import { TbMusic } from "react-icons/tb";
import MusicContainer from "../../share/music-container/music-container";
import MusicHeader from "../../share/music-header/music-header";
import Player from "./player/player";
import MusicFooter from "./music-footer/music-footer";
import { HiLink } from "react-icons/hi";
import FadeAnimation from "../../share/animations/fade/fade-animation";
import imageUrl from "../../../utils/image-url/image-url";

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
    showCopyMessage,
    changeCopyMessageShowing,
    likeMusic,
    dislikeMusic,
    likedMusics,
  } = useMusic();
  if (id === -1) return null;
  return (
    <>
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
                src={imageUrl(cover)}
                alt="music-cover"
                priority
                width={280}
                height={280}
                className="object-cover border-2 border-one-dark-500 object-top rounded-2xl"
              />
            </div>
            <div className="absolute  inset-y-0  inset-x-4 translate-y-12 z-10 flex justify-center items-center">
              <Image
                src={imageUrl(cover)}
                alt="music-cover"
                priority
                width={280}
                height={280}
                className="object-cover  object-top rounded-2xl blur-2xl"
              />
            </div>
          </div>
          <div className="w-full flex justify-between items-center mt-9 text-white relative z-50">
            <div className="text-xl cursor-pointer">
              <HeartAnimation
                onClick={() => {
                  id in likedMusics ? dislikeMusic(id) : likeMusic(id);
                }}
                first={<RiHeart2Line className="text-gray-400" />}
                next={<RiHeart2Fill />}
                show={id in likedMusics ? "next" : "first"}
              />
            </div>

            <h3 className="text-white text-2xl font-semibold w-[150px] truncate text-center">
              {title}
            </h3>
            <HiLink
              onClick={() => changeCopyMessageShowing(true)}
              className="text-xl cursor-pointer text-gray-400"
            />
          </div>
          <div className="w-[180px] text-center mt-2 mb-5 relative">
            <h5 className="text-gray-400 truncate">
              {artists.map(({ id, name }, index) => (
                <Fragment key={id}>
                  {name} {index !== artists.length - 1 && <>X</>}{" "}
                </Fragment>
              ))}
            </h5>
          </div>
          <FadeAnimation
            inProp={showCopyMessage}
            className="absolute w-full  top-3.5 center-absolute"
          >
            <div className="absolute top-0 center-absolute py-1 bg-one-dark-400 px-2 flex text-xs text-white border-2 border-one-dark-500 rounded-xl justify-center items-center">
              <span className="whitespace-nowrap">The link was copied</span>
            </div>
          </FadeAnimation>
        </div>
        <div className="w-full  flex justify-center items-center mb-[70px]">
          <Player src={src} />
        </div>

        <MusicFooter href={src} />
      </MusicContainer>
    </>
  );
};
export default Music;
