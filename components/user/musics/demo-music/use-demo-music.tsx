import { useEffect, useState } from "react";
import useMusicDemoStore from "../../../../store/music-demo-store";

const useDemoMusic = () => {
  const [demo, title, setDemo] = useMusicDemoStore((state) => [
    state.demo,
    state.title,
    state.setDemo,
  ]);
  const [audio] = useState<HTMLAudioElement>(new Audio());
  const clearDemo = () => {
    setDemo({ demo: "", title: "" });
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
