"use client";
import Backdrop from "../../../share/backdrop/backdrop";
import { RiCloseCircleLine } from "react-icons/ri";
import useMusicsFilter from "./use-musics-filter";
import MusicsFilterImpl from "./types";
import ScaleAnimation from "../../../share/animations/scale/scale-animation";
import AutocomplteItems from "../../../share/autocomplete-item/autocomplete-item";
import SwitchFilter from "./switch-filter/switch-filter";
import AutocompleteFilter from "./autocomplete-filter/autocomplete-filter";
import FadeAnimation from "../../../share/animations/fade/fade-animation";


const MusicsFilter = ({
  clickOnSearch,
  toggleClickOnSearch,
}: MusicsFilterImpl) => {
  const {
    showBackdrop,
    toggleShowBackdrop,
    changeTitleOnFilterData,
    filterData,
    changeSwitchOnFilterData,
    musicNames,
  } = useMusicsFilter({
    clickOnSearch,
    toggleClickOnSearch,
  });

  const items = [
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
  ];

  return (
    <>
      <FadeAnimation inProp={showBackdrop} className="absolute inset-0 z-[100]">
        <Backdrop showBackdrop={showBackdrop}>
          <div className="text-gray-400 bg-one-dark-200  absolute inset-2 rounded-xl flex items-center justify-between flex-col">
            <div className="w-full flex justify-center items-start flex-col">
              <div className="w-full ml-3 mt-3 mb-5 flex items-center justify-start">
                <ScaleAnimation scale={"0.9"}>
                  <RiCloseCircleLine
                    onClick={toggleShowBackdrop}
                    className="text-xl"
                  />
                </ScaleAnimation>
              </div>
              <SwitchFilter
                onChange={(check) => changeSwitchOnFilterData("top", check)}
                checked={filterData.top as boolean}
                title="Top Musics"
              />
              <SwitchFilter
                onChange={(check) => changeSwitchOnFilterData("demo", check)}
                checked={filterData.demo as boolean}
                title="Demo"
              />
              <SwitchFilter
                onChange={(check) => changeSwitchOnFilterData("visited", check)}
                checked={filterData.visited as boolean}
                title="Most Visited"
              />
              <SwitchFilter
                onChange={(check) => changeSwitchOnFilterData("played", check)}
                checked={filterData.played as boolean}
                title="Most Played"
              />
              <SwitchFilter
                onChange={(check) => changeSwitchOnFilterData("liked", check)}
                checked={filterData.liked as boolean}
                title="Most Liekd"
              />

              <div className="flex mt-1 items-center justify-center flex-col w-full">
                <AutocompleteFilter
                  items={musicNames}
                  placeholder="Music name..."
                  formatResult={AutocomplteItems}
                  onSelect={changeTitleOnFilterData}
                />
                {/* <MultiSelectFilter placeholder="Artists" options={musicNames} />
                <MultiSelectFilter
                  placeholder="Categories"
                  options={musicNames}
                />
                <MultiSelectFilter
                  placeholder="Remix Creators"
                  options={musicNames}
                /> */}
              </div>
            </div>
            <div className="p-3 max-w-[400px] w-full">
              <ScaleAnimation
                scale={"0.99"}
                className="w-full border-gray-400 rounded-xl text-gray-400 border-2"
              >
                <div
                  onClick={toggleShowBackdrop}
                  className="w-full p-2 text-center"
                >
                  Apply
                </div>
              </ScaleAnimation>
            </div>
          </div>
        </Backdrop>
      </FadeAnimation>
    </>
  );
};
export default MusicsFilter;
