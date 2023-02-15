import { useEffect, useState } from "react";

const useSidebar = () => {
  const [closeSidebar, setClosesidebar] = useState(false);

  useEffect(() => {
    const trigger = () => {
      if (innerWidth <= 767) setClosesidebar(true);
      else setClosesidebar(false);
    };
    window.addEventListener("resize", trigger);
    return () => window.removeEventListener("resize", trigger);
  }, []);

  

  return { closeSidebar, setClosesidebar };
};
export default useSidebar;
