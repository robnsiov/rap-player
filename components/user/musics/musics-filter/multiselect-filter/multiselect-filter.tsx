import MultiSelect from "../../../../share/multi-select/multi-select";
import MultiSelectFilterImpl from "./types";

const MultiSelectFilter = ({ options, placeholder }: MultiSelectFilterImpl) => {
  return (
    <>
      <div className="flex p-3 pt-0 text-sm items-center justify-end w-full">
        <div className="w-full">
          <MultiSelect options={options} placeholder={placeholder} />
        </div>
      </div>
    </>
  );
};
export default MultiSelectFilter;
