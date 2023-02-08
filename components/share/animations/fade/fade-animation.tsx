"use client";

import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import FadeAnimImpl from "./types";

function FadeAnimation({
  inProp,
  children,
  className = "",
  style = {},
}: FadeAnimImpl) {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={inProp}
      nodeRef={nodeRef}
      timeout={300}
      classNames={{
        //   appear: "my-appear",
        //   appearActive: "my-active-appear",
        //   appearDone: "my-done-appear",
        enter: "fade-enter",
        enterActive: "fade-enter-active",
        //   enterDone: "my-done-enter",
        exit: "fade-exit",
        exitActive: "fade-exit-active",
        //   exitDone: "my-done-exit",
      }}
      unmountOnExit
    >
      <div
        // className="w-full h-full flex items-center justify-center"
        className={className}
        ref={nodeRef}
        style={style}
      >
        {children}
      </div>
    </CSSTransition>
  );
}

export default FadeAnimation;
