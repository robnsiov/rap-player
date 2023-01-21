import { MouseEventHandler, useState } from "react";

const useLanding = () => {
  const [hide, setHide] = useState(!false);
  const hideLanding = () => {
    setTimeout(() => {
      setHide(true);
    }, 250);
  };
  return { hide, hideLanding };
};

export default useLanding;
