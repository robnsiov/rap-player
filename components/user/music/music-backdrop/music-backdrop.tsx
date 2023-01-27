import Image from "next/image";
import { useEffect, useState } from "react";
import FadeScaleAnimation from "../../../share/animations/fade-scale/fade-scale-animation";
import MusicBackdropImpl from "./types";
import Backdrop from "../../../share/backdrop/backdrop";

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
      <Backdrop showBackdrop={showBackdrop} toggleBackdrop={toggleBackdrop}>
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
      </Backdrop>
    </>
  );
};
export default MusicBackdrop;
