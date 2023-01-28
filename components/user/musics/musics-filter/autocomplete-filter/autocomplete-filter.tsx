import AutocompleteInput from "../../../../share/autocomplete-input/autocomplete-input";
import AutocompleteFilter from "./types";

const AutocompleteFilter = ({
  formatResult,
  items,
  onSelect,
  placeholder,
}: AutocompleteFilter) => {
  return (
    <>
      <div className="flex p-3 pt-0 text-sm items-center justify-end w-full">
        <div className="w-full">
          <AutocompleteInput
            items={items}
            onSelect={onSelect}
            formatResult={formatResult}
            placeholder={placeholder}
          />
        </div>
      </div>
    </>
  );
};
export default AutocompleteFilter;
