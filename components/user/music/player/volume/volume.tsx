import RangeSlider from "../../../../share/range-slider/range-slider";
import { VolumeHigh, VolumeLow1, VolumeCross } from "iconsax-react";
import BtnWrapper from "../btn-wrapper/btn-wrapper";
import VoluemImpl from "./types";
import useVolume from "./use-volume";
import { Ref, useRef } from "react";
import FadeAnimation from "../../../../share/animations/fade/fade-animation";

const Volume = ({ onChange, volume, key }: VoluemImpl) => {
  const volumeRef = useRef<HTMLDivElement>();
  const { toggleShowVolumePage, showVolumePage } = useVolume({
    ref: volumeRef,
  });
  return (
    <>
      <div key={key} className="flex justify-center items-center flex-col">
        <FadeAnimation
          inProp={showVolumePage}
          className="absolute inset-0 z-[1000]"
        >
          <div className="absolute inset-0 bg-one-dark-100/90 rounded-xl flex justify-center items-center">
            <RangeSlider
              ref={volumeRef as Ref<HTMLDivElement>}
              thumbStyles={{ width: "0px", height: "0px", border: "0" }}
              trackStyles={{ width: "10px", height: "100px" }}
              innerStyles={{ width: "10px", height: "100px" }}
              values={[volume]}
              onChange={onChange}
              min={0}
              max={1}
            />
          </div>
        </FadeAnimation>
        <BtnWrapper>
          <div
            onClick={toggleShowVolumePage}
            className="text-white w-5 h-5 cursor-pointer"
          >
            {volume <= 1 && volume > 0.5 && <VolumeHigh size="22" />}
            {volume <= 0.5 && volume > 0 && <VolumeLow1 size="22" />}
            {volume === 0 && <VolumeCross size="22" />}
          </div>
        </BtnWrapper>
        <div className="flex justify-center items-center"></div>
      </div>
    </>
  );
};
export default Volume;
