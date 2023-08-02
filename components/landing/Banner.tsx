import React from "react";
import BannerLeft from "./Banner/BannerLeft";
import BannerRight from "./Banner/BannerRight";

const Banner = () => {
  return (
    <section className="flex justify-start py-10  items-center gap-4 w-[100%] h-[70vh] pb-[100px] md:pb-0 md:h-[60vh] 2xl:h-full bg-[#d0ddee] rounded-[2%]  " >
      <BannerLeft />
      <BannerRight />
    </section>
  );
};

export default Banner;
