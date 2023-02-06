import { type } from "os";
import { create } from "zustand";

type playlists = "top-musics" | "main-musics";

interface ActivePlaylistImpl {
  playlist: "top-musics" | "main-musics";
  onChange(playlist: playlists): void;
}

const useActivePlaylistStore = create<ActivePlaylistImpl>((set) => ({
  playlist: "main-musics",
  onChange(playlist) {
    set({ playlist });
  },
}));

export default useActivePlaylistStore;
