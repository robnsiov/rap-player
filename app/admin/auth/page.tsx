import AdminAuth from "../../../components/admin/auth/admin-auth";
import Protected from "../../../components/share/layout/protected/protected";

const Auth = () => {
  return (
    <>
      <Protected adminProtect={true}>
        <AdminAuth />
      </Protected>
    </>
  );
};
export default Auth;
