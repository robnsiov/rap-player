import Sidebar from "../../components/admin/sidebar/sidebar";
import ToastContainer from "../../components/admin/toast-container/toast-container";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen w-full flex justify-start items-start flex-col bg-gray-300/50">
        <ToastContainer />
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default AdminLayout;
