import { useEffect, useState } from "react";
import useCurrentStatusMusicStore from "../../../../store/current-status-music-store";
import useMusicDemoStore from "../../../../store/music-demo-store";
import useMusicPageStore from "../../../../store/music-page-store";
import useSingleMusicStore from "../../../../store/single-music-store";

const useActiveMusic = () => {
  const [showingMusicPage, onChange] = useMusicPageStore((state) => [
    state.show,
    state.onChange,
  ]);
  const [artists, title, cover, id] = useSingleMusicStore((state) => [
    state.artists,
    state.title,
    state.cover,
    state.id,
  ]);
  const [showActiveMusic, setShowActiveMusic] = useState(false);
  const [played, onChangeCurrentStatusMusic] = useCurrentStatusMusicStore(
    (state) => [state.played, state.onChange]
  );
  const [demo, setDemo] = useMusicDemoStore((state) => [
    state.demo,
    state.setDemo,
  ]);

  const togglePlayePauseMusic = () => {
    if (demo.length !== 0) setDemo({ demo: "", title: "" });
    onChangeCurrentStatusMusic({ played: !played });
  };

  useEffect(() => {
    setShowActiveMusic(false);
    if (!showingMusicPage && id !== -1) {
      setShowActiveMusic(true);
    } else {
      setShowActiveMusic(false);
    }

    return () => {
      // clearTimeout(timer);
    };
  }, [id, showingMusicPage]);

  const showMusicPage = () => {
    onChange(true);
  };

  return {
    showMusicPage,
    artists,
    title,
    cover,
    id,
    showingMusicPage,
    showActiveMusic,
    played,
    togglePlayePauseMusic,
  };
};
export default useActiveMusic;
