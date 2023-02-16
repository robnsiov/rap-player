"use client";
import useSidebar from "./use-sidebar";
import { usePathname } from "next/navigation";
import SidebarItem from "./sidebar-item/sidebar-item";

const Sidebar = () => {
  const { setClosesidebar, closeSidebar } = useSidebar();
  const pathname = usePathname();

  if (pathname === "/admin/auth") return <></>;
  return (
    <>
      <div
        className={`bg-gray-800  text-gray-200
      flex justify-start items-start flex-col h-screen 
      border-r-2 border-r-gray-300 md:min-w-[60px] md:max-w-[60px] relative ${
        closeSidebar
          ? "min-w-[60px] max-w-[60px]"
          : "max-w-[190px] min-w-[190px]"
      }`}
      >
        <span
          onClick={() => setClosesidebar(!closeSidebar)}
          className="absolute top-1.5 -right-[6px] w-[6px] h-4 bg-gray-700
         rounded rounded-l-none md:hidden cursor-pointer"
        ></span>
        <div className="w-full flex justify-start items-start flex-col p-2">
          <SidebarItem title="musics" closeSidebar={closeSidebar} href="/">
            🎧
          </SidebarItem>
          <SidebarItem
            title="Uploader"
            closeSidebar={closeSidebar}
            href="/uploader"
          >
            ☁️
          </SidebarItem>
          <SidebarItem
            title="Artists"
            closeSidebar={closeSidebar}
            href="/artists"
          >
            🎭
          </SidebarItem>

          <SidebarItem
            title="Categories"
            closeSidebar={closeSidebar}
            href="/categories"
          >
            🐈‍⬛
          </SidebarItem>
          <SidebarItem
            title="RemixCreators"
            closeSidebar={closeSidebar}
            href="/remix-creators"
          >
            🧑‍🤝‍🧑
          </SidebarItem>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
