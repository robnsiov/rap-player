import Image from "next/image";
import { useEffect, useState } from "react";
import FadeScaleAnimation from "../../../share/animations/fade-scale/fade-scale-animation";
import MusicBackdropImpl from "./types";

const MusicBackdrop = ({
  src,
  toggleBackdrop,
  showBackdrop,
}: MusicBackdropImpl) => {
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowImage(showBackdrop);
    }, 100);

    return () => {
      clearTimeout(timeOut);
    };
  }, [showBackdrop]);
  return (
    <>
      <div
        onClick={toggleBackdrop}
        className={` cursor-pointer absolute z-[100] backdrop-blur-2xl bg-back duration-200 inset-0 rounded-2xl grid place-items-center ${
          showBackdrop ? "opacity-100" : "opacity-0 invisible"
        }`}
      >
        <FadeScaleAnimation
          className="w-full h-full grid place-items-center"
          inProp={showImage}
        >
          <div className="w-[280px] h-[280px]">
            <Image
              src={src}
              alt="music-cover"
              priority
              className="h-full w-full object-cover object-top rounded-2xl"
            />
          </div>
        </FadeScaleAnimation>
      </div>
    </>
  );
};
export default MusicBackdrop;
