import SwitchButton from "../../../../share/switch-button/switch-button";
import SwitchFilterImpl from "./types";

const SwitchFilter = ({ checked, onChange, title }: SwitchFilterImpl) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col w-full">
        <div className="flex p-3 pt-0 text-sm items-center justify-between w-full">
          <span>{title}</span>
          <SwitchButton checked={checked} onChange={onChange} />
        </div>
      </div>
    </>
  );
};
export default SwitchFilter;
