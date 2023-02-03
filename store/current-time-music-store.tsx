import { create } from "zustand";

interface CurrentTimeMusicImpl {
  percentElapsedTime: number;
  onChange({ percentElapsedTime }: { percentElapsedTime: number }): void;
}

const useCurrentTimeMusicStore = create<CurrentTimeMusicImpl>((set) => ({
  percentElapsedTime: 0,
  onChange({ percentElapsedTime }) {
    set({ percentElapsedTime });
  },
}));

export default useCurrentTimeMusicStore;
