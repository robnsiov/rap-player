import Image from "next/image";
import imageUrl from "../../../../utils/image-url/image-url";
import ImageRowImpl from "./types";

const ImageRow = ({ src, alt = src }: ImageRowImpl) => {
  return (
    <>
      <Image
        priority
        className="object-cover object-center rounded-md"
        width={60}
        height={60}
        src={imageUrl(src)}
        alt={alt}
      />
    </>
  );
};

export default ImageRow;
