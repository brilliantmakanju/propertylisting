"use client";
import React from "react";
// import { Button, span } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function Pagination() {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index: any) =>
    ({
      className: active === index ? "bg-[blue] p-3 px-5 rounded-lg text-white " : "text-[gray]",
      onClick: () => setActive(index),
    } as any);

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="flex w-full justify-center py-5 items-center gap-4">
      <button
        className={`flex items-center gap-2 bg-transparent p-3 ${active === 1 ? "text-[#a9a9a9]" : "text-[#808080]"} `}
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </button>
      <div className="flex items-center gap-8 py-5 ">
        <span {...getItemProps(1)}>1</span>
        <span {...getItemProps(2)}>2</span>
        <span {...getItemProps(3)}>3</span>
        <span {...getItemProps(4)}>4</span>
        <span {...getItemProps(5)}>5</span>
      </div>
      <button
        className={`flex items-center gap-2 bg-transparent p-3 ${active === 5 ? "text-[#a9a9a9]" : "text-[#808080]"} `}
        onClick={next}
        disabled={active === 5}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </button>
    </div>
  );
}
