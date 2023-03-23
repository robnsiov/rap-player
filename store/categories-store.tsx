import { create } from "zustand";
import { constants } from "../constants/constants";
import fetchRequest from "../utils/fetch-request/fetch-request";

type Categories = Array<{
  value: string;
  label: string;
  title: string;
  id: number;
}>;

interface CategoriesStoreImpl {
  categories: Categories;
  loading: boolean;
  fetch(): void;
}
interface ArtistsApiImpl {
  result: Categories;
}

const useCategoriesStore = create<CategoriesStoreImpl>((set) => ({
  categories: [],
  loading: false,
  async fetch() {
    const {
      data: {
        result: { result },
      },
      isError,
    } = await fetchRequest<ArtistsApiImpl>({
      url: constants.user.categories,
    });
    result.forEach((cat) => {
      cat.label = cat.title;
      cat.value = cat.title;
    });
    set({
      categories: isError ? [] : result,
      loading: false,
    });
  },
}));

useCategoriesStore.getState().fetch();

export default useCategoriesStore;
