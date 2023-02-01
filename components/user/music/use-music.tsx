import { useEffect, useState } from "react";
import useMusicPageStore from "../../../store/music-page-store";

const useMusic = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [mdSize, setMdSize] = useState(false);
  const [showMusicPage, onChange] = useMusicPageStore((state) => [
    state.show,
    state.onChange,
  ]);

  const updateMdSize = (size: number) => {
    setMdSize(size <= 767 || false);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      updateMdSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        updateMdSize(window.innerWidth);
      });
    };
  }, []);

  useEffect(() => {
    console.log(mdSize);
  }, [mdSize]);

  const toggleBackdrop = () => {
    setShowBackdrop((prev) => !prev);
  };

  const hidePageMusic = () => {
    onChange(false);
  };

  return { toggleBackdrop, showBackdrop, showMusicPage, mdSize, hidePageMusic };
};
export default useMusic;
