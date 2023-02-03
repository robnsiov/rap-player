import { create } from "zustand";

interface CurrentStatusMusicImpl {
  played: boolean;
  onChange({ played }: { played: boolean }): void;
}

const useCurrentStatusMusicStore = create<CurrentStatusMusicImpl>((set) => ({
  played: false,
  onChange({ played }) {
    set({ played });
  },
}));

export default useCurrentStatusMusicStore;
