import { create } from "zustand";
import fetchRequest from "../utils/fetch-request/fetch-request";

type RemixCreators = Array<{ value: string; label: string; id: number }>;

interface RemixCreatorsStoreImpl {
  creators: RemixCreators;
  loading: boolean;
  fetch(): void;
}

const useRemixCreatorsStore = create<RemixCreatorsStoreImpl>((set) => ({
  creators: [],
  loading: false,
  async fetch() {
    const { data, isError } = await fetchRequest<RemixCreators>({
      url: "/category",
    });
    set({
      creators: isError ? [] : data.result,
      loading: false,
    });
  },
}));

useRemixCreatorsStore.getState().fetch();

export default useRemixCreatorsStore;
