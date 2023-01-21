export default interface HeartAnimImpl {
  onClick(): void;
  first: React.ReactNode;
  next: React.ReactNode;
  show: "first" | "next";
}
