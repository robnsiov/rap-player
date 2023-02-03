import useCurrentStatusMusicStore from "../../../../store/current-status-music-store";
import useCurrentTimeMusicStore from "../../../../store/current-time-music-store";
import useMusicDemoStore from "../../../../store/music-demo-store";
import useMusicPageStore from "../../../../store/music-page-store";
import useSingleMusicStore, {
  SingleMusic,
} from "../../../../store/single-music-store";

const useSingleMusic = () => {
  const [demo, setDemo] = useMusicDemoStore((state) => [
    state.demo,
    state.setDemo,
  ]);
  const [singleMusicOnchange, singleMusicId, singleMusicIndex] =
    useSingleMusicStore((state) => [state.onChange, state.id, state.index]);
  const [onChangeMusicPageStatus] = useMusicPageStore((state) => [
    state.onChange,
  ]);

  const [percentElapsedTime] = useCurrentTimeMusicStore((state) => [
    state.percentElapsedTime,
  ]);

  const [onChangeCurrentStatusMusic, played] = useCurrentStatusMusicStore((state) => [
    state.onChange,
    state.played,
  ]);

  const setDemoData = ({ title, demo }: { title: string; demo: string }) => {
    if (singleMusicIndex !== -1) onChangeCurrentStatusMusic({ played: false });
    setDemo({ title, demo });
  };
  const setMusicToPlay = (music: SingleMusic) => {
    if (demo.length !== 0) setDemo({ title: "", demo: "" });
    singleMusicOnchange(music);
    // onChangeMusicPageStatus(true);
  };
  return {
    setDemoData,
    setMusicToPlay,
    percentElapsedTime,
    singleMusicId,
    played,
  };
};
export default useSingleMusic;
