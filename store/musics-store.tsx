import { create } from "zustand";
import { constants } from "../constants/constants";
import fetchRequest from "../utils/fetch-request/fetch-request";
import useSingleMusicStore, { SingleMusic } from "./single-music-store";

export interface MusicImpl {
  id: number;
  src: string;
  title: string;
  cover: string;
  artists: Array<{ name: string; id: number }>;
  duration: number;
  demo?: string;
}

interface MusicsImpl {
  musics: Array<MusicImpl>;
  status: "loading" | "done";
  filtersLoading: boolean;
  infinityLoading: boolean;
  lastPage?: number;
  fetch(): void;
  paginationFetch(page: number): void;
  paginationFilters(page: number, filters: {}): void;
  filters(filters: {}): void;
  useInfinit: boolean;
}

interface MusicsApiImpl {
  result: { data: Array<MusicImpl> };
  last_page: number;
  to: number;
  total: number;
  per_page: number;
  from: number;
}

const useMusicsStore = create<MusicsImpl>((set, get) => ({
  musics: [],
  useInfinit: false,
  filtersLoading: false,
  infinityLoading: false,
  status: "loading",
  async fetch() {
    const {
      data: {
        result: { result },
      },
      isError,
    } = await fetchRequest<MusicsApiImpl>({
      url: constants.user.musics,
      onBefore() {
        set({ status: "loading" });
      },
    });
    useSingleMusicStore.getState().onChange(result.data[0] as SingleMusic);
    set({ musics: isError ? [] : result.data, status: "done" });
  },
  async paginationFetch(page) {
    const {
      data: {
        result: { result, last_page },
      },
      isError,
    } = await fetchRequest<MusicsApiImpl>({
      url: `${constants.user.musics}?page=${page}`,
      onBefore() {
        set({ infinityLoading: true });
      },
    });
    console.log(page, result);
    // useSingleMusicStore.getState().onChange(result[0] as SingleMusic);
    // console.log(last_page);
    set({
      musics: isError ? [] : [...get().musics, ...result.data],
      infinityLoading: false,
      lastPage: last_page as number,
      useInfinit: true,
    });
  },
  async paginationFilters(page, filters) {
    const { data, isError } = await fetchRequest<Array<MusicImpl>>({
      url: "/musics",
      onBefore() {
        set({ infinityLoading: true });
      },
    });
    useSingleMusicStore.getState().onChange(data.result[0] as SingleMusic);
    set({
      musics: isError ? [] : [...get().musics, ...data.result],
      infinityLoading: false,
      useInfinit: true,
    });
  },
  async filters(filters) {
    const { data, isError } = await fetchRequest<Array<MusicImpl>>({
      method: "POST",
      url: "/musics",
      inputData: filters,
      onBefore() {
        set({ filtersLoading: true });
      },
    });
    useSingleMusicStore.getState().onChange(data.result[0] as SingleMusic);
    set({ musics: isError ? [] : data.result, filtersLoading: false });
  },
}));

useMusicsStore.getState().fetch();

export default useMusicsStore;
