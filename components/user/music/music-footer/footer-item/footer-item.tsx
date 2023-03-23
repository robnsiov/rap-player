import Link from "next/link";
import ScaleAnimation from "../../../../share/animations/scale/scale-animation";
import FootetItemImpl from "./types";

const FooterItem = ({
  icon: Icon,
  title,
  onClick = () => {},
  link = false,
  href = "",
  className = "",
}: FootetItemImpl) => {
  return (
    <>
      <ScaleAnimation activeClassName="active:scale[0.9]">
        <div
          onClick={onClick}
          className={`group cursor-pointer flex items-center text-center flex-col justify-center relative text-gray-400 ${className}`}
        >
          {link ? (
            <Link
              href={href}
              download={true}
              className="group cursor-pointer flex items-center text-center flex-col"
            >
              <div>
                <Icon className="text-xl mb-1.5 duration-200 group-hover:text-white" />
              </div>
              <span className="text-[9px] duration-200 group-hover:text-white">
                {title}
              </span>
            </Link>
          ) : (
            <>
              <div>
                <Icon className="text-xl mb-1.5 duration-200 group-hover:text-white" />
              </div>
              <span className="text-[9px] duration-200 group-hover:text-white">
                {title}
              </span>
            </>
          )}
        </div>
      </ScaleAnimation>
    </>
  );
};
export default FooterItem;
