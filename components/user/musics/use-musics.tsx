import { useState } from "react";

const useMusics = () => {
  const [clickOnSearch, setClickOnSearch] = useState(false);
  const toggleClickOnSearch = () => {
    setClickOnSearch((prev) => !prev);
  };
  return { clickOnSearch, toggleClickOnSearch };
};
export default useMusics;
