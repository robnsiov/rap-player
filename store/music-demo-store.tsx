import { create } from "zustand";

interface MusicDemoImpl {
  demo: string;
  title: string;
  setDemo({ demo, title }: { demo: string; title: string }): void;
}

const useMusicDemoStore = create<MusicDemoImpl>((set) => ({
  demo: "",
  title: "",
  setDemo({ demo, title }) {
    set({ demo: demo, title });
  },
}));

export default useMusicDemoStore;
