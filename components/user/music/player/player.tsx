"use client";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";
import { HiFastForward, HiRewind } from "react-icons/hi";
import { GiPreviousButton } from "react-icons/gi";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { TbRepeat, TbRepeatOnce } from "react-icons/tb";
import BtnWrapper from "./btn-wrapper/btn-wrapper";
import PlayerImpl from "./types";
import usePlayer from "./use-player";
const Player = ({ src }: PlayerImpl) => {
  const {
    nextTrack,
    prevTrack,
    playerRef,
    onListenPlayer,
    onPause,
    onPlay,
    clearDemo,
  } = usePlayer();

  return (
    <>
      <AudioPlayer
        ref={playerRef}
        src={src}
        showSkipControls={true}
        onClickNext={nextTrack}
        onPlay={onPlay}
        onPause={onPause}
        onListen={onListenPlayer}
        onClickPrevious={prevTrack}
        className="bg-transparent text-white shadow-none p-0"
        style={{
          background: "transparent",
          color: "#fff",
          boxShadow: "none",
          padding: "0",
        }}
        customIcons={{
          play: (
            <BtnWrapper>
              <BsPlayCircleFill onClick={clearDemo} className="text-white" />
            </BtnWrapper>
          ),
          pause: (
            <BtnWrapper>
              <BsPauseCircleFill className="text-white" />
            </BtnWrapper>
          ),
          rewind: (
            <BtnWrapper>
              <HiRewind className="text-white text-[26px]" />
            </BtnWrapper>
          ),
          forward: (
            <BtnWrapper>
              <HiFastForward className="text-white text-[26px]" />
            </BtnWrapper>
          ),
          previous: (
            <BtnWrapper>
              <GiPreviousButton className="text-white text-[20px]" />
            </BtnWrapper>
          ),
          next: (
            <BtnWrapper>
              <GiPreviousButton className="text-white text-[20px]" />
            </BtnWrapper>
          ),
          volume: (
            <BtnWrapper>
              <HiVolumeUp className="text-white text-[20px]" />
            </BtnWrapper>
          ),
          volumeMute: (
            <BtnWrapper>
              <HiVolumeOff className="text-white text-[20px]" />
            </BtnWrapper>
          ),
          loop: (
            <BtnWrapper>
              <TbRepeat className="text-white text-[20px]" />
            </BtnWrapper>
          ),
          loopOff: (
            <BtnWrapper>
              <TbRepeatOnce className="text-white text-[20px]" />
            </BtnWrapper>
          ),
        }}

        // other props here
      />
    </>
  );
};
export default Player;
