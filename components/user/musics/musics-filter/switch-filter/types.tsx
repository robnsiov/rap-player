export default interface SwitchFilterImpl {
  checked: boolean;
  onChange(check: boolean): void;
  title: string;
}
