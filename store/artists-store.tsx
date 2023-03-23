import { create } from "zustand";
import { constants } from "../constants/constants";
import fetchRequest from "../utils/fetch-request/fetch-request";

type Artists = Array<{
  value: string;
  label: string;
  name: string;
  id: number;
}>;

interface ArtistsStoreImpl {
  artists: Artists;
  loading: boolean;
  fetch(): void;
}
interface ArtistsApiImpl {
  result: Artists;
}

const useArtistsStore = create<ArtistsStoreImpl>((set) => ({
  artists: [],
  loading: false,
  async fetch() {
    const {
      data: {
        result: { result },
      },
      isError,
    } = await fetchRequest<ArtistsApiImpl>({
      url: constants.user.artists,
    });
    result.forEach((art) => {
      art.label = art.name;
      art.value = art.name;
    });
    set({
      artists: isError ? [] : result,
      loading: false,
    });
  },
}));

useArtistsStore.getState().fetch();

export default useArtistsStore;
