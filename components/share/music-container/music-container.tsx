import ShadowBorder from "../../UI/borders/shadow-border";
import MusicContainerImpl from "./types";

const MusicContainer = ({
  children,
  className = "",
  innerClassName = "",
}: MusicContainerImpl) => {
  return (
    <>
      <div
        className={`h-full bg-one-dark rounded-2xl overflow-hidden flex justify-center items-center relative w-[350px] md:w-full p-0.5 ${className}`}
      >
        <ShadowBorder />
        <div
          className={`flex rounded-2xl h-full w-full items-center justify-start flex-col p-4 relative bg-one-dark z-50 ${innerClassName}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};
export default MusicContainer;
