import ScaleAnimation from "../../../../share/animations/scale/scale-animation";
import BtnWrapperImpl from "./types";

const BtnWrapper = ({ children }: BtnWrapperImpl) => {
  return (
    <ScaleAnimation
      innerClassName="bg-white"
      activeClassName="active:scale-[0.9]"
    >
      {children}
    </ScaleAnimation>
  );
};
export default BtnWrapper;
