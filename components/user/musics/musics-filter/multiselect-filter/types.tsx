import { MultiSelectInput } from "../../../../share/multi-select/types";

export default interface MultiSelectFilterImpl {
  options: Array<object>;
  placeholder: string;
  onChange(data: MultiSelectInput): void;
  loading?: boolean
}
