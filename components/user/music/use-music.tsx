import { useEffect, useState } from "react";
import useMusicPageStore from "../../../store/music-page-store";
import useSingleMusicStore from "../../../store/single-music-store";

const useMusic = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [mdSize, setMdSize] = useState(false);
  const [showMusicPage, onChange] = useMusicPageStore((state) => [
    state.show,
    state.onChange,
  ]);
  const [artists, title, cover, id, index, src] = useSingleMusicStore(
    (state) => [
      state.artists,
      state.title,
      state.cover,
      state.id,
      state.index,
      state.src,
    ]
  );
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(src);
  };

  const changeCopyMessageShowing = (show: boolean) => {
    copyToClipBoard();
    setShowCopyMessage(show);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      changeCopyMessageShowing(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, [showCopyMessage]);

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

  const toggleBackdrop = () => {
    setShowBackdrop((prev) => !prev);
  };

  const hidePageMusic = () => {
    onChange(false);
  };

  return {
    toggleBackdrop,
    showBackdrop,
    showMusicPage,
    mdSize,
    hidePageMusic,
    artists,
    cover,
    title,
    id,
    index,
    src,
    showCopyMessage,
    changeCopyMessageShowing,
  };
};
export default useMusic;
