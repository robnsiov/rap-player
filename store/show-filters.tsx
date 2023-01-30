import { create } from "zustand";

interface ShowFiltersImpl {
  show: boolean;
  onChange(status: boolean): void;
}

const useShowFiltersStore = create<ShowFiltersImpl>((set) => ({
  show: false,
  onChange(status: boolean) {
    set({ show: status });
  },
}));

export default useShowFiltersStore;
