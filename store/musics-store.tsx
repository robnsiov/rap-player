import { create } from "zustand";
import fetchRequest from "../utils/fetch-request/fetch-request";
import useSingleMusicStore, { SingleMusic } from "./single-music-store";

export interface MusicImpl {
  id: number;
  src: string;
  title: string;
  cover: string;
  artists: Array<{ name: string; id: number }>;
  duration: number;
  demo?: string;
}

interface MusicsImpl {
  musics: Array<MusicImpl>;
  status: "loading" | "done";

  fetch(): void;
}

const useMusicsStore = create<MusicsImpl>((set) => ({
  musics: [],
  status: "loading",
  async fetch() {
    const { data, isError } = await fetchRequest<Array<MusicImpl>>({
      url: "/musics",
      onBefore() {
        set({ status: "loading" });
      },
    });
    useSingleMusicStore.getState().onChange(data.result[0] as SingleMusic);
    set({ musics: isError ? [] : data.result, status: "done" });
    setTimeout(() => {}, 3000);
  },
}));

useMusicsStore.getState().fetch();

export default useMusicsStore;
