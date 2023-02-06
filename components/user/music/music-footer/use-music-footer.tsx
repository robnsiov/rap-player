import useFiltersLoaderStore from "../../../../store/filters-loader-store";
import useMusicPageStore from "../../../../store/music-page-store";
import useShowFiltersStore from "../../../../store/show-filters";

const useMusicFooter = () => {
  const [showFiltersLoader] = useFiltersLoaderStore((state) => [
    state.showLoader,
  ]);
  const [onChangeMusicPageStatus] = useMusicPageStore((state) => [
    state.onChange,
  ]);
  const [onChangeFiltersStatus] = useShowFiltersStore((state) => [
    state.onChange,
  ]);


  const onClickhomeIcon = () => {
    onChangeMusicPageStatus(false);
  };
  const onClickSearchIcon = () => {
    onChangeMusicPageStatus(false);
    onChangeFiltersStatus(true);
  };

  const OnclickHotMusicsIcon = () => {
    onChangeMusicPageStatus(false);
    showFiltersLoader(true);
    setTimeout(() => {
      showFiltersLoader(false);
    }, 5000);
    // call filters api
  };

  return { onClickhomeIcon, onClickSearchIcon, OnclickHotMusicsIcon };
};
export default useMusicFooter;
