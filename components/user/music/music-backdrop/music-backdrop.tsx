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
          className="grid place-items-center p-3"
          inProp={showImage}
        >
          <div className="w-[280px] h-[280px] 340px:w-full 340px:height-unset 340px:aspect-square">
            <Image
              src={src}
              alt="music-cover"
              priority
              width={280}
              height={280}
              className="object-cover object-top rounded-2xl"
            />
          </div>
        </FadeScaleAnimation>
      </Backdrop>
    </>
  );
};
export default MusicBackdrop;
