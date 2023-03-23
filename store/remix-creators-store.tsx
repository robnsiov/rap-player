import { create } from "zustand";
import { constants } from "../constants/constants";
import fetchRequest from "../utils/fetch-request/fetch-request";

type RemixCreators = Array<{
  value: string;
  label: string;
  name: string;
  id: number;
}>;

interface RemixCreatorsStoreImpl {
  creators: RemixCreators;
  loading: boolean;
  fetch(): void;
}

interface CreatorsApiImpl {
  result: RemixCreators;
}

const useRemixCreatorsStore = create<RemixCreatorsStoreImpl>((set) => ({
  creators: [],
  loading: false,
  async fetch() {
    const {
      data: {
        result: { result },
      },
      isError,
    } = await fetchRequest<CreatorsApiImpl>({
      url: constants.user.remixCreators,
    });
    result.forEach((creator) => {
      creator.label = creator.name;
      creator.value = creator.name;
    });
    set({
      creators: isError ? [] : result,
      loading: false,
    });
  },
}));

useRemixCreatorsStore.getState().fetch();

export default useRemixCreatorsStore;
