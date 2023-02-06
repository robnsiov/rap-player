import ButtonImpl from "./types";
import { Oval } from "react-loading-icons";
import useButton from "./use-button";

const Button = ({
  onClick = () => {},
  fill = true,
  title,
  loader,
  type,
}: ButtonImpl) => {
  const { active, onPointerDown, onPointerUp } = useButton();
  return (
    <>
      <button
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onClick={onClick}
        type={type}
        className={`font-semibold w-full rounded-[8px] h-[43.2px]
        justify-center items-center flex
        select-none
        border-2 ${
          fill
            ? "text-white bg-gray-700 border-gray-700 active:bg-transparent active:text-gray-700 hover:bg-gray-600"
            : "text-gray-700 bg-white border-gray-700 active:bg-gray-700 active:text-white hover:border-gray-600 hover:text-gray-600"
        }`}
      >
        {loader ? (
          <>
            {fill ? (
              <>
                {active ? (
                  <Oval stroke="#374151" height={"20px"} width={"20px"} />
                ) : (
                  <Oval stroke="white" height={"20px"} width={"20px"} />
                )}
              </>
            ) : (
              <>
                {active ? (
                  <Oval stroke="#fff" height={"20px"} width={"20px"} />
                ) : (
                  <Oval stroke="#374151" height={"20px"} width={"20px"} />
                )}
              </>
            )}
          </>
        ) : (
          title
        )}
      </button>
    </>
  );
};
export default Button;
