"use client";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import FadeAnimation from "../animations/fade/fade-animation";
import SkeletonLoadingImpl from "./types";

const SkeletonLoading = ({
  className = "",
  containerClassName = "w-full h-full flex",
  count = 1,
  inProp,
}: SkeletonLoadingImpl) => {
  return (
    <>
      <FadeAnimation
        inProp={inProp}
        className="w-full h-full rounded-2xl overflow-hidden"
      >
        <SkeletonTheme baseColor="#2c313a" highlightColor="#181d27f2">
          <Skeleton
            count={count}
            containerClassName={containerClassName}
            className={className}
          />
        </SkeletonTheme>
      </FadeAnimation>
    </>
  );
};
export default SkeletonLoading;
