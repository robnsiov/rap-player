import useMusicDemoStore from "../../../../store/music-demo-store";

const useSingleMusic = () => {
  const [setDemo] = useMusicDemoStore((state) => [state.setDemo]);
  const setDemoData = ({ title, demo }: { title: string; demo: string }) => {
    setDemo({ title, demo });
  };
  return { setDemoData };
};
export default useSingleMusic;
