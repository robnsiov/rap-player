import MultiSelect from "../../../../share/multi-select/multi-select";
import MultiSelectFilterImpl from "./types";

const MultiSelectFilter = ({
  options,
  placeholder,
  onChange,
  loading = true,
}: MultiSelectFilterImpl) => {
  return (
    <>
      <div className="flex p-3 pt-0 text-sm items-center justify-end w-full">
        <div className="w-full">
          <MultiSelect
            onChange={onChange}
            options={options}
            placeholder={placeholder}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};
export default MultiSelectFilter;
