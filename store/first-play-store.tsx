import { create } from "zustand";

interface FirstPlayImpl {
  first: boolean;
  setFirst(type: boolean): void;
}

const useFirstPlayStore = create<FirstPlayImpl>((set) => ({
  first: false,
  setFirst(type) {
    set({ first: type });
  },
}));

export default useFirstPlayStore;
