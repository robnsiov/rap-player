import { useState } from "react";

const useButton = ({
  loader,
  onClick,
}: {
  onClick: () => void;
  loader: boolean;
}) => {
  const [active, setActive] = useState(false);
  const onPointerDown = () => {
    setActive(true);
  };
  const onPointerUp = () => {
    setActive(false);
  };
  const clickOnBtn = () => {
    if (loader) return;
    onClick();
  };
  return { active, onPointerDown, onPointerUp, clickOnBtn };
};

export default useButton;
