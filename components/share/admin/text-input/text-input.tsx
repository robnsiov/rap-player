import TextInputImpl from "./types";
import { Field } from "formik";

const TextInput = ({
  label,
  type = "text",
  placeholder = "",
  error = undefined,
  touched = false,
  name,
  readOnly = false,
  className = "",
  inputProps = {},
}: TextInputImpl) => {
  return (
    <>
      <div className="flex justify-center items-start flex-col w-full mb-2">
        <label className="text-gray-500 mb-1 text-[16px] cursor-pointer">
          {label}
        </label>
        <Field
          name={name}
          type={type}
          spellCheck={false}
          placeholder={placeholder}
          readOnly={readOnly}
          {...inputProps}
          autoComplete={`current-${name}`}
          className={`w-full py-2 px-3 text-[14px] text-gray-500 
          placeholder:text-xs placeholder:text-gray-500 rounded-[8px] border-2 border-gray-500 outline-none focus:ring-2 focus:ring-gray-300 ${className}`}
        />
        {error && touched && (
          <span className="text-xs text-red-500 mt-1 font-semibold">
            {error}
          </span>
        )}
      </div>
    </>
  );
};
export default TextInput;
