import { create } from "zustand";
import fetchRequest from "../utils/fetch-request/fetch-request";
import { MusicImpl } from "./musics-store";

interface TopMusicsImpl {
  musics: Array<MusicImpl>;
  status: "loading" | "done";
  fetch(): void;
}

const useTopMusicsStore = create<TopMusicsImpl>((set) => ({
  musics: [],
  status: "loading",
  async fetch() {
    const { data, isError } = await fetchRequest<Array<MusicImpl>>({
      url: "/top-musics",
    });
    setTimeout(() => {
      set({ musics: isError ? [] : data.result, status: "done" });
    }, 3000);
  },
}));

useTopMusicsStore.getState().fetch();

export default useTopMusicsStore;
