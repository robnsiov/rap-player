import { cloneDeep, isEmpty } from "lodash";
import { useEffect, useState } from "react";
import useArtistsStore from "../../../../store/artists-store";
import useCategoriesStore from "../../../../store/categories-store";
import useFiltersLoaderStore from "../../../../store/filters-loader-store";
import useMusicNamesStore from "../../../../store/music-names-store";
import useRemixCreatorsStore from "../../../../store/remix-creators-store";
import { AutocompleteInput } from "../../../share/autocomplete-input/types";
import { MultiSelectInput } from "../../../share/multi-select/types";

interface UseMusicsFilterImpl {
  toggleClickOnSearch(): void;
  clickOnSearch: boolean;
}
interface FilterData {
  top?: boolean;
  demo?: boolean;
  visited?: boolean;
  played?: boolean;
  liked?: boolean;
  title?: string;
  artsist?: Array<number>;
  categories?: Array<number>;
  remixCreators?: Array<number>;
}
type MusicNames = Array<AutocompleteInput>;

const useMusicsFilter = ({
  clickOnSearch,
  toggleClickOnSearch,
}: UseMusicsFilterImpl) => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [filterData, setFilterData] = useState<FilterData>({
    top: true,
    demo: true,
    visited: false,
    played: false,
    liked: false,
    title: "",
    artsist: [],
    categories: [],
    remixCreators: [],
  });
  const [musicNames, setMusicNames] = useState<MusicNames>([]);
  const [artistNames, setArtistNames] = useState<MultiSelectInput>([]);
  const [categoryNames, setCategoryNames] = useState<MultiSelectInput>([]);
  const [remixCreatorNames, setRemixCreatorNames] = useState<MultiSelectInput>(
    []
  );

  const [categories, categoriesLoading] = useCategoriesStore((state) => [
    state.categories,
    state.loading,
  ]);
  const [artists, artistsLoading] = useArtistsStore((state) => [
    state.artists,
    state.loading,
  ]);
  const [remixCreators, remixCreatorsLoading] = useRemixCreatorsStore(
    (state) => [state.creators, state.loading]
  );
  const [musicNamesData] = useMusicNamesStore((state) => [state.musicMames]);

  const [showFiltersLoader] = useFiltersLoaderStore((state) => [
    state.showLoader,
  ]);

  useEffect(() => {
    console.log(filterData);
  }, [filterData]);

  const addItemToFilterData = (filter: FilterData) => {
    setFilterData((prev) => ({ ...prev, ...filter }));
  };
  const changeSwitchOnFilterData = (key: keyof FilterData, check: boolean) => {
    // top, demo, visited, played, liked
    addItemToFilterData({ [key]: check });
  };

  const changeTitleOnFilterData = ({ name }: AutocompleteInput) => {
    // title
    setFilterData((prev) => ({ ...prev, title: name }));
  };
  const changeMultiSelectOnFilterData = (
    key: keyof FilterData,
    selected: MultiSelectInput
  ) => {
    // artists, categories, remixCreators
    const arrayOfIds = selected.map(({ id }) => id);
    setFilterData((prev) => ({ ...prev, [key]: arrayOfIds }));
  };

  const closeFilters = () => {
    setTimeout(() => {
      setShowBackdrop((prev) => !prev);
    }, 50);
  };
  const applyFilters = () => {
    const filters = cloneDeep(filterData);
    if (isEmpty(filters.artsist)) delete filters.artsist;
    if (isEmpty(filters.remixCreators)) delete filters.remixCreators;
    if (isEmpty(filters.categories)) delete filters.categories;
    // title is musicName
    if (filters.title?.length === 0) delete filters.title;
    console.log(filters);
    // call api
    showFiltersLoader(true);
    setTimeout(() => {
      showFiltersLoader(false);
    }, 5000);
    closeFilters();
  };

  useEffect(() => {
    if (clickOnSearch) closeFilters();
  }, [clickOnSearch]);

  useEffect(() => {
    if (showBackdrop) toggleClickOnSearch();
  }, [showBackdrop]);

  useEffect(() => {
    setCategoryNames(categories);
  }, [categories]);
  useEffect(() => {
    setArtistNames(artists);
  }, [artists]);

  useEffect(() => {
    setRemixCreatorNames(remixCreators);
  }, [remixCreators]);

  useEffect(() => {
    setMusicNames(musicNamesData);
  }, [musicNamesData]);

  return {
    showBackdrop,
    closeFilters,
    filterData,
    changeSwitchOnFilterData,
    musicNames,
    changeTitleOnFilterData,
    changeMultiSelectOnFilterData,
    artistNames,
    categoryNames,
    remixCreatorNames,
    categoriesLoading,
    artistsLoading,
    remixCreatorsLoading,
    applyFilters,
  };
};
export default useMusicsFilter;
