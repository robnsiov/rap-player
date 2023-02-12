"use client";

import Link from "next/link";
import { MdOutlineWindow } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import useSidebar from "./use-sidebar";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const { toggleSidebarStatus, closeSidebar } = useSidebar();
  const pathname = usePathname();

  if (pathname === "/admin/auth") return <></>;
  return (
    <>
      <div
        className={`bg-gray-800 overflow-hidden text-gray-200
      flex justify-start items-start flex-col h-screen 
      border-r-2 border-r-gray-300 ${
        closeSidebar ? "min-w-[54px]" : "w-[250px]"
      }`}
      >
        <div className="w-full py-7 px-4 flex justify-end items-center bg-gray-900 md:hidden">
          <div
            className="relative group cursor-pointer"
            onClick={() => toggleSidebarStatus()}
          >
            <MdOutlineWindow className="text-gray-300 text-2xl group relative z-10" />
            <span className=" rounded-full transition-all duration-200 group-hover:scale-100 scale-0 absolute -inset-2 bg-gray-600/50"></span>
          </div>
        </div>
        <div className="w-full flex justify-start items-start flex-col p-2">
          <Link
            className="mb-1 flex justify-start items-center rounded-lg px-2 py-2 w-full hover:bg-gray-700 admin-panel__active-link group"
            href={"/"}
          >
            {" "}
            <BiCategoryAlt className="text-xl" />
            {!closeSidebar && <span className="ml-2">Categories</span>}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
