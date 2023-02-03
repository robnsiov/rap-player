import { useEffect, useState } from "react";
import useCurrentStatusMusicStore from "../../../../store/current-status-music-store";
import useMusicDemoStore from "../../../../store/music-demo-store";
import useSingleMusicStore from "../../../../store/single-music-store";

const useDemoMusic = () => {
  const [demo, title, setDemo] = useMusicDemoStore((state) => [
    state.demo,
    state.title,
    state.setDemo,
  ]);
  const [audio] = useState<HTMLAudioElement>(new Audio());
  const [onChangeCurrentStatusMusic] = useCurrentStatusMusicStore((state) => [
    state.onChange,
    state.played,
  ]);
  const [index] = useSingleMusicStore((state) => [state.index]);

  useEffect(() => {
    audio.addEventListener("ended", () => {
      setDemo({ title: "", demo: "" });
    });
  }, []);

  const clearDemo = () => {
    setDemo({ demo: "", title: "" });
    if (index !== -1) onChangeCurrentStatusMusic({ played: true });
  };

  useEffect(() => {
    if (demo.length !== 0) {
      audio.src = demo;
      audio.play();
    } else {
      audio.src = "";
      audio.pause();
    }
  }, [demo]);
  return { demo, title, clearDemo };
};
export default useDemoMusic;
