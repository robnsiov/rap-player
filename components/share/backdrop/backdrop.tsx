import BackdropImpl from "./types";

const Backdrop = ({
  children,
  showBackdrop,
  toggleBackdrop = () => {},
}: BackdropImpl) => {
  return (
    <>
      <div
        onClick={toggleBackdrop}
        className={` cursor-pointer absolute z-[100] backdrop-blur-2xl bg-back duration-200 inset-0 rounded-2xl grid place-items-center ${
          showBackdrop ? "opacity-100" : "opacity-0 invisible"
        }`}
      >
        {children}
      </div>
    </>
  );
};
export default Backdrop;
