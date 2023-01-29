import { create } from "zustand";
import fetchRequest from "../utils/fetch-request/fetch-request";

type Categories = Array<{ value: string; label: string; id: number }>;

interface CategoriesStoreImpl {
  categories: Categories;
  loading: boolean;
  fetch(): void;
}

const useCategoriesStore = create<CategoriesStoreImpl>((set) => ({
  categories: [],
  loading: false,
  async fetch() {
    const { data, isError } = await fetchRequest<Categories>({
      url: "/category",
    });
    set({
      categories: isError ? [] : data.result,
      loading: false,
    });
  },
}));

useCategoriesStore.getState().fetch();

export default useCategoriesStore;
