import { create } from "zustand";
import { constants } from "../constants/constants";
import fetchRequest from "../utils/fetch-request/fetch-request";
import { MusicImpl } from "./musics-store";

interface TopMusicsImpl {
  musics: Array<MusicImpl>;
  status: "loading" | "done";
  fetch(): void;
}
interface TopMusicsApiImpl {
  result: Array<MusicImpl>;
}
const useTopMusicsStore = create<TopMusicsImpl>((set) => ({
  musics: [],
  status: "loading",
  async fetch() {
    const {
      data: {
        result: { result },
      },
      isError,
    } = await fetchRequest<TopMusicsApiImpl>({
      url: constants.user.topMusics,
    });
    setTimeout(() => {
      set({ musics: isError ? [] : result, status: "done" });
    }, 3000);
  },
}));

useTopMusicsStore.getState().fetch();

export default useTopMusicsStore;
