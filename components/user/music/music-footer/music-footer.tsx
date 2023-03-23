import FooterItem from "./footer-item/footer-item";
import { BsSearch } from "react-icons/bs";
import { HiHome, HiOutlineDownload } from "react-icons/hi";
import { AiTwotoneFire } from "react-icons/ai";
import useMusicFooter from "./use-music-footer";
import musicFooterImpl from "./types";
import musicUrl from "../../../../utils/music-url/music-url";
const MusicFooter = ({ href }: musicFooterImpl) => {
  const { onClickhomeIcon, onClickSearchIcon, OnclickHotMusicsIcon } =
    useMusicFooter();
  return (
    <>
      <div className="text-white absolute bottom-0 right-0 left-0 py-4 px-4 flex justify-between items-center rounded-xl rounded-t-none">
        <div className="hidden md:flex">
          <FooterItem onClick={onClickhomeIcon} title="Home" icon={HiHome} />
        </div>
        <FooterItem
          onClick={onClickSearchIcon}
          title="Search"
          icon={BsSearch}
        />
        <FooterItem
          href={musicUrl(href)}
          link={true}
          title="Download"
          icon={HiOutlineDownload}
        />
        <FooterItem
          onClick={OnclickHotMusicsIcon}
          title="Hot Musics"
          icon={AiTwotoneFire}
        />
      </div>
    </>
  );
};
export default MusicFooter;
