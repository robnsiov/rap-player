import { create } from "zustand";
import { MusicImpl } from "./musics-store";

export interface SingleMusic extends MusicImpl {
  index: number;
}

export interface SingleMusicImpl extends SingleMusic {
  onChange({}: SingleMusic): void;
}

const useSingleMusicStore = create<SingleMusicImpl>((set) => ({
  id: -1,
  title: "",
  cover: "",
  src: "",
  artists: [],
  duration: 0,
  index: -1,
  onChange(music) {
    set({ ...music });
  },
}));

export default useSingleMusicStore;
