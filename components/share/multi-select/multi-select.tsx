import Select, { CSSObjectWithLabel } from "react-select";
import MultiSelectImpl from "./types";

const MultiSelect = ({
  options,
  placeholder,
  styles = {},
}: MultiSelectImpl) => {
  const defaultStyles = {
    control: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      border: "2px solid #181D27",
      boxShadow: "red",
      background: "transparent",
      padding: "5px 10px",
      borderRadius: "6px",
      minHeight: "43px",
    }),
    menuList: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      background: "#2C313A",
      border: "2px solid #181D27",
      borderRadius: "6px",
      marginTop: "5px",
    }),
    option: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      padding: "5px 8px",
      cursor: "pointer",
    }),
    indicatorSeparator: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      background: "#444f6a",
      width: "2px",
      marginRight: "4px",
      marginLeft: "4px",
      // maxHeight: "25px",
    }),
    indicatorsContainer: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#444f6a",
    }),
    multiValue: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      border: "2px solid #181D27",
      padding: "0px 5px",
      borderRadius: "4px",
      margin: "2px",
      ":last-child": {
        marginBottom: "0",
      },
    }),
    multiValueRemove: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      marginLeft: "6px",
    }),
    // noOptionsMessage: (baseStyles, state) => ({
    //   ...baseStyles,
    //   margin: "6px 0",
    // }),
    ...styles,
  };
  return (
    <>
      <Select
        id="selectbox"
        instanceId="selectbox"
        closeMenuOnSelect={false}
        isMulti
        options={options}
        unstyled={true}
        placeholder={placeholder}
        styles={defaultStyles}
      />
    </>
  );
};

export default MultiSelect;
