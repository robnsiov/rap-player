"use client";

import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import FadeAnimImpl from "./types";

function FadeScaleAnimation({
  inProp,
  children,
  className = "",
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
        enter: "fade-scale-enter",
        enterActive: "fade-scale-enter-active",
        //   enterDone: "my-done-enter",
        exit: "fade-scale-exit",
        exitActive: "fade-scale-exit-active",
        //   exitDone: "my-done-exit",
      }}
      unmountOnExit
    >
      <div className={className} ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );
}

export default FadeScaleAnimation;
