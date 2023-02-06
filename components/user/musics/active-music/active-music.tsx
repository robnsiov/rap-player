import Image from "next/image";
import image from "../../../../public/images/landing.jpg";
import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";
import HeartAnimation from "../../../share/animations/heart/heart-animation";
import {
  BsPauseCircleFill,
  BsPlayCircle,
  BsPlayCircleFill,
} from "react-icons/bs";
import { Fragment, useState } from "react";
import useActiveMusic from "./use-active-music";
import FadeAnimation from "../../../share/animations/fade/fade-animation";
const ActiveMusic = () => {
  const {
    showMusicPage,
    artists,
    cover,
    id,
    title,
    showActiveMusic,
    played,
    togglePlayePauseMusic,
  } = useActiveMusic();
  return (
    <>
      <FadeAnimation
        inProp={showActiveMusic}
        className="absolute bottom-2 right-2 left-2 z-[180]"
      >
        <div
          className="cursor-pointer  hidden w-full
         items-center justify-between p-1.5 rounded-xl bg-one-dark-200 border-2 md:flex"
        >
          <div
            className="flex justify-start items-center w-full"
            onClick={showMusicPage}
          >
            <div className="w-[40px] h-[40px] rounded-xl overflow-hidden mr-3">
              <Image
                src={cover}
                className="object-cover object-center w-full h-full"
                width={40}
                height={40}
                alt={title}
              />
            </div>
            <div className="flex justify-center items-start flex-col">
              <span className="text-white text-sm max-w-[140px] truncate">
                {title}
              </span>
              <span className="text-[12px] text-gray-400 max-w-[140px] truncate">
                {artists.map(({ id, name }, index) => (
                  <Fragment key={id}>
                    {name} {index !== artists.length - 1 && <>X</>}{" "}
                  </Fragment>
                ))}
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center text-white">
            <RiHeart2Fill className="mr-2" />
            <HeartAnimation
              onClick={togglePlayePauseMusic}
              first={
                <BsPlayCircleFill className="text-4xl w-[30px] h-[30px]" />
              }
              next={
                <BsPauseCircleFill className="text-4xl w-[30px] h-[30px]" />
              }
              show={played ? "next" : "first"}
            />
          </div>
        </div>
      </FadeAnimation>
    </>
  );
};

export default ActiveMusic;
