import { create } from "zustand";

interface MusicPageImpl {
  show: boolean;
  onChange(status: boolean): void;
}

const useMusicPageStore = create<MusicPageImpl>((set) => ({
  show: !false,
  onChange(status: boolean) {
    set({ show: status });
  },
}));

export default useMusicPageStore;
