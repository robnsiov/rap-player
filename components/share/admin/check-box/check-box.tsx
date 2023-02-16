const CheckBox = () => {
  return (
    <>
      <div className="flex items-center mb-4">
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          OK
          <input
            id="default-checkbox"
            type="checkbox"
            className="hidden peer"
          />
          <div
            className="w-[15px] h-[15px] rounded border-2 border-gray-500
            active:ring-2 active:ring-gray-300
            peer-active:first:opacity-100 relative"
          >
            <span className="absolute inset-0 bg-red-500 opacity-0"></span>
          </div>
        </label>
      </div>
    </>
  );
};
export default CheckBox;
