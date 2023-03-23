"use client";
import dynamic from "next/dynamic";
import { Fragment, useState } from "react";
import { CgMore, CgMusic } from "react-icons/cg";
import { FiChevronLeft } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import useShowFiltersStore from "../../../store/show-filters";
import ScaleAnimation from "../../share/animations/scale/scale-animation";
import Scroll from "../../share/animations/scroll/scroll";
import MusicContainer from "../../share/music-container/music-container";
import MusicHeader from "../../share/music-header/music-header";
import MusicsFilter from "./musics-filter/musics-filter";
import MusicsLoading from "./musics-loading/musics-loading";
import TopMusics from "./top-musics/top-musics";
import useMusics from "./use-musics";
import SingleMusic from "./single-music/single-music";
import ActiveMusic from "./active-music/active-music";
import DemoMusic from "./demo-music/demo-music";
import FadeAnimation from "../../share/animations/fade/fade-animation";
import SkeletonLoading from "../../share/skeleton/skeleton";
import { Oval } from "react-loading-icons";
import MusicsImpl from "./types";
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";
import { constants } from "../../../constants/constants";

const Musics = ({ setFullscreen, fullsreen, exitFullscreen }: MusicsImpl) => {
  const [onChange] = useShowFiltersStore((state) => [state.onChange]);
  const {
    musics,
    fetchStatus,
    firstPlay,
    infinityLoading,
    showNewMusicsMessage,
  } = useMusics();
  return (
    <>
      <MusicContainer>
        <ActiveMusic />
        <MusicsLoading />
        <MusicHeader>
          <ScaleAnimation scale="0.95">
            <div className="text-2xl cursor-pointer hidden md:inline-block">
              {fullsreen ? (
                <MdOutlineFullscreenExit onClick={exitFullscreen} />
              ) : (
                <MdOutlineFullscreen onClick={setFullscreen} />
              )}
            </div>
          </ScaleAnimation>
          <ScaleAnimation scale="0.95">
            <GoSearch
              onClick={() => onChange(true)}
              className="text-xl cursor-pointer"
            />
          </ScaleAnimation>
        </MusicHeader>
        <DemoMusic />
        <MusicsFilter />
        <TopMusics />
        <div className="w-full h-full relative">
          <div className="absolute bottom-0 right-0 left-0 h-6 bg-gradient-to-t from-one-dark via-one-dark to-transparent  rounded-t-none z-30"></div>
          <div className="flex justify-center items-center  absolute -top-4 right-0 left-0 h-6 bg-gradient-to-t from-transparent via-one-dark to-one-dark  rounded-t-none z-30">
            <div className="relative -top-2 text-white">
              {infinityLoading && <Oval width={12} />}
            </div>
          </div>
          <div
            className={`duration-200 transition-all w-full overflow-hidden ${
              fetchStatus === "done" ? "opacity-0 invisible" : ""
            }`}
          >
            <SkeletonLoading
              noFade={true}
              className="rounded-lg-important mb-2 h-[50px]"
              inProp={fetchStatus === "loading"}
              count={5}
            />
          </div>
          {fetchStatus === "done" && (
            <Scroll count={musics.length}>
              {musics.map(
                ({ title, artists, duration, demo, cover, id, src }, i) => (
                  <Fragment key={i}>
                    <SingleMusic
                      title={title}
                      index={i}
                      artists={artists}
                      duration={duration}
                      demo={demo}
                      cover={cover}
                      src={src}
                      id={id}
                      firstPlay={firstPlay}
                    />
                  </Fragment>
                )
              )}
            </Scroll>
          )}
        </div>
      </MusicContainer>
    </>
  );
};
export default Musics;
