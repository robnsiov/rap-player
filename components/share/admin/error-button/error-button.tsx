import { Oval } from "react-loading-icons";
import useButton from "./use-error-button";
import ErrorButtonImpl from "./types";

const ErrorButton = ({
  onClick = () => {},
  fill = true,
  title,
  loader = false,
}: ErrorButtonImpl) => {
  const { active, onPointerDown, onPointerUp, clickOnBtn } = useButton({
    onClick,
    loader,
  });
  return (
    <>
      <span
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onClick={clickOnBtn}
        className={`font-semibold cursor-pointer w-full rounded-[8px] h-[43.2px]
        justify-center items-center flex
        select-none
        border-2 ${
          fill
            ? "text-white bg-red-500 border-red-400 active:bg-transparent active:text-red-400 hover:bg-red-400"
            : "text-red-400 bg-white border-red-400 active:bg-red-400 active:text-white hover:border-red-400 hover:text-red-500"
        }`}
      >
        {loader ? (
          <>
            {fill ? (
              <>
                {active ? (
                  <Oval stroke="#ef4444" height={"20px"} width={"20px"} />
                ) : (
                  <Oval stroke="white" height={"20px"} width={"20px"} />
                )}
              </>
            ) : (
              <>
                {active ? (
                  <Oval stroke="#fff" height={"20px"} width={"20px"} />
                ) : (
                  <Oval stroke="#ef4444" height={"20px"} width={"20px"} />
                )}
              </>
            )}
          </>
        ) : (
          title
        )}
      </span>
    </>
  );
};
export default ErrorButton;
