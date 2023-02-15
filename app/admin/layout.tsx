import Sidebar from "../../components/admin/sidebar/sidebar";
import ToastContainer from "../../components/admin/toast-container/toast-container";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen w-full flex justify-start items-start  bg-gray-300/50">
        <ToastContainer />
        <Sidebar />
        <div className="w-full overflow-hidden">{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
