import { LegacyRef, MutableRefObject, useRef, useState } from "react";

import { useOnClickOutside } from "usehooks-ts";

const useVolume = ({
  ref,
}: {
  ref: MutableRefObject<HTMLDivElement | undefined>;
}) => {
  const [showVolumePage, setShowVolumePage] = useState(false);

  const toggleShowVolumePage = () => {
    setShowVolumePage((prev) => !prev);
  };

  useOnClickOutside(
    ref as MutableRefObject<HTMLDivElement>,
    toggleShowVolumePage
  );

  return { showVolumePage, toggleShowVolumePage };
};
export default useVolume;
