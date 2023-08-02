import Image from "next/image";
import React from "react";

interface SubImage {
  image: {
    link: string;
  };
  alt: string;
}

const PropertySubImage: React.FC<SubImage> = ({ image, alt }) => {
  return (
    <Image
      alt={alt}
      width={900}
      height={900}
      src={`${image}`}
      className=" w-[205px] h-[205px] object-cover "
    />
  );
};

export default PropertySubImage;
