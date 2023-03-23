import { useState, useEffect } from "react";
import useFirstPlayStore from "../../../store/first-play-store";
import useMusicsStore from "../../../store/musics-store";

const useMusics = () => {
  const [clickOnSearch, setClickOnSearch] = useState(false);
  const [showNewMusicsMessage, setShowNewMusicMessage] = useState(false);
  const [fetchStatus, musics, infinityLoading, useInfinit] = useMusicsStore(
    (state) => [
      state.status,
      state.musics,
      state.infinityLoading,
      state.useInfinit,
    ]
  );
  const [firstPlay] = useFirstPlayStore((state) => [state.first]);

  useEffect(() => {
    if (!infinityLoading) {
      setShowNewMusicMessage(false);
    }
    if (!infinityLoading && useInfinit) {
      setShowNewMusicMessage(true);
      setTimeout(() => {
        setShowNewMusicMessage(false);
      }, 1000);
    }
  }, [infinityLoading, useInfinit]);

  const toggleClickOnSearch = () => {
    setClickOnSearch((prev) => !prev);
  };
  return {
    clickOnSearch,
    toggleClickOnSearch,
    musics,
    fetchStatus,
    firstPlay,
    infinityLoading,
    showNewMusicsMessage,
  };
};
export default useMusics;
