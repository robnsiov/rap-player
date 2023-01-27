import classes from "./shadow-border.module.scss";

const ShadowBorder = () => {
  return (
    <>
      <div>
        <span className={`${classes["block"]} md:hidden`}></span>
        <span className="absolute inset-[-5px] bg-one-dark-200 hidden md:block"></span>
      </div>
    </>
  );
};
export default ShadowBorder;
