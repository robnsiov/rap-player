import { AutocompleteInput } from "../../../../share/autocomplete-input/types";

export default interface AutocompleteFilter {
  items: Array<AutocompleteInput>;
  onSelect(item: AutocompleteInput): void;
  placeholder: string;
  formatResult: Function | undefined;
}
