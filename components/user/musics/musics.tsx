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
import { IoMdCloseCircle } from "react-icons/io";
import SingleMusic from "./single-music/single-music";
import Image from "next/image";
import image from "../../../public/images/landing.jpg";
import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";
import { HiPlay } from "react-icons/hi";
import HeartAnimation from "../../share/animations/heart/heart-animation";
import {
  BsPauseCircleFill,
  BsPlayCircle,
  BsPlayCircleFill,
} from "react-icons/bs";
import ActiveMusic from "./active-music/active-music";
import DemoMusic from "./demo-music/demo-music";

const Musics = () => {
  const [onChange] = useShowFiltersStore((state) => [state.onChange]);
  const { musics } = useMusics();
  return (
    <>
      <MusicContainer>
        <ActiveMusic />
        <MusicsLoading />
        <MusicHeader>
          <span></span>
          {/* for balance flex */}
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
          <span className="absolute bottom-0 right-0 left-0 h-6 bg-gradient-to-t from-one-dark via-one-dark to-transparent  rounded-t-none z-30"></span>
          <span className="absolute -top-4 right-0 left-0 h-6 bg-gradient-to-t from-transparent via-one-dark to-one-dark  rounded-t-none z-30"></span>
          <Scroll>
            <div className="w-full flex items-center justify-start flex-col relative">
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
                    />
                  </Fragment>
                )
              )}
            </div>
          </Scroll>
        </div>
      </MusicContainer>
    </>
  );
};
export default Musics;
