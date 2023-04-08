export default interface ProtectedImpl {
  children: React.ReactNode;
  adminProtect?: boolean; // for signin, signup
}
