"use client";

import Link from "next/link";
import { MdOutlineWindow } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import useSidebar from "./use-sidebar";
import { usePathname } from "next/navigation";
import SidebarItem from "./sidebar-item/sidebar-item";
import { FiUploadCloud } from "react-icons/fi";

const Sidebar = () => {
  const { setClosesidebar, closeSidebar } = useSidebar();
  const pathname = usePathname();

  if (pathname === "/admin/auth") return <></>;
  return (
    <>
      <div
        className={`bg-gray-800  text-gray-200
      flex justify-start items-start flex-col h-screen 
      border-r-2 border-r-gray-300 md:min-w-[54px] md:max-w-[54px] relative ${
        closeSidebar
          ? "min-w-[54px] max-w-[54px]"
          : "max-w-[170px] min-w-[170px]"
      }`}
      >
        <span
          onClick={() => setClosesidebar(!closeSidebar)}
          className="absolute top-3 -right-2 w-2 h-4 bg-gray-700
         rounded rounded-l-none md:hidden cursor-pointer"
        ></span>
        <div className="w-full flex justify-start items-start flex-col p-2">
          <SidebarItem
            title="Categories"
            closeSidebar={closeSidebar}
            href="/category"
          >
            <BiCategoryAlt />
          </SidebarItem>
          <SidebarItem
            title="Uploader"
            closeSidebar={closeSidebar}
            href="/uploader"
          >
            <FiUploadCloud />
          </SidebarItem>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
