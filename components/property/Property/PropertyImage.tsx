import Image from "next/image";
import React from "react";

interface PropertyImg{
  image: string
}

const PropertyImage: React.FC<PropertyImg> = ({image}) => {
  return <Image alt="" width={900} height={900} src={`${image}`} className="hover:shadow-xl transition duration-300 ease-in-out sm:w-full sm:h-[500px] lg:w-[700px] w-[600px] h-[450px] lg:h-[600px] rounded-tr-[20%] object-cover " />;
};

export default PropertyImage;
