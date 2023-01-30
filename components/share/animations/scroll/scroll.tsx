"use client";

import dynamic from "next/dynamic";
import ScrollImpl from "./types";

const Scrollbar = dynamic(() => import("react-custom-scrollbars-2"), {
  ssr: false,
});
const Scroll = ({ children }: ScrollImpl) => {
  console.log(1);
  return (
    <>
      <Scrollbar
        style={{ width: "100%", height: "100%" }}
        autoHide={true}
        renderTrackVertical={() => (
          <span className="w-[2px] h-full bg-gray-800 absolute right-0 top-0 rounded-lg z-[10]"></span>
        )}
      >
        {children}
      </Scrollbar>
    </>
  );
};
export default Scroll;
