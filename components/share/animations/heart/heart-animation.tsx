import HeartAnimImpl from "./types";

const HeartAnimation = ({ first, next, onClick, show }: HeartAnimImpl) => {
  return (
    <>
      <div
        onClick={onClick}
        className="active:scale-75 transition-all duration-200"
      >
        {show === "first" ? first : next}
      </div>
    </>
  );
};
export default HeartAnimation;
