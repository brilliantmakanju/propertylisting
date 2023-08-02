"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

const Nav = () => {
  const { data: session } = useSession();
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <header className="hidden md:px-10 px-4 w-full lg:flex justify-between gap-3 items-center py-6 text-black ">
        <nav className="flex justify-center items-center gap-5 ">
          <Link
            className="text-[32.5px] flex justify-between items-center font-bold text-[#1B00EA]  "
            href={"/"}
          >
            Soge
          </Link>
        </nav>
        <nav className="lg:flex justify-center items-center gap-10 font-serif font-semibold hidden ">
          <Link href={""} className=" flex justify-between items-center">
            Home
          </Link>
          <Link href={""} className=" flex justify-between items-center">
            Service
          </Link>
          <Link href={""} className=" flex justify-between items-center">
            About Us
          </Link>
          <Link href={""} className=" flex justify-between items-center">
            Contact Us
          </Link>
          <Link
            href={"/userproperty"}
            className=" flex justify-between items-center"
          >
            Property
          </Link>
        </nav>
        {session?.user?.email ? (
          <nav className="lg:flex justify-center items-center gap-5 font-serif font-semibold hidden ">
            <Link
              href={"/add"}
              className=" flex justify-between items-center"
            >
              Add Property
            </Link>
            <button
              onClick={() => signOut()}
              className="flex justify-between items-center text-[white] bg-[#ea0000] p-2 px-9 rounded-md "
            >
              Logout
            </button>
          </nav>
        ) : (
          <nav className="lg:flex justify-center items-center gap-5 font-serif font-semibold hidden ">
            <Link
              href={"/auth/register"}
              className=" flex justify-between items-center"
            >
              Register
            </Link>
            <Link
              href={"/auth/login"}
              className=" flex justify-between items-center text-[white] bg-[#1B00EA] p-2 px-9 rounded-md "
            >
              Login
            </Link>
          </nav>
        )}
      </header>
      <header className="lg:hidden md:px-10 px-4 w-full flex justify-between gap-3 items-center py-6 text-black ">
        <nav className="flex justify-center items-center gap-5 ">
          <Link
            className="text-[32.5px] flex justify-between items-center font-bold text-[#1B00EA]  "
            href={"/"}
          >
            Soge
          </Link>
        </nav>
        <button
          className="px-2 py-5 flex flex-col border-[1px] rounded-md border-[white]  outline-none gap-[0.45rem] "
          onClick={() => setMobile(!mobile)}
        >
          <div
            className={`h-[0.15rem] w-10 bg-white ${
              !mobile
                ? ""
                : " translate-x-[1.5px] translate-y-[10px] rotate-[45deg]"
            } transition-all ease-in-out duration-500 overflow-hidden `}
          />
          <div
            className={`h-[0.15rem] w-10 bg-white ${
              !mobile ? "opacity-1" : " translate-x-[100%] opacity-0 "
            } transition-all ease-in-out duration-500 overflow-hidden `}
          />
          <div
            className={`h-[0.15rem] w-10 bg-white ${
              !mobile
                ? ""
                : " rotate-[-47deg] translate-y-[-9px] translate-x-[-0.25rem] "
            } transition-all ease-in-out duration-500 overflow-hidden `}
          />
        </button>
      </header>
      <div
        className={`${
          mobile
            ? "h-auto bg-[#1B00EA] mb-3 w-full flex text-white flex-col gap-5 py-5 pl-5 justify-center items-center "
            : "h-0 w-full  bg-[#1B00EA] flex flex-col gap-5 justify-center items-center  "
        } transition-all ease-in-out duration-500 overflow-hidden `}
      >
        <nav className="flex flex-col justify-start items-center gap-5 font-serif font-semibold  ">
          <Link href={"/"} className=" flex justify-start items-center">
            Home
          </Link>
          <Link href={"/"} className=" flex justify-start items-center">
            Service
          </Link>
          <Link href={"/"} className=" flex justify-start items-center">
            About Us
          </Link>
          <Link href={"/"} className=" flex justify-start items-center">
            Contact Us
          </Link>
          <Link
            href={"/propertydetails/Maldon"}
            className=" flex justify-between items-center"
          >
            Property
          </Link>
        </nav>
        {session?.user?.email ? (
          <nav className="flex flex-col justify-start items-center gap-5 font-serif font-semibold  ">
            <Link
              href={"/add"}
              className=" flex justify-between items-center"
            >
              Add Property
            </Link>
            <button
              onClick={() => signOut()}
              className="flex justify-center text-center w-full items-center text-[white] bg-[#ea0000] p-2 px-9 rounded-md "
            >
              Logout
            </button>
          </nav>
        ) : (
          <nav className="flex justify-center w-full items-center gap-5 pr-5 font-serif font-semibold  ">
            <Link
              href={"/auth/login"}
              className=" flex justify-center text-center w-full items-center text-[#1B00EA] border-2 border-[white] bg-[white] p-2 px-9 rounded-md "
            >
              Login
            </Link>
          </nav>
        )}
      </div>
    </>
  );
};

export default Nav;
