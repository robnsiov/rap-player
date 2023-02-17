export default interface MultiSelectImpl {
  label: string;
  selections: Array<{ title: string; id: number }>;
  onSelect(id: number): void;
  onClickDB(): void;
  error?: string | undefined;
  touched?: boolean;
}
