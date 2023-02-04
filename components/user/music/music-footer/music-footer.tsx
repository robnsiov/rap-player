import FooterItem from "./footer-item/footer-item";
import { BsSearch } from "react-icons/bs";
import { HiHome, HiOutlineDownload } from "react-icons/hi";
import { AiTwotoneFire } from "react-icons/ai";
const MusicFooter = () => {
  return (
    <>
      <div className="text-white absolute bottom-0 right-0 left-0 py-4 px-4 flex justify-between items-center rounded-xl rounded-t-none">
        <FooterItem title="Home" icon={HiHome} />
        <FooterItem title="Search" icon={BsSearch} />
        <FooterItem title="Download" icon={HiOutlineDownload} />
        <FooterItem title="Hot Musics" icon={AiTwotoneFire} />
      </div>
    </>
  );
};
export default MusicFooter;
