import { useEffect, useState } from "react";
import { constants } from "../../../constants/constants";
import useMusicPageStore from "../../../store/music-page-store";
import useSingleMusicStore from "../../../store/single-music-store";
import fetchRequest from "../../../utils/fetch-request/fetch-request";
import localForage from "localforage";

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
  const [likedMusics, setLikedMusics] = useState<Array<number>>([]);

  useEffect(() => {
    localForage.config({
      storeName: "liked",
      name: "liked",
    });
    localForage.getItem("liked").then((value) => {
      if (Array.isArray(value) && value.length !== 0) {
        setLikedMusics(value);
      }
    });
  }, []);

  const likeMusic = async (id: number) => {
    setLikedMusics((prev) => {
      const liked = [...prev];
      liked.push(id);
      localForage.setItem("liked", liked);
      return liked;
    });
    await fetchRequest({
      method: "POST",
      url: constants.user.like,
      inputData: { id: `${id}` },
    });
  };
  const dislikeMusic = async (id: number) => {
    setLikedMusics((prev) => {
      const liked = [...prev];
      const idx = liked.indexOf(id);
      liked.splice(idx, 1);
      localForage.setItem("liked", liked);
      return liked;
    });
    await fetchRequest({
      method: "POST",
      url: constants.user.dislike,
      inputData: { id: `${id}` },
    });
  };

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
    likeMusic,
    dislikeMusic,
    likedMusics,
  };
};
export default useMusic;
