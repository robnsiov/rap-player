export default interface SwitchButtonImpl {
  checked: boolean;
  onChange(check: boolean): void;
  styles?: object;
}
