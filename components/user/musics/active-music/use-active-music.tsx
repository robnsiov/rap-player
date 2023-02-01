import useMusicPageStore from "../../../../store/music-page-store";

const useActiveMusic = () => {
  const [onChange] = useMusicPageStore((state) => [state.onChange]);

  const showMusicPage = () => {
    onChange(true);
  };

  return { showMusicPage };
};
export default useActiveMusic;
