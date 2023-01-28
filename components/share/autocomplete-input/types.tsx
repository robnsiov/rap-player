export interface AutocompleteInput {
  id: number;
  name: string;
}

export default interface AutocompleteInputImpl {
  items: Array<AutocompleteInput>;
  onSelect(item: AutocompleteInput): void;
  placeholder: string;
  styles?: object;
  formatResult: Function | undefined;
}
