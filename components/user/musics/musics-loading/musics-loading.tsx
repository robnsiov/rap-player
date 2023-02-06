import useFiltersLoaderStore from "../../../../store/filters-loader-store";
import FadeAnimation from "../../../share/animations/fade/fade-animation";

const MusicsLoading = () => {
  const [loader] = useFiltersLoaderStore((state) => [state.loader]);
  return (
    <>
      <FadeAnimation inProp={loader} className="absolute inset-0 z-[190]">
        <div className="absolute grid place-items-center inset-2 bg-one-dark-200/80 rounded-xl z-[190]">
          <div className="flex justify-start items-center">
            <div className="flex h-20 items-center">
              <span className="block bg-gray-400 rounded-[20px] relative w-[5px] mx-2 h-full  ml-[1.5px] animate-[loadingwave_1s_ease-in-out_infinite]"></span>
              <span className="block bg-gray-400 rounded-[20px] relative w-[5px] mx-2 h-full  ml-[1.5px] animate-[loadingwave_1.4s_ease-in-out_infinite]"></span>
              <span className="block bg-gray-400 rounded-[20px] relative w-[5px] mx-2 h-full  ml-[1.5px] animate-[loadingwave_1.2s_ease-in-out_infinite]"></span>
              <span className="block bg-gray-400 rounded-[20px] relative w-[5px] mx-2 h-full  ml-[1.5px] animate-[loadingwave_1.1s_ease-in-out_infinite]"></span>
              <span className="block bg-gray-400 rounded-[20px] relative w-[5px] mx-2 h-full  ml-[1.5px] animate-[loadingwave_1.4s_ease-in-out_infinite]"></span>
              <span className="block bg-gray-400 rounded-[20px] relative w-[5px] mx-2 h-full  ml-[1.5px] animate-[loadingwave_1.3s_ease-in-out_infinite]"></span>
            </div>
          </div>
        </div>
      </FadeAnimation>
    </>
  );
};
export default MusicsLoading;
