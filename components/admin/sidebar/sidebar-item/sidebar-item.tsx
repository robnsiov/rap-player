"use client";

import Link from "next/link";
import SidebarItemsImpl from "./types";
import useSidebarItem from "./use-sidebar";

const SidebarItem = ({
  title,
  closeSidebar,
  children,
  href,
}: SidebarItemsImpl) => {
  const { match } = useSidebarItem({ href });
  return (
    <>
      <Link
        className={`mb-1 w-full flex justify-start items-center rounded-lg px-2 py-2 w-ful
        l hover:bg-gray-700 group ${match ? "admin-panel__active-link" : ""}`}
        href={`/admin${href}`}
      >
        {" "}
        <div className="text-xl">{children}</div>
        {!closeSidebar && <span className="ml-1 md:hidden">{title}</span>}
      </Link>
    </>
  );
};
export default SidebarItem;
