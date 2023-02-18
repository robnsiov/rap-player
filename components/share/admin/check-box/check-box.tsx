import SwitchButton from "../../switch-button/switch-button";
import CheckBoxImpl from "./types";

const CheckBox = ({
  checked,
  onChange,
  styles = {},
  label,
  error = undefined,
  touched = false,
}: CheckBoxImpl) => {
  return (
    <>
      <div className="flex items-start mb-2">
        <div className="flex items-center justify-start rounded-lg border-2 py-1 px-2 border-gray-500">
          <SwitchButton
            styles={{
              height: 12,
              width: 30,
              offColor: "#d5d5d5",
              onColor: "#999999",
              handleDiameter: 16,
              ...styles,
            }}
            checked={checked}
            onChange={onChange}
          />
          <div className="text-gray-500 mb-1 text-[16px] ml-2">
            {label}
            <span className="ml-0.5 text-sm font-semibold">
              ({checked ? "on" : "off"})
            </span>
            {error && touched && (
              <span className="text-xs text-red-500 ml-2 font-semibold">
                {error}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckBox;
