import { create } from "zustand";
import fetchRequest from "../utils/fetch-request/fetch-request";

type Artists = Array<{ value: string; label: string; id: number }>;

interface ArtistsStoreImpl {
  artists: Artists;
  loading: boolean;
  fetch(): void;
}

const useArtistsStore = create<ArtistsStoreImpl>((set) => ({
  artists: [],
  loading: false,
  async fetch() {
    const { data, isError } = await fetchRequest<Artists>({
      url: "/category",
    });
    set({
      artists: isError ? [] : data.result,
      loading: false,
    });
  },
}));

useArtistsStore.getState().fetch();

export default useArtistsStore;
