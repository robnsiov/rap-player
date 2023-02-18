"use client";

import dynamic from "next/dynamic";
import ScrollImpl from "./types";

import { useRef, useState, useEffect } from "react";
const Scrollbar = dynamic(() => import("react-custom-scrollbars-2"), {
  ssr: false,
});
const Scroll = ({ children, count }: ScrollImpl) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(wrapper.current?.offsetHeight as number);
  }, []);
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const res = e.currentTarget.scrollTop + height;
    const end = 76 * count;
    console.log(res === end);
  };
  return (
    <>
      <div className="w-full h-full flex" ref={wrapper}>
        <Scrollbar
          style={{ width: "100%", height: "100%" }}
          autoHide={true}
          onScroll={handleScroll}
          autoHideTimeout={200}
          renderThumbVertical={() => <span className=""></span>}
        >
          <div className="w-full flex items-center justify-start flex-col relative">
            {children}
          </div>
        </Scrollbar>
      </div>
    </>
  );
};
export default Scroll;
