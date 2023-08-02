import Newsletter from "@/components/landing/Newsletter";
import Property from "@/components/landing/Property";
import Banner from "@/components/landing/Banner";
import { greatVibes } from "@/public/font";
import React from "react";

const Landing = () => {
  return (
    <main
      className={` ${greatVibes} flex min-h-screen flex-col  items-center gap-20 w-full `}
    >
      <Banner />
      <Property properties={[]} />
      <Newsletter />
    </main>
  );
};

export default Landing;
