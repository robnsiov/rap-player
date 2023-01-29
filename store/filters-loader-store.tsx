import { create } from "zustand";

interface FiltersLoaderImpl {
  loader: boolean;
  showLoader(status: boolean): void;
}

const useFiltersLoaderStore = create<FiltersLoaderImpl>((set) => ({
  loader: false,
  showLoader(status: boolean) {
    set({ loader: status });
  },
}));

export default useFiltersLoaderStore;
