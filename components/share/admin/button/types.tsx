export default interface ButtonImpl {
  onClick?(): void;
  fill?: boolean;
  title: string;
  loader?: boolean;
  type: "button" | "submit";
}
