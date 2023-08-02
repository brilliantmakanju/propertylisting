import Header from "@/components/Header";
import React from "react";
import { FaBed, FaChargingStation, FaHotel, FaShower } from "react-icons/fa6";

interface CardProps {
  garage: string;
  bedroom: string;
  bathroom: string;
}

const PropertyDetails: React.FC<CardProps> = ({
  bedroom,
  bathroom,
  garage,
}) => {
  return (
    <div className=" flex flex-col justify-start shadow-2xl items-start bg-[#1B00EA] w-full rounded-3xl overflow-hidden ">
      <Header
        title="Detail"
        style="text-[20px] font-[700] tracking-[-0.503px] p-7 text-white border-b-2 border-[#E4E4E4] w-full "
      />
      <div className=" px-3 flex justify-between w-full items-start text-white text-[18px]  font-[400] ">
        <span className=" flex gap-3 border-r-2 text-center w-full border-[#E4E4E4]  p-6 items-center justify-center">
          <FaBed />
          {bedroom}
        </span>
        <span className=" flex gap-3 border-r-2 text-center w-full border-[#E4E4E4]  p-6 items-center justify-center">
          <FaShower />
          {bathroom}
        </span>
        <span className=" flex gap-3 text-center w-full   p-6 items-center justify-center">
          <FaHotel />
          {garage}
        </span>
      </div>
    </div>
  );
};

export default PropertyDetails;
