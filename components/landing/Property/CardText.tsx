import { greatVibes } from "@/public/font";
import React from "react";
import {
  FaBed,
  FaShower,
  FaToilet,
  FaBuilding,
  FaLocationPin,
  FaMapLocation,
} from "react-icons/fa6";

interface CardProps {
  name: string;
  city: string;
  price: string;
  country: string;
  address: string;
  bedroom: string;
  bathroom: string;
  squaremeter: string;
}

const CardText: React.FC<CardProps> = ({
  name,
  city,
  price,
  country,
  address,
  bedroom,
  bathroom,
  squaremeter,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-2 left-0 w-full hover:shadow-xl duration-300 transition ease-in-out bg-[#e8e6e6] h-auto p-4 rounded-b-xl ${greatVibes} `}
    >
      <h4 className="text-[20px] flex justify-between items-start gap-4 ">
        <span className="">{name}</span>
        <span className="text-[#1B00EA]">{price}$</span>
      </h4>
      <span className="flex justify-start items-center gap-3 ">
        <FaMapLocation />{address}. {city}, {country}
      </span>
      <div className="w-full flex justify-around items-center border-t-2 border-[white] ">
        <div className="flex border-r-2 border-[white] py-2   justify-center pr-5 w-full items-center gap-2 ">
          <FaBed className="text-[15px]" />
          <span className="text-[15px] font-[400] ">{bedroom}</span>
        </div>
        <div className="flex  border-r-2  w-full border-[white] py-2 text-center justify-center items-center gap-2 ">
          <FaShower className="text-[15px]  " />
          <span className="text-[15px] font-[400] ">{bathroom}</span>
        </div>
        <div className="flex  w-full  justify-center items-center py-2 gap-2">
          <FaBuilding className="text-[15px]" />
          <span className="text-[15px] font-[400] flex justify-center items-center ">
            {squaremeter} sqm
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardText;
