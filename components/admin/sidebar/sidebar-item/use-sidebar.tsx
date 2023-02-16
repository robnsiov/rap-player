import { usePathname } from "next/navigation";

const useSidebarItem = ({ href }: { href: string }) => {
  const pathname = usePathname();

  return {
    match:
      (pathname?.includes(href) && href !== "/") ||
      (href === "/" && pathname === "/admin"),
  };
};
export default useSidebarItem;
