import useMusicsStore from "../../../../store/musics-store";
import useSingleMusicStore from "../../../../store/single-music-store";
import { useRef, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import useCurrentTimeMusicStore from "../../../../store/current-time-music-store";
import useCurrentStatusMusicStore from "../../../../store/current-status-music-store";
import useMusicDemoStore from "../../../../store/music-demo-store";

const usePlayer = () => {
  const [index, singleMusicChange] = useSingleMusicStore((state) => [
    state.index,
    state.onChange,
  ]);
  const [musics] = useMusicsStore((state) => [state.musics]);
  const [onChangeCurrentTimeMusic] = useCurrentTimeMusicStore((state) => [
    state.onChange,
  ]);

  const [onChangeCurrentStatusMusic, played] = useCurrentStatusMusicStore(
    (state) => [state.onChange, state.played]
  );
  const [demo, setDemo] = useMusicDemoStore((state) => [
    state.demo,
    state.setDemo,
  ]);

  const playerRef = useRef<AudioPlayer>(null);

  const clearDemo = () => {
    if (demo.length !== 0) {
      console.log(2);
      setDemo({ title: "", demo: "" });
    }
  };
  useEffect(() => {
    if (played) playerRef.current?.audio.current?.play();
    else playerRef.current?.audio.current?.pause();
  }, [played]);

  const onPlay = () => {
    // clearDemo();
    onChangeCurrentStatusMusic({ played: true });
  };
  const onPause = () => {
    // clearDemo();
    onChangeCurrentStatusMusic({ played: false });
  };

  const onListenPlayer = () => {
    const currentTime = playerRef.current?.audio.current?.currentTime ?? 0;
    const wholeTime = playerRef.current?.audio.current?.duration ?? 0;
    const percentElapsedTime = (currentTime * 100) / wholeTime;
    onChangeCurrentTimeMusic({
      percentElapsedTime: isNaN(percentElapsedTime) ? 0 : percentElapsedTime,
    });
  };

  const findMusicAndSet = (index: number) => {
    const music = musics[index];
    singleMusicChange({ ...music, index });
  };
  const nextTrack = () => {
    clearDemo();
    let nextIndex = index + 1;
    if (index > musics.length - 1) {
      nextIndex = 0;
    }
    findMusicAndSet(nextIndex);
  };
  const prevTrack = () => {
    clearDemo();
    let prevIndex = index - 1;
    if (index <= 0) {
      prevIndex = musics.length - 1;
    }
    findMusicAndSet(prevIndex);
  };

  return {
    nextTrack,
    prevTrack,
    playerRef,
    onListenPlayer,
    onPause,
    onPlay,
    clearDemo,
  };
};
export default usePlayer;
