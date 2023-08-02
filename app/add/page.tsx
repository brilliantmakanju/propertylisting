"use client";
import axios from "axios";
import React, { useEffect } from "react";
import Image from "next/image";

import Input from "@/components/Input";
import Header from "@/components/Header";
import { useState, useCallback } from "react";
import { ToastContainer, toast } from "react-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Images = string;

const Add = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session?.user?.email) {
      router.push("/");
    }
  }, [router, session?.user?.email]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [state, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [garageNo, setGarageNo] = useState("");
  const [bedroomNo, setBedroom] = useState("");
  const [bathroomNo, setBathRoom] = useState("");
  const [isloading, setLoading] = useState(false);
  const [squaremeter, setSquareMeter] = useState("");
  const [loaded, setLoaded] = useState<Images[]>([]);
  const [descriptions, setDescription] = useState("");
  const [uploadedImage, setUploadedImage] = useState<Images[]>([]);

  const handleImageChange = async (ev: any) => {
    const file = ev.target?.files["0"];
    let imageUrl = ""
    new Promise((resolve) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        let images = reader.result;
         let imageUrl = reader.result as string ;
        const res = await axios.post("/api/upload", {
          image: images,
        });

        setUploadedImage((prevImages) => [...prevImages, res.data.links]);
        setLoaded((prevImages) => [...prevImages, imageUrl]);
      };
    });
  };

  const onSubmits = useCallback(
    async (event: any) => {
      event.preventDefault();
      try {
        setLoading(true);
        await axios.post("/api/add", {
          name,
          city,
          price,
          address,
          garageNo,
          bedroomNo,
          bathroomNo,
          squaremeter,
          descriptions,
          country: state,
          user: session?.user,
          images: uploadedImage,
        });
        setName("");
        setCity("");
        setPrice("");
        setCountry("");
        setAddress("");
        setBedroom("");
        setGarageNo("");
        setBathRoom("");
        setSquareMeter("");
        setDescription("");
        router.push("/");
        toast.success("Property Added Successfully");
      } catch (error) {
        console.log(error);
        toast.error("Sorry, an Error Occured please Try again");
      } finally {
        setLoading(false);
      }
    },
    [
      name,
      city,
      price,
      state,
      address,
      router,
      garageNo,
      bedroomNo,
      bathroomNo,
      squaremeter,
      descriptions,
      uploadedImage,
      session?.user,
    ]
  );

  return (
    <>
      <ToastContainer />
      <main className="flex min-h-screen flex-col items-center gap-10  py-4 w-full   ">
        <Header
          title="Add Property"
          style="text-[35px] text-[#1B00EA] font-serif font-semibold "
        />
        <form
          onSubmit={(event) => onSubmits(event)}
          className="flex shadow-xl p-3 py-7 lg:p-10 rounded-xl bg-[#3128ac] text-white flex-col flex-wrap justify-start items-start w-full lg:w-[70%] gap-16 "
        >
          <div className="flex flex-col flex-wrap justify-start items-start w-full gap-2">
            <Header title="Property Name" style="text-[20px]" />
            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder="Property Name"
              disabled={isloading}
              style="w-full"
            />
          </div>
          <div className="flex flex-col flex-wrap justify-start items-start w-full gap-2">
            <Header title="Location" style="text-[20px]" />
            <div className="flex gap-3 w-full flex-wrap lg:flex-nowrap  ">
              <Input
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                disabled={isloading}
              />
              <Input
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
                disabled={isloading}
              />
              <Input
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                disabled={isloading}
              />
            </div>
          </div>
          <div className="flex gap-3 w-full flex-wrap lg:flex-nowrap ">
            <div className="flex flex-col flex-wrap justify-start items-start w-full gap-2">
              <Header title="Bed Room" style="text-[20px]" />
              <Input
                onChange={(e) => setBedroom(e.target.value)}
                placeholder="Bed Room"
                type="number"
                disabled={isloading}
              />
            </div>
            <div className="flex flex-col flex-wrap justify-start items-start w-full gap-2">
              <Header title="Bath Room" style="text-[20px]" />
              <Input
                onChange={(e) => setBathRoom(e.target.value)}
                placeholder="Bath Room"
                type="number"
                disabled={isloading}
              />
            </div>
            <div className="flex flex-col flex-wrap justify-start items-start w-full gap-2">
              <Header title="Garage" style="text-[20px]" />
              <Input
                onChange={(e) => setGarageNo(e.target.value)}
                placeholder="Garage"
                type="number"
                disabled={isloading}
              />
            </div>
          </div>
          <div className="flex gap-3 w-full ">
            <div className="flex flex-col flex-wrap justify-start items-start w-full gap-2">
              <Header title="Square Meter" style="text-[20px]" />
              <Input
                onChange={(e) => setSquareMeter(e.target.value)}
                placeholder="Square Meter"
                style="w-full"
                type="number"
                disabled={isloading}
              />
            </div>
            <div className="flex flex-col flex-wrap justify-start items-start w-full gap-2">
              <Header title="Price ($)" style="text-[20px]" />
              <Input
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                style="w-full"
                type="number"
                disabled={isloading}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap justify-start items-start w-full gap-2">
            <Header title="Description" style="text-[20px]" />
            <textarea
              disabled={isloading}
              placeholder="Description"
              className="   w-full  resize-none p-4 h-[15em] appearance-none text-lg border-2 border-transparent text-[black] rounded-md outline-none focus:border-sky-800 focus:border-2 transition disabled:bg-neutral-300 disabled:cursor-not-allowed disabled:opacity-30 "
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col  w-full  gap-7  ">
            <div className="flex justify-start flex-wrap items-start gap-7 ">
              {!!loaded?.length &&
                loaded.map((value, index) => (
                  <Image
                    key={index}
                    width={900}
                    // onBlur={() => `${value}`}
                    src={`${value}`}
                    height={800}
                    alt={"Images"}
                    className="w-[200px] h-[200px] object-cover rounded-md overflow-hidden "
                  />
                ))}
            </div>

            <label
              htmlFor="files"
              className="flex justify-center items-center gap-2 w-[100%] md:w-[50%] lg:w-[25%] p-5 bg-[#1B00EA] text-lg text-white border border-gray-300 rounded-lg cursor-pointer "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
              Upload{" "}
              <input
                onChange={(ev) => handleImageChange(ev)}
                type="file"
                accept="image/png, image/jpeg"
                id="files"
                hidden
              />{" "}
            </label>
          </div>
          <button
            disabled={isloading}
            className="w-[30%] cursor-pointer p-4 rounded-md  bg-[#1B00EA] text-white border-white font-bold disabled:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-30   "
            type="submit"
          >
            Add
          </button>
        </form>
      </main>
    </>
  );
};

export default Add;
