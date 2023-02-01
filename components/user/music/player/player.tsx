"use client";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {
  BsPauseCircleFill,
  BsPlayCircle,
  BsPlayCircleFill,
} from "react-icons/bs";
import { HiFastForward, HiRewind } from "react-icons/hi";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { MdOutlineShuffle, MdOutlineShuffleOn } from "react-icons/md";
const Player = () => {
  return (
    <>
      <AudioPlayer
        // autoPlay
        src="https://file.songha.ir/N/Naaji/Single/Naaji.Vasiat2.128.Songha.ir.mp3"
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        className="bg-transparent text-white"
        style={{ background: "transparent", color: "#fff" }}
        customIcons={{
          play: <BsPlayCircleFill className="text-white" />,
          pause: <BsPauseCircleFill className="text-white" />,
          rewind: <HiRewind className="text-white text-[26px]" />,
          forward: <HiFastForward className="text-white text-[26px]" />,
          previous: <GiPreviousButton className="text-white text-[20px]" />,
          next: <GiPreviousButton className="text-white text-[20px]" />,
          volume: <HiVolumeUp className="text-white text-[20px]" />,
          volumeMute: <HiVolumeOff className="text-white text-[20px]" />,
          loop: <MdOutlineShuffleOn className="text-white text-[20px]" />,
          loopOff: <MdOutlineShuffle className="text-white text-[20px]" />,
        }}

        // other props here
      />
    </>
  );
};
export default Player;
