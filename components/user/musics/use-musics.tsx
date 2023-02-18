import { useState } from "react";
import useMusicsStore from "../../../store/musics-store";

const useMusics = () => {
  const [clickOnSearch, setClickOnSearch] = useState(false);
  const [fetchStatus, musics] = useMusicsStore((state) => [
    state.status,
    state.musics,
  ]);
  const toggleClickOnSearch = () => {
    setClickOnSearch((prev) => !prev);
  };
  return { clickOnSearch, toggleClickOnSearch, musics, fetchStatus };
};
export default useMusics;
