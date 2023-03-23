"use client";

import Landing from "../landing/landing";
import Music from "../music/music";
import Musics from "../musics/musics";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Home = () => {
  const handle = useFullScreenHandle();

  return (
    <>
      <FullScreen handle={handle} className="w-full h-screen ">
        <Landing />
        <div
          onDoubleClick={() => {
            if (!handle.active) {
              handle.enter();
            }
          }}
          className="w-full h-full bg-one-white flex justify-center items-center p-8 md:p-2 relative"
        >
          <Music />
          <Musics
            setFullscreen={handle.enter}
            fullsreen={handle.active}
            exitFullscreen={handle.exit}
          />
        </div>
      </FullScreen>
    </>
  );
};
export default Home;
