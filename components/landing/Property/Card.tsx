import React from "react";
import CardImage from "./CardImage";
import CardText from "./CardText";
import Link from "next/link";

interface CardProps {
  ids:string,
  name: string;
  city: string;
  price: string;
  state: string;
  image: string;
  address: string;
  bedroom: string;
  bathroom: string;
  squaremeter: string;
}

const Card: React.FC<CardProps> = ({
  ids,
  name,
  city,
  price,
  state,
  image,
  address,
  bedroom,
  bathroom,
  squaremeter,
}) => {
  return (
    <>


      <Link
        href={`propertydetails/${ids}`}
        className=" overflow-hidden relative sm:w-[310px] w-[400px] md:w-[320px] h-auto rounded-xl hover:shadow-xl duration-300 transition ease-in-out hover:bg-white "
      >
        <CardImage image={image} name={name} />
        <CardText price={price} name={name} city={city} country={state} address={address} bedroom={bedroom} bathroom={bathroom} squaremeter={squaremeter} />
      </Link>
    </>
  );
};

export default Card;
