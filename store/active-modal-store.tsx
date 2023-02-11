import { create } from "zustand";

interface ActiveModalsImpl {
  zIndex: number;
  inc(): void;
  dec(): void;
}

const useActiveModalslStore = create<ActiveModalsImpl>((set, get) => ({
  zIndex: 999,
  inc() {
    set({ zIndex: get().zIndex + 1 });
  },
  dec() {
    set({ zIndex: get().zIndex + 1 - 1 });
  },
}));

export default useActiveModalslStore;
