"use client";
import Card from "./Property/Card";
import { greatVibes } from "@/public/font";
import { Pagination } from "../Pagination";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const dynamic = "force-dynamic";

interface Propertys {
  id: string;
  name: string;
  city: string;
  price: string;
  country: string;
  images: string;
  address: string;
  garageNo: string;
  bedroomNo: string;
  apartment: string;
  bathroomNo: string;
  squaremeter: string;
  descriptions: string;
}

const Property = () => {
  const [property, setList] = useState<Propertys[]>([]);
  const [loading, setLoading] = useState(true);

  const propertysList = async () => {
    const res = await fetch("/api/list", { cache: "no-store" });
    const resp = await fetch("/api/list", { next: { revalidate: 5 } });
    const resss = await resp.json();
    // console.log(resss.listing)

    setList(resss.listing);
    setLoading(false);
  };

  useEffect(() => {
    propertysList();
  }, []);

  return (
    <section className="flex justify-start py-20 lg:px-5 flex-col  items-start gap-10 w-[100%] h-full  ">
      <h3
        className={`p-5 w-full lg:w-[100%] xl:w-[90%] break-words text-[45px] lg:text-[49px] xl:text-[60px] text-[#191726] h-full tracking-[0.5px] font-[600] leading-[50px] lg:leading-[60px] xl:leading-[70px] ${greatVibes} `}
      >
        Find your next place to live
      </h3>
      <div className="w-full flex flex-row sm:grid sm:grid-cols-2 md:flex md:flex-row justify-center items-center gap-9 flex-wrap ">
        {loading ? (
          <>
            <SkeletonTheme>
              <p>
                <Skeleton height={250} width={300} count={1} />
                <Skeleton height={50} width={300} count={1} />
                <Skeleton height={25} width={300} count={1} />
              </p>
            </SkeletonTheme>
            <SkeletonTheme>
              <p>
                <Skeleton height={250} width={300} count={1} />
                <Skeleton height={50} width={300} count={1} />
                <Skeleton height={25} width={300} count={1} />
              </p>
            </SkeletonTheme>
            <SkeletonTheme>
              <p>
                <Skeleton height={250} width={300} count={1} />
                <Skeleton height={50} width={300} count={1} />
                <Skeleton height={25} width={300} count={1} />
              </p>
            </SkeletonTheme>
            <SkeletonTheme>
              <p>
                <Skeleton height={250} width={300} count={1} />
                <Skeleton height={50} width={300} count={1} />
                <Skeleton height={25} width={300} count={1} />
              </p>
            </SkeletonTheme>
            <SkeletonTheme>
              <p>
                <Skeleton height={250} width={300} count={1} />
                <Skeleton height={50} width={300} count={1} />
                <Skeleton height={25} width={300} count={1} />
              </p>
            </SkeletonTheme>
            <SkeletonTheme>
              <p>
                <Skeleton height={250} width={300} count={1} />
                <Skeleton height={50} width={300} count={1} />
                <Skeleton height={25} width={300} count={1} />
              </p>
            </SkeletonTheme>
            <SkeletonTheme>
              <p>
                <Skeleton height={250} width={300} count={1} />
                <Skeleton height={50} width={300} count={1} />
                <Skeleton height={25} width={300} count={1} />
              </p>
            </SkeletonTheme>
            <SkeletonTheme>
              <p>
                <Skeleton height={250} width={300} count={1} />
                <Skeleton height={50} width={300} count={1} />
                <Skeleton height={25} width={300} count={1} />
              </p>
            </SkeletonTheme>
          </>
        ) : (
          <>
            {property.map((value, index) => {
              const imageUrl = value.images?.[0];
              return (
                <Card
                  key={index}
                  ids={value.id}
                  city={value.city}
                  name={value.name}
                  price={value.price}
                  image={`${imageUrl}`}
                  state={value.country}
                  address={value.address}
                  bedroom={value.bedroomNo}
                  bathroom={value.bathroomNo}
                  squaremeter={value.squaremeter}
                />
              );
            })}
          </>
        )}
      </div>
      <Pagination />
    </section>
  );
};

export default Property;
