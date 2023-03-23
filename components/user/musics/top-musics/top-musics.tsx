"use client";
import React, { Fragment, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../../../public/images/landing.jpg";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";
import useTopMusics from "./use-top-musics";
import SkeletonLoading from "../../../share/skeleton/skeleton";
import FadeAnimation from "../../../share/animations/fade/fade-animation";
import { constants } from "../../../../constants/constants";
import imageUrl from "../../../../utils/image-url/image-url";

const TopMusics = () => {
  const { fetchStatus, musics, clickOnMusic } = useTopMusics();
  return (
    <>
      <div className="min-h-[210px] relative flex  justify-center items-center pr-0 pl-0 pb-6 w-[calc(100%+5px)] overflow-hidden">
        <div
          className={`duration-200 transition-all w-full max-w-[280px] h-[calc(100%-30px)]  absolute   z-50 overflow-hidden ${
            fetchStatus === "done" ? "opacity-0 invisible" : ""
          }`}
        >
          <SkeletonLoading
            className="h-full rounded-2xl"
            inProp={fetchStatus === "loading"}
          />
        </div>
        <FadeAnimation
          className="w-full flex justify-center items-center "
          inProp={fetchStatus === "done"}
        >
          <div className="w-full flex justify-center items-center h-full">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="w-[calc(100%-50px)] max-w-[280px] h-[180px]"
            >
              {musics.map(
                ({ id, title, artists, cover, duration, src }, index) => (
                  <SwiperSlide
                    key={id}
                    onClick={() =>
                      clickOnMusic({
                        artists,
                        cover,
                        duration,
                        id,
                        index,
                        src,
                        title,
                      })
                    }
                    className="rounded-lg shadow-sm shadow-white  relative"
                  >
                    <div className="absolute inset-0">
                      <Image
                        className="h-full w-full object-cover object-top"
                        src={imageUrl(cover)}
                        width={280}
                        height={180}
                        alt="music"
                      />
                    </div>
                    <div className="w-full h-full flex justify-start items-end relative z-10 p-3">
                      <div className="flex justify-start items-center text-white">
                        <BsPlayCircle className="text-lg" />
                        <span className="mx-2 max-w-[120px] truncate">
                          {title}
                        </span>
                        <span className="mr-2 w-1 h-1 rounded-full bg-gray-400"></span>
                        <span className="font-light text-sm max-w-[120px] truncate">
                          {artists.map(({ id, name }, index) => (
                            <Fragment key={id}>
                              {name} {index !== artists.length - 1 && <>X</>}{" "}
                            </Fragment>
                          ))}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </FadeAnimation>
      </div>
    </>
  );
};
export default TopMusics;
