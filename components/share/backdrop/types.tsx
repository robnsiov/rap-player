export default interface BackdropImpl {
  children: React.ReactNode;
  toggleBackdrop?(): void;
  showBackdrop: boolean;
}
