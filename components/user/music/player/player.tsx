"use client";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";
import { HiFastForward, HiRewind } from "react-icons/hi";
import { GiPreviousButton } from "react-icons/gi";
import { TbRepeat, TbRepeatOnce } from "react-icons/tb";
import BtnWrapper from "./btn-wrapper/btn-wrapper";
import PlayerImpl from "./types";
import usePlayer from "./use-player";
import Volume from "./volume/volume";
import musicUrl from "../../../../utils/music-url/music-url";

const Player = ({ src }: PlayerImpl) => {
  const {
    nextTrack,
    prevTrack,
    playerRef,
    onListenPlayer,
    onPause,
    onPlay,
    clearDemo,
    volume,
    changeVolume,
    onEndedMusic,
  } = usePlayer();
  return (
    <>
      <div className="w-full">
        <AudioPlayer
          ref={playerRef}
          src={musicUrl(src)}
          showSkipControls={true}
          onClickNext={nextTrack}
          onPlay={onPlay}
          onEnded={onEndedMusic}
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
                <BsPlayCircleFill
                  onClick={clearDemo}
                  className="text-white text-[55px]"
                />
              </BtnWrapper>
            ),
            pause: (
              <BtnWrapper>
                <BsPauseCircleFill className="text-white text-[55px]" />
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
            loop: (
              <BtnWrapper>
                <TbRepeatOnce className="text-white text-[20px]" />
              </BtnWrapper>
            ),
            loopOff: (
              <BtnWrapper>
                <TbRepeat className="text-white text-[20px]" />
              </BtnWrapper>
            ),
          }}
          customVolumeControls={[
            <Volume key="1" volume={volume[0]} onChange={changeVolume} />,
          ]}
        />
      </div>
    </>
  );
};
export default Player;
