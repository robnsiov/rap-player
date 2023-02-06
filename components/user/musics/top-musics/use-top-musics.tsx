import useActivePlaylistStore from "../../../../store/active-playlist";
import useMusicPageStore from "../../../../store/music-page-store";
import useSingleMusicStore, {
  SingleMusic,
} from "../../../../store/single-music-store";
import useTopMusicsStore from "../../../../store/top-musics-store";

const useTopMusics = () => {
  const [fetchStatus, musics] = useTopMusicsStore((state) => [
    state.status,
    state.musics,
  ]);
  const [muiscPageOnChange] = useMusicPageStore((state) => [state.onChange]);
  const [singleMusicOnchange] = useSingleMusicStore((state) => [
    state.onChange,
  ]);

  const [onChangePlaylist] = useActivePlaylistStore((state) => [
    state.onChange,
  ]);

  const setTopMusicsToActivePlayer = () => {
    onChangePlaylist("top-musics");
  };

  const clickOnMusic = (music: SingleMusic) => {
    setTopMusicsToActivePlayer();
    muiscPageOnChange(true);
    singleMusicOnchange(music);
  };
  return { fetchStatus, musics, clickOnMusic };
};
export default useTopMusics;
