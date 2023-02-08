export default interface ErrorButtonImpl {
  onClick?(): void;
  fill?: boolean;
  title: string;
  loader?: boolean;
  type?: "button" | "submit";
}
