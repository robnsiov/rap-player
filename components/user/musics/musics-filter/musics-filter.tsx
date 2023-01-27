import Backdrop from "../../../share/backdrop/backdrop";
import { RiCloseCircleLine } from "react-icons/ri";
import useMusicsFilter from "./use-musics-filter";
import MusicsFilterImpl from "./types";
import ScaleAnimation from "../../../share/animations/scale/scale-animation";
import Switch from "react-switch";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import AutocomplteItems from "../../../share/autocomplete-item/autocomplete-item";

const MusicsFilter = ({
  clickOnSearch,
  toggleClickOnSearch,
}: MusicsFilterImpl) => {
  const {
    showBackdrop,
    toggleShowBackdrop,
    toggleActiveTopMusicsSwitch,
    activeTopMusicsSwitch,
    handleOnSelectAutocompleInput,
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
      <Backdrop showBackdrop={showBackdrop}>
        <div className="text-gray-400 bg-one-dark-200  absolute inset-2 rounded-xl flex items-center justify-between flex-col">
          <div className="w-full flex justify-center items-start flex-col">
            <div className="w-full ml-3 mt-3 flex items-center justify-start">
              <ScaleAnimation scale={"0.9"}>
                <RiCloseCircleLine
                  onClick={toggleShowBackdrop}
                  className="text-xl"
                />
              </ScaleAnimation>
            </div>
            <div className="mt-2 flex items-center justify-center flex-col w-full">
              <div className="flex p-3 text-sm items-center justify-between w-full">
                <span>Top Music</span>
                <Switch
                  onChange={toggleActiveTopMusicsSwitch}
                  checked={activeTopMusicsSwitch}
                  uncheckedIcon={false}
                  width={30}
                  height={6}
                  checkedIcon={false}
                  borderRadius={999}
                  handleDiameter={17}
                  activeBoxShadow="0 0 1px 2px #373e4a"
                  onColor="#181D27"
                  offColor="#61666e"
                  offHandleColor="#373e4a"
                  onHandleColor="#373e4a"
                />
              </div>
            </div>
            <div className="flex items-center justify-center flex-col w-full">
              <div className="flex p-3 text-sm items-center justify-end w-full">
                <div className="w-full">
                  <ReactSearchAutocomplete
                    items={items}
                    // onSearch={handleOnSearch}
                    // onHover={handleOnHover}
                    onSelect={handleOnSelectAutocompleInput}
                    // onFocus={handleOnFocus}
                    autoFocus
                    formatResult={AutocomplteItems}
                    placeholder="Enter Something..."
                    styling={{
                      height: "40px",
                      border: "2px solid #181D27",
                      backgroundColor: "transparent",
                      boxShadow: "",
                      color: "#9198A3",
                      placeholderColor: "#9198A3",
                      fontSize: "14px",
                      borderRadius: "6px",
                      lineColor: "#373e4a",
                      iconColor: "#444f6a",
                      clearIconMargin: "4px 8px",
                      hoverBackgroundColor: "",
                    }}
                  />
                </div>
              </div>
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
    </>
  );
};
export default MusicsFilter;
