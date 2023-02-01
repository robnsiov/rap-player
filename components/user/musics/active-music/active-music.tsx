import Image from "next/image";
import image from "../../../../public/images/landing.jpg";
import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";
import HeartAnimation from "../../../share/animations/heart/heart-animation";
import {
  BsPauseCircleFill,
  BsPlayCircle,
  BsPlayCircleFill,
} from "react-icons/bs";
import { useState } from "react";
import useActiveMusic from "./use-active-music";
const ActiveMusic = () => {
  const [like, setLike] = useState(false);
  const { showMusicPage } = useActiveMusic();
  return (
    <>
      <div
        className="cursor-pointer absolute bottom-2 right-2 left-2 z-[200] hidden
         items-center justify-between p-1.5 rounded-xl bg-one-dark-200 border-2 md:flex"
      >
        <div
          className="flex justify-start items-center w-full"
          onClick={showMusicPage}
        >
          <div className="w-[40px] h-[40px] rounded-xl overflow-hidden mr-3">
            <Image
              src={image}
              className="object-cover object-center w-full h-full"
              alt="image"
            />
          </div>
          <div className="flex justify-center items-start flex-col">
            <span className="text-white text-sm max-w-[140px] truncate">
              Zakhm2 Zakhm2 Zakhm2
            </span>
            <span className="text-[12px] text-gray-400 max-w-[140px] truncate">
              Pishro
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center text-white">
          <RiHeart2Fill className="mr-2" />
          <HeartAnimation
            onClick={() => setLike((prev) => !prev)}
            first={<BsPlayCircleFill className="text-4xl w-[30px] h-[30px]" />}
            next={<BsPauseCircleFill className="text-4xl w-[30px] h-[30px]" />}
            show={like ? "next" : "first"}
          />
        </div>
      </div>
    </>
  );
};

export default ActiveMusic;
