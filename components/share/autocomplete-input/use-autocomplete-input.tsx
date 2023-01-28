import { AutocompleteInput } from "./types";

type UseAutoCompleteInputImpl = (item: AutocompleteInput) => void;

const useAutocompleteInput = (onSelect: UseAutoCompleteInputImpl) => {
  const onSearch = (value: string) => {
    onSelect({ id: -1, name: value });
  };
  return { onSearch };
};
export default useAutocompleteInput;
