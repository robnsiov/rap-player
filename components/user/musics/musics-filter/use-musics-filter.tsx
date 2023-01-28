import { useEffect, useState } from "react";
import { AutocompleteInput } from "../../../share/autocomplete-input/types";

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
  const [showBackdrop, setShowBackdrop] = useState(!false);
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
    setFilterData((prev) => ({ ...prev, title: name }));
  };

  const toggleShowBackdrop = () => {
    setTimeout(() => {
      setShowBackdrop((prev) => !prev);
    }, 50);
  };

  useEffect(() => {
    if (clickOnSearch) toggleShowBackdrop();
  }, [clickOnSearch]);

  useEffect(() => {
    if (showBackdrop) toggleClickOnSearch();
  }, [showBackdrop]);

  useEffect(() => {
    setMusicNames([
      {
        id: 0,
        name: "Cobol",
      },
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "Basic",
      },
      {
        id: 3,
        name: "PHP",
      },
      {
        id: 4,
        name: "Java",
      },
    ]);
  }, []);

  return {
    showBackdrop,
    toggleShowBackdrop,
    filterData,
    changeSwitchOnFilterData,
    musicNames,
    changeTitleOnFilterData,
  };
};
export default useMusicsFilter;
