import { ReactSearchAutocomplete } from "react-search-autocomplete";
import AutocompleteInputImpl from "./types";
import useAutocompleteInput from "./use-autocomplete-input";

const AutocompleteInput = ({
  items,
  onSelect,
  placeholder,
  styles = {},
  formatResult,
}: AutocompleteInputImpl) => {
  const { onSearch } = useAutocompleteInput(onSelect);

  const defaultStyles = {
    height: "40px",
    border: "2px solid #181D27",
    backgroundColor: "#2c313a",
    boxShadow: "",
    color: "#9198A3",
    placeholderColor: "#9198A3",
    fontSize: "14px",
    borderRadius: "6px",
    lineColor: "#373e4a",
    iconColor: "#444f6a",
    clearIconMargin: "4px 8px",
    hoverBackgroundColor: "",
    searchIconMargin: "0 0 0 8px",
    zIndex: 50,
    ...styles,
  };
  return (
    <>
      <ReactSearchAutocomplete
        items={items}
        onSearch={onSearch}
        // onHover={handleOnHover}
        // onFocus={handleOnFocus}
        onSelect={onSelect}
        autoFocus
        formatResult={formatResult}
        placeholder={placeholder}
        styling={{ ...defaultStyles }}
      />
    </>
  );
};
export default AutocompleteInput;
