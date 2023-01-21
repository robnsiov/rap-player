"use client";

import Image from "next/image";
import landing from "../../../public/images/landing.jpg";
import { BsPlayCircle } from "react-icons/bs";
import { HiOutlineCloudDownload } from "react-icons/hi";
import useLanding from "./use-landing";
import FadeAnimation from "../../share/animations/fade/fade-animation";
import BtnBorderAnim from "../../UI/buttons/btn-border-anim/btn-border-anim";

const Landing = () => {
  const { hide, hideLanding } = useLanding();

  return (
    <>
      <FadeAnimation inProp={!hide}>
        <div className="p-4 h-screen w-full flex items-center justify-center relative">
          <div className="absolute inset-0 z-20  bg-gradient-to-t from-one-dark to-white/20"></div>
          <div className="absolute inset-0 z-10">
            <Image
              src={landing}
              priority
              fill
              alt="landing-image"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-24 z-40 flex items-center justify-center p-12 sm:inset-7 md:p-2">
            <div className="max-w-4xl text-white w-full flex justify-center flex-col items-center text-center relative z-30">
              <span className="text-3xl">Welcome To</span>

              <h1 className="text-6xl sm:text-5xl my-8 font-extrabold break-word">
                R.GEN AGENCY LANDING PAGE COLLECTION
              </h1>
              <div className="flex items-center justify-center sm:flex-col w-full">
                <BtnBorderAnim
                  onClick={hideLanding}
                  className="mr-4 mb-4 sm:mr-0"
                >
                  Play <BsPlayCircle className="ml-3 text-2xl" />{" "}
                </BtnBorderAnim>

                <BtnBorderAnim onClick={hideLanding} className="mb-4">
                  Download <HiOutlineCloudDownload className="ml-3 text-2xl" />{" "}
                </BtnBorderAnim>
              </div>
            </div>
            <span className="absolute top-0 left-0 w-[150px] h-[150px] sm:w-20 sm:h-20 border-one-dark border-4 border-r-0 border-b-0"></span>
            <span className="absolute top-0 right-0 w-[150px] h-[150px] sm:w-20 sm:h-20 border-one-dark border-4 border-l-0 border-b-0"></span>
            <span className="absolute bottom-0 right-0 w-[150px] h-[150px] sm:w-20 sm:h-20 border-one-dark border-4 border-l-0 border-t-0"></span>
            <span className="absolute bottom-0 left-0 w-[150px] h-[150px] sm:w-20 sm:h-20 border-one-dark border-4 border-r-0 border-t-0"></span>
          </div>
        </div>
      </FadeAnimation>
    </>
  );
};
export default Landing;
