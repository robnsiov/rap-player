import { constants } from "../../constants/constants";

const imageUrl = (src: string) => {
  return `${constants.assets.images}/${src}`;
};

export default imageUrl;
