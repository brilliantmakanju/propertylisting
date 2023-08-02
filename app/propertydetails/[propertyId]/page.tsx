"use client";
import PropertyNav from "@/components/property/Nav";
import PropertyDetails from "@/components/property/Property/PropertyDetails";
import PropertyImage from "@/components/property/Property/PropertyImage";
import PropertyInfo from "@/components/property/Property/PropertyInfo";
import PropertySubImage from "@/components/property/Property/PropertySubImage";
import { greatVibes } from "@/public/font";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Images {
  link: string;
}

const ProertyView = () => {
  const param = useParams();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [state, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [garageNo, setGarageNo] = useState("");
  const [loading, setLoading] = useState(true);
  const [bedroomNo, setBedroom] = useState("");
  const [bathroomNo, setBathRoom] = useState("");
  const [squaremeter, setSquareMeter] = useState("");
  const [descriptions, setDescription] = useState("");
  const [images, setImages] = useState<Images[]>([]);
  // console.log(param.propertyId)

  //   {
  //     "property": {
  //         "user": "64c9d08698ea3e994364f579",
  //         "id": "64c9d88298ea3e994364f595",
  //         "city": "Nice",
  //         "name": "Matew",
  //         "images": [
  //             "https://soge.s3.amazonaws.com/lkt7tojwo9v5m9sopsj.jpeg",
  // "https://soge.s3.amazonaws.com/lkt7tojwo9v5m9sopsj.jpeg",
  // "https://soge.s3.amazonaws.com/lkt7tojwo9v5m9sopsj.jpeg",
  // "https://soge.s3.amazonaws.com/lkt7tojwo9v5m9sopsj.jpeg",
  // "https://soge.s3.amazonaws.com/lkt7tojwo9v5m9sopsj.jpeg"
  //         ],

  //         "price": "1222",
  //         "country": "UK",
  //         "address": "Mate",
  //         "garageNo": "1",
  //         "bedroomNo": "2",
  //         "bathroomNo": "3",
  //         "squaremeter": "12",
  //         "descriptions": "Lovely",
  //         "updatedAt": "2023-08-02T04:15:59.761Z",
  //         "createdAt": "2023-08-02T04:15:59.761Z"
  //     }
  // }

  const propertysList = async () => {
    const res = await axios.post("/api/view", { id: param.propertyId });
    const resss = await res.data;
    // console.log(resss.listing)
    // console.log(resss);
    setName(res.data.property.name);
    setCity(res.data.property.city);
    setPrice(res.data.property.price);
    setImages(res.data.property.images);
    setCountry(res.data.property.country);
    setAddress(res.data.property.address);
    setBedroom(res.data.property.bedroomNo);
    setGarageNo(res.data.property.garageNo);
    setBathRoom(res.data.property.bathroomNo);
    setSquareMeter(res.data.property.squaremeter);
    setDescription(res.data.property.descriptions);
    // setList(resss);
    setLoading(false);
  };

  useEffect(() => {
    propertysList();
  }, []);

  // console.log(images[0]);

  return (
    <main
      className={` ${greatVibes} flex min-h-screen flex-col  items-start  gap-12 w-full `}
    >
      {loading ? (
        <>
          <div className="flex md:hidden w-full px-2 items-start gap-12 flex-col ">
            <SkeletonTheme>
              <p>
                <Skeleton
                  height={100}
                  width={370}
                  count={1}
                  className="w-full hidden"
                />
              </p>
            </SkeletonTheme>
            <div className="grid lg:grid-cols-2 grid-cols-1 pb-10 flex-shrink-0 justify-between items-start gap-5 ">
              <div className="flex flex-col items-start w-full justify-start gap-9 ">
                <>
                  <SkeletonTheme>
                    <p>
                      <Skeleton height={650} width={370} count={1} />
                    </p>
                  </SkeletonTheme>
                  <div className="flex justify-start w-full flex-wrap pb-6  items-start gap-5 ">
                    <Skeleton
                      height={200}
                      width={200}
                      count={1}
                      className="w-[20px]"
                    />
                    <Skeleton height={200} width={200} count={1} />
                    <Skeleton height={200} width={200} count={1} />
                  </div>
                </>
              </div>
              <div className="flex flex-col pt-10 w-full lg:px-6 items-start justify-start gap-6 ">
                <SkeletonTheme>
                  <p>
                    <Skeleton height={250} width={370} count={1} />
                  </p>
                </SkeletonTheme>
                <SkeletonTheme>
                  <p>
                    <Skeleton height={250} width={370} count={1} />
                  </p>
                </SkeletonTheme>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex md:hidden w-full px-5 items-start gap-12 flex-col ">
            <SkeletonTheme>
              <p>
                <Skeleton
                  height={125}
                  width={600}
                  count={1}
                  className="w-full hidden"
                />
              </p>
            </SkeletonTheme>
            <div className="grid lg:grid-cols-2 grid-cols-1 pb-10 flex-shrink-0 justify-between items-start gap-5 ">
              <div className="flex flex-col items-start w-full justify-start gap-9 ">
                <>
                  <SkeletonTheme>
                    <p>
                      <Skeleton height={650} width={600} count={1} />
                    </p>
                  </SkeletonTheme>
                  <div className="flex justify-start w-full overflow-x-scroll pb-6 md:overflow-hidden scroll-m-0 items-start gap-5 ">
                    <SkeletonTheme>
                      <p>
                        <Skeleton height={200} width={200} count={1} />
                      </p>
                    </SkeletonTheme>
                    <SkeletonTheme>
                      <p>
                        <Skeleton height={200} width={200} count={1} />
                      </p>
                    </SkeletonTheme>
                    <SkeletonTheme>
                      <p>
                        <Skeleton height={200} width={200} count={1} />
                      </p>
                    </SkeletonTheme>
                  </div>
                </>
              </div>
              <div className="flex flex-col pt-10 w-full lg:px-6 items-start justify-start gap-6 ">
                <SkeletonTheme>
                  <p>
                    <Skeleton height={250} width={600} count={1} />
                  </p>
                </SkeletonTheme>
                <SkeletonTheme>
                  <p>
                    <Skeleton height={250} width={600} count={1} />
                  </p>
                </SkeletonTheme>
              </div>
            </div>
          </div>
          {/* <div className="hidden md:flex w-full px-10 items-start gap-12 flex-col ">
            <SkeletonTheme>
              <p>
                <Skeleton
                  height={125}
                  width={800}
                  count={1}
                  className="w-full hidden"
                />
              </p>
            </SkeletonTheme>
            <div className="grid lg:grid-cols-2 grid-cols-1 pb-10 flex-shrink-0 justify-between items-start gap-5 ">
              <div className="flex flex-col items-start w-full justify-start gap-9 ">
                <>
                  <SkeletonTheme>
                    <p>
                      <Skeleton height={650} width={800} count={1} />
                    </p>
                  </SkeletonTheme>
                  <div className="flex justify-start w-full overflow-x-scroll pb-6 md:overflow-hidden scroll-m-0 items-start gap-5 ">
                    <SkeletonTheme>
                      <p>
                        <Skeleton height={200} width={200} count={1} />
                      </p>
                    </SkeletonTheme>
                    <SkeletonTheme>
                      <p>
                        <Skeleton height={200} width={200} count={1} />
                      </p>
                    </SkeletonTheme>
                    <SkeletonTheme>
                      <p>
                        <Skeleton height={200} width={200} count={1} />
                      </p>
                    </SkeletonTheme>
                  </div>
                </>
              </div>
              <div className="flex flex-col pt-10 w-full lg:px-6 items-start justify-start gap-6 ">
                <SkeletonTheme>
                  <p>
                    <Skeleton height={250} width={800} count={1} />
                  </p>
                </SkeletonTheme>
                <SkeletonTheme>
                  <p>
                    <Skeleton height={250} width={800} count={1} />
                  </p>
                </SkeletonTheme>
              </div>
            </div>
          </div> */}
          <div className="hidden lg:flex w-full items-start gap-12 flex-col ">
            <SkeletonTheme>
              <p>
                <Skeleton
                  height={125}
                  width={1500}
                  count={1}
                  className="w-full hidden"
                />
              </p>
            </SkeletonTheme>
            <div className="grid lg:grid-cols-2 grid-cols-1 pb-10 flex-shrink-0 justify-between items-start gap-5 ">
              <div className="flex flex-col items-start w-full justify-start gap-9 ">
                <>
                  <SkeletonTheme>
                    <p>
                      <Skeleton height={650} width={800} count={1} />
                    </p>
                  </SkeletonTheme>
                  <div className="flex justify-start w-full overflow-x-scroll pb-6 md:overflow-hidden scroll-m-0 items-start gap-5 ">
                    <SkeletonTheme>
                      <p>
                        <Skeleton height={200} width={200} count={1} />
                      </p>
                    </SkeletonTheme>
                    <SkeletonTheme>
                      <p>
                        <Skeleton height={200} width={200} count={1} />
                      </p>
                    </SkeletonTheme>
                    <SkeletonTheme>
                      <p>
                        <Skeleton height={200} width={200} count={1} />
                      </p>
                    </SkeletonTheme>
                  </div>
                </>
              </div>
              <div className="flex flex-col pt-10 w-full lg:px-6 items-end justify-end gap-6 ">
                <SkeletonTheme>
                  <p>
                    <Skeleton height={250} width={600} count={1} />
                  </p>
                </SkeletonTheme>
                <SkeletonTheme>
                  <p>
                    <Skeleton height={250} width={600} count={1} />
                  </p>
                </SkeletonTheme>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <PropertyNav
            price={price}
            name={name}
            city={city}
            squaremeter={squaremeter}
            state={state}
            address={address}
          />
          <div className="grid lg:grid-cols-2 grid-cols-1 pb-10 flex-shrink-0 justify-between items-start gap-5 ">
            <div className="flex flex-col items-start w-full justify-start gap-9 ">
              <>
                <PropertyImage image={images[0]} />
                <div className="flex justify-start w-full overflow-x-scroll pb-6 md:overflow-hidden scroll-m-0 items-start gap-5 ">
                  {images.map((value, index) => {
                    console.log(value);
                    return (
                      <PropertySubImage
                        key={index}
                        alt={"Maldon"}
                        image={value}
                      />
                      // <></>
                    );
                  })}
                </div>
              </>
            </div>
            <div className="flex flex-col pt-10 w-full lg:px-6 items-start justify-start gap-6 ">
              <PropertyDetails
                bedroom={bedroomNo}
                bathroom={bathroomNo}
                garage={garageNo}
              />
              <PropertyInfo description={descriptions} />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default ProertyView;
