import Switch from "react-switch";
import SwitchButtonImpl from "./types";

const SwitchButton = ({ checked, styles = {}, onChange }: SwitchButtonImpl) => {
  const defaultStyles = {
    activeBoxShadow: "0 0 1px 2px #373e4a",
    onColor: "#181D27",
    offColor: "#61666e",
    offHandleColor: "#373e4a",
    onHandleColor: "#373e4a",
    handleDiameter: 17,
    borderRadius: 999,
    width: 30,
    height: 6,
    ...styles,
  };
  return (
    <>
      <Switch
        onChange={onChange}
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
        {...defaultStyles}
      />
    </>
  );
};
export default SwitchButton;
