import classes from "./btn-border-anim.module.scss";
import BtnBorderAnim from "./types";

const BtnBorderAnim = ({ children, onClick, className }: BtnBorderAnim) => {
  return (
    <>
      <div onClick={onClick} className={`${classes["btn"]} ${className}`}>
        <svg className={classes["btn__border"]}>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        <div className="flex items-center justify-center">{children}</div>
      </div>
    </>
  );
};
export default BtnBorderAnim;
