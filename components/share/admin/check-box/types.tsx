export default interface CheckBoxImpl {
  checked: boolean;
  onChange(check: boolean): void;
  styles?: Object;
  label: string;
  error?: string | undefined;
  touched?: boolean;
}
