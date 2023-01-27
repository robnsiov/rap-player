import { useEffect, useState } from "react";

interface UseMusicsFilterImpl {
  toggleClickOnSearch(): void;
  clickOnSearch: boolean;
}

const useMusicsFilter = ({
  clickOnSearch,
  toggleClickOnSearch,
}: UseMusicsFilterImpl) => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [activeTopMusicsSwitch, setActiveTopMusicsSwithch] = useState(false);

  const toggleActiveTopMusicsSwitch = () => {
    setActiveTopMusicsSwithch((prev) => !prev);
  };

  const toggleShowBackdrop = () => {
    setTimeout(() => {
      setShowBackdrop((prev) => !prev);
    }, 50);
  };

  const handleOnSelectAutocompleInput = (item: object) => {
    console.log(item);
  };

  useEffect(() => {
    if (clickOnSearch) toggleShowBackdrop();
  }, [clickOnSearch]);

  useEffect(() => {
    if (showBackdrop) toggleClickOnSearch();
  }, [showBackdrop]);

  return {
    showBackdrop,
    toggleShowBackdrop,
    activeTopMusicsSwitch,
    toggleActiveTopMusicsSwitch,
    handleOnSelectAutocompleInput,
  };
};
export default useMusicsFilter;
