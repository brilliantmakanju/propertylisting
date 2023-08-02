import React from "react";
import Header from "@/components/Header";

const Newsletter = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/newletter.png')",
      }}
      className="flex justify-center py-10 my-5 px-5 lg:px-12 flex-col  items-center text-[white] bg-cover  gap-20 w-[100%] h-[30em] md:h-[40em]  "
    >
      <Header
        style={`text-[40px] md:text-[50px] lg:text-[60px] font-[600] leading-[58px] lg:leading-[78px] lg:tracking-[0.3px] `}
        title="Get our special prices & latest info"
      />

      <div className="w-full sm:flex-row gap-5  lg:w-[80%] bg-[#ffffff] px-7 rounded-xl py-2 flex flex-col md:flex-row justify-center items-center md:gap-4 " >
        <input type="email" className="py-3 w-full outline-none placeholder:text-[20px] lg:text-[20px] text-[#504F59] lg:placeholder:text-[25px] placeholder:text-[#504F59] " placeholder="Drop your email address here..." />
        <button className="py-3 px-5 w-full sm:w-auto md:w-auto rounded-xl" >
            Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
