import { useState } from "react";
import useMusicsStore from "../../../store/musics-store";

const useMusics = () => {
  const [clickOnSearch, setClickOnSearch] = useState(false);
  const [musics] = useMusicsStore((state) => [state.musics]);
  const toggleClickOnSearch = () => {
    setClickOnSearch((prev) => !prev);
  };
  return { clickOnSearch, toggleClickOnSearch, musics };
};
export default useMusics;
