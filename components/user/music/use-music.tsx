import { useState } from "react";

const useMusic = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const toggleBackdrop = () => {
    setShowBackdrop((prev) => !prev);
  };
  return { toggleBackdrop, showBackdrop };
};
export default useMusic;
