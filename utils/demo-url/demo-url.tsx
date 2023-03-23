import { constants } from "../../constants/constants";

const demoUrl = (src: string) => {
  return `${constants.assets.demos}/${src}`;
};

export default demoUrl;
