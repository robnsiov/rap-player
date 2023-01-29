import { create } from "zustand";
import fetchRequest from "../utils/fetch-request/fetch-request";

type MusicNames = Array<{ name: string; id: number }>;

interface MusicNamesStoreImpl {
  musicMames: MusicNames;
  fetch(): void;
}

const useMusicNamesStore = create<MusicNamesStoreImpl>((set) => ({
  musicMames: [],
  loading: false,
  async fetch() {
    const { data, isError } = await fetchRequest<MusicNames>({
      url: "/music-names",
    });
    set({
      musicMames: isError ? [] : data.result,
    });
  },
}));

useMusicNamesStore.getState().fetch();

export default useMusicNamesStore;
