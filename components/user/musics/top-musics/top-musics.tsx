"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../../../public/images/landing.jpg";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";

const TopMusics = () => {
  return (
    <>
      <div className="flex justify-center items-center pr-0 pl-0 pb-6 w-[calc(100%+5px)] overflow-hidden">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[280px] old:w-[200px] h-[180px]"
        >
          <SwiperSlide className="rounded-lg shadow-sm shadow-white  relative">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover object-top"
                src={image}
                alt="music"
              />
            </div>
            <div className="w-full h-full flex justify-start items-end relative z-10 p-3">
              <div className="flex justify-start items-center text-white">
                <BsPlayCircle className="text-lg" />
                <span className="mx-2">Execus</span>
                <span className="mr-2 w-1 h-1 rounded-full bg-gray-400"></span>
                <span className="font-light text-sm">Jack</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg shadow-sm shadow-white  relative">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover object-top"
                src={image}
                alt="music"
              />
            </div>
            <div className="w-full h-full flex justify-start items-end relative z-10 p-3">
              <div className="flex justify-start items-center text-white">
                <BsPlayCircle className="text-lg" />
                <span className="mx-2">Execus</span>
                <span className="mr-2 w-1 h-1 rounded-full bg-gray-400"></span>
                <span className="font-light text-sm">Jack</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg shadow-sm shadow-white  relative">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover object-top"
                src={image}
                alt="music"
              />
            </div>
            <div className="w-full h-full flex justify-start items-end relative z-10 p-3">
              <div className="flex justify-start items-center text-white">
                <BsPlayCircle className="text-lg" />
                <span className="mx-2">Execus</span>
                <span className="mr-2 w-1 h-1 rounded-full bg-gray-400"></span>
                <span className="font-light text-sm">Jack</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg shadow-sm shadow-white  relative">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover object-top"
                src={image}
                alt="music"
              />
            </div>
            <div className="w-full h-full flex justify-start items-end relative z-10 p-3">
              <div className="flex justify-start items-center text-white">
                <BsPlayCircle className="text-lg" />
                <span className="mx-2">Execus</span>
                <span className="mr-2 w-1 h-1 rounded-full bg-gray-400"></span>
                <span className="font-light text-sm">Jack</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg shadow-sm shadow-white  relative">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover object-top"
                src={image}
                alt="music"
              />
            </div>
            <div className="w-full h-full flex justify-start items-end relative z-10 p-3">
              <div className="flex justify-start items-center text-white">
                <BsPlayCircle className="text-lg" />
                <span className="mx-2">Execus</span>
                <span className="mr-2 w-1 h-1 rounded-full bg-gray-400"></span>
                <span className="font-light text-sm">Jack</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg shadow-sm shadow-white  relative">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover object-top"
                src={image}
                alt="music"
              />
            </div>
            <div className="w-full h-full flex justify-start items-end relative z-10 p-3">
              <div className="flex justify-start items-center text-white">
                <BsPlayCircle className="text-lg" />
                <span className="mx-2">Execus</span>
                <span className="mr-2 w-1 h-1 rounded-full bg-gray-400"></span>
                <span className="font-light text-sm">Jack</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg shadow-sm shadow-white  relative">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover object-top"
                src={image}
                alt="music"
              />
            </div>
            <div className="w-full h-full flex justify-start items-end relative z-10 p-3">
              <div className="flex justify-start items-center text-white">
                <BsPlayCircle className="text-lg" />
                <span className="mx-2">Execus</span>
                <span className="mr-2 w-1 h-1 rounded-full bg-gray-400"></span>
                <span className="font-light text-sm">Jack</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default TopMusics;
