import ScaleImpl from "./types";

const ScaleAnimation = ({
  children,
  className = "",
  scale,
  activeClassName = "",
}: ScaleImpl) => {
  return (
    <>
      <div
        className={`active:scale-[${scale}] duration-200 transition-all group relative active:border-gray-100 active:text-gray-100 ${className} ${activeClassName}`}
      >
        <span className="absolute -z-10 inset-0 bg-[#ffffffa3] opacity-20 blur-lg"></span>
        {children}
      </div>
    </>
  );
};
export default ScaleAnimation;
