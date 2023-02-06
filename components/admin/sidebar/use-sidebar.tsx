import { useEffect, useState } from "react";

const useSidebar = () => {
  const [closeSidebar, setClosesidebar] = useState(false);

  useEffect(() => {
    const trigger = () => {
      if (innerWidth <= 767) toggleSidebarStatus(true);
      else toggleSidebarStatus(false);
    };
    window.addEventListener("resize", trigger);
    return () => window.removeEventListener("resize", trigger);
  }, []);

  const toggleSidebarStatus = (value?: boolean) => {
    setClosesidebar((prev) => value ?? !prev);
  };

  return { closeSidebar, toggleSidebarStatus };
};
export default useSidebar;
