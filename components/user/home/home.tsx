"use client";

import Music from "../music/music";
import Musics from "../musics/musics";

const Home = () => {
  return (
    <>
      <div className="w-full h-full bg-one-white flex justify-center items-center p-8 md:p-2 relative">
        <Music />
        <Musics />
      </div>
    </>
  );
};
export default Home;
