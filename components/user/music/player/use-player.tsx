import useMusicsStore, { MusicImpl } from "../../../../store/musics-store";
import useSingleMusicStore from "../../../../store/single-music-store";
import { useRef, useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import useCurrentTimeMusicStore from "../../../../store/current-time-music-store";
import useCurrentStatusMusicStore from "../../../../store/current-status-music-store";
import useMusicDemoStore from "../../../../store/music-demo-store";
import useActivePlaylistStore from "../../../../store/active-playlist";
import useTopMusicsStore from "../../../../store/top-musics-store";

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
  const [volume, setVolume] = useState([0.8]);

  const [playlistType] = useActivePlaylistStore((state) => [state.playlist]);
  const [topMusics] = useTopMusicsStore((state) => [state.musics]);

  const playerRef = useRef<AudioPlayer>(null);

  useEffect(() => {
    if (played) playerRef.current?.audio.current?.play();
    else playerRef.current?.audio.current?.pause();
  }, [played]);

  useEffect(() => {
    const audio: HTMLAudioElement = playerRef?.current?.audio
      .current as HTMLAudioElement;
    audio.volume = volume[0];
  }, [volume]);

  const changeVolume = (volume: Array<number>) => {
    setVolume(volume);
  };

  const clearDemo = () => {
    if (demo.length !== 0) {
      setDemo({ title: "", demo: "" });
    }
  };

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
    let music: MusicImpl;
    switch (playlistType) {
      case "main-musics":
        music = musics[index];
        break;
      case "top-musics":
        music = topMusics[index];
        break;
      default:
        music = musics[index];
        break;
    }
    singleMusicChange({ ...music, index });
  };
  const nextTrack = () => {
    clearDemo();
    let nextIndex = index + 1;
    let playlist: Array<MusicImpl>;
    switch (playlistType) {
      case "main-musics":
        playlist = musics;
        break;
      case "top-musics":
        playlist = topMusics;
        break;
      default:
        playlist = musics;
        break;
    }

    if (index >= playlist.length - 1) {
      nextIndex = 0;
    }
    findMusicAndSet(nextIndex);
  };
  const prevTrack = () => {
    clearDemo();
    let prevIndex = index - 1;
    let playlist: Array<MusicImpl>;
    switch (playlistType) {
      case "main-musics":
        playlist = musics;
        break;
      case "top-musics":
        playlist = topMusics;
        break;
      default:
        playlist = musics;
        break;
    }
    if (index <= 0) {
      prevIndex = playlist.length - 1;
    }
    findMusicAndSet(prevIndex);
  };

  const onEndedMusic = () => {
    const loop = playerRef.current?.audio.current?.loop;
    if (!loop) nextTrack();
  };

  return {
    nextTrack,
    prevTrack,
    playerRef,
    onListenPlayer,
    onPause,
    onPlay,
    clearDemo,
    changeVolume,
    volume,
    onEndedMusic,
  };
};
export default usePlayer;
