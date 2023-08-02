import Image from "next/image";
import React from "react";

const BannerRight = () => {
  return (
    <div className=" w-full overflow-visible hidden md:flex h-[55vh] 2xl:py-10 2xl:h-full ">
      <Image
        alt={""}
        src={"/home/banner.png"}
        width={900}
        height={900}
        className="w-[716px] h-[620px] "
      />
    </div>
  );
};

export default BannerRight;
