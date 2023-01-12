"use client";

import Image from "next/image";
import landing from "../../../public/images/landing.jpg";
import { BsPlayCircle } from "react-icons/bs";
import useLanding from "./use-landing";
import FadeAnimation from "../../share/animations/fade/fade-animation";

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
          <div className="absolute inset-24 z-40 flex items-center justify-center p-12 sm:inset-7 sm:p-2">
            <div className="max-w-4xl text-white w-full flex justify-center flex-col items-center text-center relative z-30">
              <span className="text-3xl">Welcome To</span>

              <h1 className="text-6xl sm:text-5xl my-8 font-extrabold break-word">
                R.GEN AGENCY LANDING PAGE COLLECTION
              </h1>
              <span
                onClick={hideLanding}
                className="drop-shadow-3xl 
              active:scale-[0.98]
            ring-2 ring-transparent hover:ring-one-dark
            transition-all
            duration-200
            flex items-center justify-center
          text-one-dark py-3 px-8 rounded-md bg-white font-medium cursor-pointer"
              >
                <BsPlayCircle className="mr-2 text-xl" />
                Play
              </span>
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
