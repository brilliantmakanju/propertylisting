import Image from "next/image";

interface CardImageProps {
  image: string;
  name: string;
}

const CardImage: React.FC<CardImageProps> = ({ image, name }) => {
  return (
    <div className="relative h-[300px] sm:h-[250px] md:h-[260px] w-full ">
      <Image
        fill
        className="absolute object-cover top-0 left-0 "
        alt={name}
        src={image}
      />
    </div>
  );
};

export default CardImage;
