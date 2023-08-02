import { greatVibes } from "@/public/font";
import { FaTelegram, FaPaperPlane, FaChevronDown, FaLocationPin } from "react-icons/fa6";

const BannerLeft = () => {
  return (
    <div
      className={`flex flex-col  justify-start gap-6 items-start h-[55vh] 2xl:h-full  w-full ${greatVibes} 2xl:py-32  `}
    >
      <div className="flex flex-col gap-2 justify-start items-start pl-3 lg:pl-20 ">
        <h3
          className={`p-5 w-full lg:w-[100%] xl:w-[90%] break-words text-[45px] lg:text-[49px] xl:text-[60px] text-[#191726] h-full tracking-[0.5px] font-[600] leading-[50px] lg:leading-[60px] xl:leading-[70px] ${greatVibes} `}
        >
          Let’s start the search for your dream home!
        </h3>
        <span
          className={`px-5 w-full lg:w-[100%] xl:w-[70%]  break-words text-[18px] text-[#504F59] font-[400] leading-[28px] ${greatVibes} `}
        >
          Your dream home awaits! This stunning property features all the
          amenities and comfort you desire.
        </span>
      </div>
      <div className=" pl-7 shadow-lg pr-8  lg:pl-12 flex-wrap flex items-start justify-start lg:grid lg:grid-cols-4 gap-6 lg:mt-5 py-3.5 lg:pr-4 md:rounded-r-md bg-[white] ">
        <select className="bg-gray-50 border-[2px] w-full  text-gray-900 text-sm rounded-lg ring-blue-500 border-blue-500 flex justify-center items-center outline-none px-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected value="property_type">
            Property Type
          </option>
        </select>
        <input
          type="text"
          placeholder={`Search of Location`}
          className="bg-gray-50 border-[2px] col-span-2 w-full outline-none border-gray-300  text-gray-900 text-sm rounded-lg  px-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button className="flex justify-center items-center  lg:h-full px-6 py-2.5 rounded-md " >
            Search
        </button>
      </div>
    </div>
  );
};

export default BannerLeft;
