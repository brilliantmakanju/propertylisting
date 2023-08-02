"use client";
import axios from "axios";
import Image from "next/image";
import Input from "@/components/Input";
import Header from "@/components/Header";
import { useParams } from "next/navigation";
import { ToastContainer, toast } from "react-toast";
import React, { useEffect, useState, useCallback } from "react";

interface Propertys {
  city: string;
  name: string;
  price: string;
  image: string;
  address: string;
  country: string;
  garageNo: string;
  bedroomNo: string;
  bathroomNo: string;
  squaremeter: string;
  descriptions: string;
}

type Images = string;

const Edit = () => {
  const router = useParams();
  const [property, setList] = useState<Propertys[]>([]);
  const [isloading, setLoading] = useState(true);
  const [propertysId, setPropertyId] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [state, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [garageNo, setGarageNo] = useState("");
  const [bedroomNo, setBedroom] = useState("");
  const [bathroomNo, setBathRoom] = useState("");
  const [squaremeter, setSquareMeter] = useState("");
  const [descriptions, setDescription] = useState("");
  const [uploadedImage, setUploadedImage] = useState<Images[]>([]);
  async function list(id: any) {
    const res = await axios.post("/api/view", {
      id,
    });
    const propertyData = res.data.property;
    setList(res.data.property);
    setPropertyId(id);
    setLoading(false);

    // setName("");
    // setCity("");
    // setPrice("");
    // setCountry("");
    // setImage("");
    // setAddress("");
    // setBedroom("");
    // setGarageNo("");
    // setBathRoom("");
    // setSquareMeter("");
    // setDescription("");
  }

  const onSubmits = useCallback(
    async (event: any) => {
      event.preventDefault();
      try {
        setLoading(true);
        await axios.post("/api/edit", {
          name,
          city,
          price,
          state,
          image,
          address,
          garageNo,
          bedroomNo,
          bathroomNo,
          squaremeter,
          descriptions,
        });
        toast.success("Property Updated Successfully");
        console.log("Mate");
      } catch (error) {
        console.log(error);
        toast.error(
          "Sorry, an Error Occured please Try again or Please Fill in Missing Fields"
        );
      } finally {
        setLoading(false);
      }
    },
    [
      name,
      city,
      price,
      state,
      image,
      address,
      garageNo,
      bedroomNo,
      bathroomNo,
      squaremeter,
      descriptions,
    ]
  );

  useEffect(() => {
    const property = router.propertyId;
    list(property);
  }, [router]);

  return (
    <>
      <ToastContainer />
      <main className="flex min-h-screen flex-col items-center gap-10 p-2 py-4 w-full">
        <Header
          title="Edit Property"
          style="text-[35px] font-serif font-semibold "
        />
        <div className="flex shadow-xl p-3 py-7 lg:p-10 rounded-xl bg-[#3128ac] text-white flex-col flex-wrap justify-start items-start w-full lg:w-[70%] gap-16 ">
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
            <Header title="Image" style="text-[20px]" />
            <Input
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image"
              disabled={isloading}
              style="block w-full p-0 file:p-5 file:bg-[#1B00EA] border-0 file:text-white file:mr-5 file:border-0 file:border-transparent text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              type={"file"}
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
              {!!uploadedImage?.length &&
                uploadedImage.map((value, index) => (
                  <img
                    key={index}
                    width={900}
                    // onBlur={() => `${value}`}
                    src={`${value}` || ""}
                    height={800}
                    alt={""}
                    className="w-[200px] h-[200px] object-cover rounded-md overflow-hidden "
                  />
                ))}
            </div>

            <label
              htmlFor="files"
              className="flex justify-center items-center gap-2 w-[25%] p-5 bg-[#1B00EA] text-lg text-white border border-gray-300 rounded-lg cursor-pointer "
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
                // onChange={(ev) => handleImageChange(ev)}
                type="file"
                accept="image/png, image/jpeg"
                id="files"
                hidden
              />{" "}
            </label>
          </div>
          <button
            // onSubmit={(event) => onSubmits(event)}
            disabled={isloading}
            className="w-[30%] cursor-pointer p-4 rounded-md  bg-[#1B00EA] text-white border-white font-bold disabled:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-30   "
            type="submit"
          >
            Add
          </button>
        </div>
      </main>
    </>
  );
};

export default Edit;
