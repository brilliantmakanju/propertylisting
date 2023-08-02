import Header from "@/components/Header";
import React from "react";

interface CardProps {
  description: string;
}

const PropertyInfo: React.FC<CardProps>= ({
  description,
}) => {
  return (
    <div className=" flex flex-col justify-start shadow-2xl items-start bg-[#1B00EA] w-full rounded-3xl overflow-hidden ">
      <Header
        title="Description"
        style="text-[20px] font-[700] tracking-[-0.503px] p-7 text-white border-b-2 border-[#E4E4E4] w-full "
      />
      <div className="p-7 text-white text-[15px] font-[400] ">
        {description}
      </div>
    </div>
  );
};

export default PropertyInfo;
