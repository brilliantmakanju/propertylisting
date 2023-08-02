import Image from "next/image";
import React from "react";
import Header from "../Header";

const SideBanner = () => {
  return (
    <div className="overflow-hidden hidden lg:flex  lg:w-full bg-[#1B00EA] h-auto  ">
      <Image
        className=" w-full h-[20%] "
        alt=""
        width={900}
        height={900}
        // fill
        src="/Form.svg"
      />
      {/* <Header
        title="Soge"
        style="text-[45px] font-[700] absolute top-[300px] text-white left-[200px] "
      />
      <span className="text-[17px] font-[500] text-white absolute top-[370px] w-[50%] left-[200px] ">
        Your dream home awaits! This stunning property features all the
        amenities and comfort you desire.
      </span> */}
    </div>
  );
};

export default SideBanner;
