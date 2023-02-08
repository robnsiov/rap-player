export default interface ModalImpl {
  children: React.ReactNode;
  open: boolean;
  close(): void;
  className?: string
}
