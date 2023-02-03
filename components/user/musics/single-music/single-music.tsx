import { Fragment } from "react";
import secondsToTime from "../../../../utils/fetch-request/seconds-to-time/seconds-to-time";
import SingleMusicImpl from "./types";
import useSingleMusic from "./use-single-music";

const SingleMusic = ({
  index,
  title,
  artists,
  duration,
  demo,
  cover,
  id,
  src,
}: SingleMusicImpl) => {
  const {
    setDemoData,
    setMusicToPlay,
    percentElapsedTime,
    singleMusicId,
    played,
  } = useSingleMusic();

  const toDiginIndex = (index + 1).toString().padStart(2, "0");
  const durationToTime = secondsToTime(duration); // 120 => 02:00
  return (
    <>
      <div className="w-full p-4  text-sm flex justify-between items-center  text-white relative cursor-pointer rounded-lg group">
        <span className="bg-one-dark-200 duration-200 transition-all absolute top-0 bottom-0 w-[20px] opacity-0 group-hover:w-full group-hover:opacity-100 center-absolute rounded-lg z-20"></span>
        {singleMusicId === id && (
          <span
            style={{ width: `${percentElapsedTime}%` }}
            className="absolute left-0 top-0 bottom-0 
        bg-gradient-to-r to-one-dark-400 from-transparent rounded-lg"
          ></span>
        )}

        <div
          onClick={() =>
            setMusicToPlay({
              artists,
              cover,
              duration,
              id,
              index,
              src,
              title,
            })
          }
          className="flex justify-center items-center  relative z-20 w-full overflow-hidden pr-3"
        >
          {singleMusicId === id ? (
            <div className="w-[40px] h-[40px] flex justify-start items-center">
              <div className=" min-h-[16px] flex items-end justify-center">
                <span
                  className={`w-[1px] h-4 border-gray-400 border-l-[1px] ml-[1.5px] animate-[wave_1s_ease-in-out_infinite] ${
                    played
                      ? "[animation-play-state:running]"
                      : "[animation-play-state:paused]"
                  }`}
                ></span>
                <span
                  className={`w-[1px] h-4 border-gray-400 border-l-[1px] ml-[1.5px]  animate-[wave_1s_1.25s_ease-in-out_infinite] ${
                    played
                      ? "[animation-play-state:running]"
                      : "[animation-play-state:paused]"
                  }`}
                ></span>
                <span
                  className={`w-[1px] h-4 border-gray-400 border-l-[1px] ml-[1.5px]  animate-[wave_1s_0.5s_ease-in-out_infinite] ${
                    played
                      ? "[animation-play-state:running]"
                      : "[animation-play-state:paused]"
                  }`}
                ></span>
                <span
                  className={`w-[1px] h-4 border-gray-400 border-l-[1px] ml-[1.5px] animate-[wave_1s_0.75s_ease-in-out_infinite] ${
                    played
                      ? "[animation-play-state:running]"
                      : "[animation-play-state:paused]"
                  }`}
                ></span>
                <span
                  className={`w-[1px] h-4 border-gray-400 border-l-[1px] ml-[1.5px]  animate-[wave_1s_0.85s_ease-in-out_infinite] ${
                    played
                      ? "[animation-play-state:running]"
                      : "[animation-play-state:paused]"
                  }`}
                ></span>
              </div>
            </div>
          ) : (
            <div className=" min-w-[40px]">{toDiginIndex}</div>
          )}

          <div className="flex items-start justify-center flex-col font-semibold overflow-hidden w-full">
            <span className="mb-1 max-w-[150px] 354px:max-w-[110px]  truncate max-[300px]:bg-sky-300">
              {title}
            </span>
            <div className="text-gray-400 font-medium text-[12px] flex justify-start items-center">
              <span className="max-w-[130px] 354px:max-w-[80px] truncate max-[500px]:bg-red-200">
                {artists.map(({ id, name }, index) => (
                  <Fragment key={id}>
                    {name} {index !== artists.length - 1 && <>X</>}{" "}
                  </Fragment>
                ))}
              </span>
              <span className="mx-2 w-1 h-1 rounded-full bg-gray-400"></span>{" "}
              {durationToTime}
            </div>
          </div>
        </div>
        <div className="relative z-20">
          {/* <CgMore className="text-xl  text-gray-400" /> */}
          {demo && (
            <span
              onClick={() => setDemoData({ title, demo })}
              className="text-gray-400 text-xs font-semibold hover:text-white duration-200 transition-all decoration-gray-400 hover:decoration-white underline"
            >
              DEMO
            </span>
          )}
        </div>
      </div>
    </>
  );
};
export default SingleMusic;
