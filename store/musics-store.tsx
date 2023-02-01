import { create } from "zustand";
import fetchRequest from "../utils/fetch-request/fetch-request";

interface MusicImpl {
  id: number;
  src: string;
  title: string;
  cover: string;
  artists: Array<{ name: string; id: number }>;
  duration: number;
  demo: string;
}

interface MusicsImpl {
  musics: Array<MusicImpl>;
  fetch(): void;
}

const useMusicsStore = create<MusicsImpl>((set) => ({
  musics: [],
  async fetch() {
    const { data, isError } = await fetchRequest<Array<MusicImpl>>({
      url: "/musics",
    });
    console.log(data.result);
    set({ musics: isError ? [] : data.result });
  },
}));

useMusicsStore.getState().fetch();

export default useMusicsStore;
