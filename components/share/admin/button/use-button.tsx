import { useState } from "react";

const useButton = () => {
  const [active, setActive] = useState(false);
  const onPointerDown = () => {
    setActive(true);
  };
  const onPointerUp = () => {
    setActive(false);
  };
  return { active, onPointerDown, onPointerUp };
};

export default useButton;
