"use client";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import FadeAnimation from "../animations/fade/fade-animation";
import SkeletonLoadingImpl from "./types";

const SkeletonLoading = ({
  className = "",
  containerClassName = "",
  fadeClassName = "",
  count = 1,
  inProp,
  baseColor = "#2c313a",
  highlightColor = "#181d27f2",
  noFade = false,
}: SkeletonLoadingImpl) => {
  return (
    <>
      {noFade ? (
        <>
          {inProp && (
            <SkeletonTheme
              baseColor={baseColor}
              highlightColor={highlightColor}
            >
              <Skeleton
                count={count}
                containerClassName={`w-full h-full flex flex-col ${containerClassName}`}
                className={className}
                inline={true}
              />
            </SkeletonTheme>
          )}
        </>
      ) : (
        <FadeAnimation
          inProp={inProp}
          className={`w-full h-full overflow-hidden rounded-2xl ${fadeClassName}`}
        >
          <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
            <Skeleton
              count={count}
              containerClassName={`w-full h-full flex flex-col ${containerClassName}`}
              className={className}
              inline={true}
            />
          </SkeletonTheme>
        </FadeAnimation>
      )}
    </>
  );
};
export default SkeletonLoading;
