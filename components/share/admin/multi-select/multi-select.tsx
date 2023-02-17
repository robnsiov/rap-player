import { IoMdCloseCircleOutline } from "react-icons/io";
import { FiDatabase } from "react-icons/fi";
import MultiSelectImpl from "./types";

const MultiSelect = ({
  label,
  onClickDB,
  onSelect,
  selections,
  error = undefined,
  touched = false,
}: MultiSelectImpl) => {
  return (
    <>
      <div className="flex justify-center items-start flex-col w-full mb-2">
        <label
          onClick={onClickDB}
          className="text-gray-500 mb-1 text-[16px] cursor-pointer"
        >
          {label}
        </label>
        <div
          className="w-full p-2 pr-9 pl-0 pt-0 text-[14px] text-gray-500 
          flex justify-start items-start flex-wrap
          min-h-[40px]
          space-x-2
          space-y-2
          relative
          placeholder:text-xs placeholder:text-gray-500 rounded-[8px] border-2 border-gray-500 outline-none active:ring-2 active:ring-gray-300"
        >
          <FiDatabase
            onClick={onClickDB}
            className="absolute right-3 top-3 text-lg z-10 cursor-pointer"
          />
          {selections.map(({ id, title }) => (
            <div
              key={id}
              onClick={() => onSelect(id)}
              className="px-2 cursor-pointer py-0.5 font-semibold text-xs flex
           justify-center items-center border-2 border-gray-400 group hover:border-gray-800 hover:text-gray-800 rounded 
           transition-all duration-200 active:scale-95
           "
            >
              <span>{title}</span>
              <IoMdCloseCircleOutline className="text-gray-500 group-hover:text-gray-800 text-lg ml-1 transition-all duration-200" />
            </div>
          ))}
        </div>
        {""}
        {error && touched && (
          <span className="text-xs text-red-500 mt-1 font-semibold">
            {error}
          </span>
        )}{" "}
      </div>
    </>
  );
};
export default MultiSelect;
