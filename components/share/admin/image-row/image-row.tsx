import Image from "next/image";
import ImageRowImpl from "./types";

const ImageRow = ({ src, alt = src }: ImageRowImpl) => {
  return (
    <>
      <Image
        priority
        className="object-cover object-center rounded-md"
        width={60}
        height={60}
        src={src}
        alt={alt}
      />
    </>
  );
};

export default ImageRow;
