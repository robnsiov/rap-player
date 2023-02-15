import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";
import BtnWrapper from "../../../user/music/player/btn-wrapper/btn-wrapper";
import RowMusicImpl from "./types";

const MusicRow = ({ data }: RowMusicImpl) => {
  return (
    <>
      <div className="w-[300px] music-row rounded-md  overflow-hidden">
        {data.length !== 0 && (
          <AudioPlayer
            src={data}
            style={{
              boxShadow: "none",
              border: "none",
              background: "transparent",
            }}
            customIcons={{
              rewind: <></>,
              forward: <></>,
              previous: <></>,
              next: <></>,
              loop: <></>,
              loopOff: <></>,
              play: (
                <BtnWrapper>
                  <BsPlayCircleFill className="text-one-dark-400" />
                </BtnWrapper>
              ),
              pause: (
                <BtnWrapper>
                  <BsPauseCircleFill className="text-one-dark-400" />
                </BtnWrapper>
              ),
            }}
            customVolumeControls={[<></>]}
          />
        )}
      </div>
    </>
  );
};

export default MusicRow;
