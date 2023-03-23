import { constants } from "../../constants/constants";

const musicUrl = (src: string) => {
  return `${constants.assets.musics}/${src}`;
};

export default musicUrl;
