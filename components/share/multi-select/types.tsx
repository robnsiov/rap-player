import { MultiValue, OnChangeValue } from "react-select";

export type MultiSelectInput = MultiValue<{
  value?: string;
  label?: string;
  id?: number;
}>;

export default interface MultiSelectImpl {
  options: Array<object>;
  placeholder: string;
  onChange(data: MultiSelectInput): void;
  styles?: object;
  loading?: boolean
}
