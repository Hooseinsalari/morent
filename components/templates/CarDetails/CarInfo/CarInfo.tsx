import React, { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Image from "next/image";

// icons
import Star from "@/public/svg/star-icon.svg";
import EmptyStar from "@/public/svg/empty-star.svg";

// gallery
import Lightbox from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";

// types
import { CarInterface } from "@/types";

// image
import CarImages from "./CarImages";

// component
import DetailItems from "./DetailItems";

// context
import { useUser } from "@/context/UserContextProvider";
import { useRentalCart } from "@/context/RentalCartContextProvider";

// ** slides
const slides = [
  {
    src: "https://utfs.io/f/f12ab613-b428-49bc-80f1-d5c8c40dbaee-tm77q9.jpg",
    alt: "image 1",
    width: 3840,
    height: 2560,
    srcSet: [
      {
        src: "https://utfs.io/f/f12ab613-b428-49bc-80f1-d5c8c40dbaee-tm77q9.jpg",
        width: 320,
        height: 213,
      },
      {
        src: "https://utfs.io/f/f12ab613-b428-49bc-80f1-d5c8c40dbaee-tm77q9.jpg",
        width: 640,
        height: 427,
      },
      {
        src: "https://utfs.io/f/f12ab613-b428-49bc-80f1-d5c8c40dbaee-tm77q9.jpg",
        width: 1200,
        height: 800,
      },
      {
        src: "https://utfs.io/f/f12ab613-b428-49bc-80f1-d5c8c40dbaee-tm77q9.jpg",
        width: 2048,
        height: 1365,
      },
      {
        src: "https://utfs.io/f/f12ab613-b428-49bc-80f1-d5c8c40dbaee-tm77q9.jpg",
        width: 3840,
        height: 2560,
      },
    ],
  },
  {
    src: "https://utfs.io/f/13a87ea1-2767-4278-ba61-8598cfa3d563-tm77q7.jpg",
    alt: "image 1",
    width: 3840,
    height: 2560,
    srcSet: [
      {
        src: "https://utfs.io/f/13a87ea1-2767-4278-ba61-8598cfa3d563-tm77q7.jpg",
        width: 320,
        height: 213,
      },
      {
        src: "https://utfs.io/f/13a87ea1-2767-4278-ba61-8598cfa3d563-tm77q7.jpg",
        width: 640,
        height: 427,
      },
      {
        src: "https://utfs.io/f/13a87ea1-2767-4278-ba61-8598cfa3d563-tm77q7.jpg",
        width: 1200,
        height: 800,
      },
      {
        src: "https://utfs.io/f/13a87ea1-2767-4278-ba61-8598cfa3d563-tm77q7.jpg",
        width: 2048,
        height: 1365,
      },
      {
        src: "https://utfs.io/f/13a87ea1-2767-4278-ba61-8598cfa3d563-tm77q7.jpg",
        width: 3840,
        height: 2560,
      },
    ],
  },
  {
    src: "https://utfs.io/f/8cc76fa6-51be-4e67-b4d7-6201b1d8946d-tm77q8.jpg",
    alt: "image 1",
    width: 3840,
    height: 2560,
    srcSet: [
      {
        src: "https://utfs.io/f/8cc76fa6-51be-4e67-b4d7-6201b1d8946d-tm77q8.jpg",
        width: 320,
        height: 213,
      },
      {
        src: "https://utfs.io/f/8cc76fa6-51be-4e67-b4d7-6201b1d8946d-tm77q8.jpg",
        width: 640,
        height: 427,
      },
      {
        src: "https://utfs.io/f/8cc76fa6-51be-4e67-b4d7-6201b1d8946d-tm77q8.jpg",
        width: 1200,
        height: 800,
      },
      {
        src: "https://utfs.io/f/8cc76fa6-51be-4e67-b4d7-6201b1d8946d-tm77q8.jpg",
        width: 2048,
        height: 1365,
      },
      {
        src: "https://utfs.io/f/8cc76fa6-51be-4e67-b4d7-6201b1d8946d-tm77q8.jpg",
        width: 3840,
        height: 2560,
      },
    ],
  },
];

const CarInfo = ({ car }: { car: CarInterface }) => {
  // ** states
  const [open, setOpen] = useState<boolean>(false);

  // ** context
  const { user } = useUser();
  const { dispatch } = useRentalCart();

  // ** router
  const router = useRouter();

  // ** handler
  const rentCarHandler = () => {
    if (user) {
      dispatch({ type: "RENT", payload: car });
      router.push("/payment");
    } else {
      toast.error("Login required to proceed with car rental.");
      router.push("/signin?redirect=payment");
    }
  };

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Zoom]}
      />
      <div className="flex items-center justify-center flex-col lg:flex-row lg:items-stretch lg:gap-x-8">
        <CarImages car={car} setOpen={setOpen} />
        <div className="bg-white py-5 px-4 mt-8 rounded-lg shadow-sm lg:flex-1 lg:flex lg:flex-col">
          <h1 className="text-secondinary-500 text-xl font-bold lg:text-3xl">
            {car.name}
          </h1>
          <div className="flex items-center gap-x-2 mt-2">
            <div className="flex items-center">
              <Image
                width={12}
                height={12}
                className="w-3 h-3 sm:w-4 sm:h-4"
                src={Star}
                alt="star"
              />
              <Image
                width={12}
                height={12}
                className="w-3 h-3 sm:w-4 sm:h-4"
                src={Star}
                alt="star"
              />
              <Image
                width={12}
                height={12}
                className="w-3 h-3 sm:w-4 sm:h-4"
                src={Star}
                alt="star"
              />
              <Image
                width={12}
                height={12}
                className="w-3 h-3 sm:w-4 sm:h-4"
                src={Star}
                alt="star"
              />
              <Image
                width={12}
                height={12}
                className="w-3 h-3 sm:w-4 sm:h-4"
                src={EmptyStar}
                alt="star"
              />
            </div>
            <h3 className="text-[#3D5278] text-xs font-medium mt-1 sm:mt-0 sm:text-sm">
              440+ Reviewer
            </h3>
          </div>
          <p className="my-5 text-secondinary-300 font-normal text-sm leading-6 lg:text-base">
            {`NISMO has become the embodiment of Nissan's outstanding performance,
            inspired by the most unforgiving proving ground, the "race track".`}
          </p>
          <div className="grid grid-cols-2 gap-y-5 gap-x-5 lg:mt-auto lg:mb-14">
            <DetailItems title="Type Car" value={car.type} />
            <DetailItems title="Capacity" value={car.capacity} />
            <DetailItems title="Steering" value={car.steering} />
            <DetailItems title="Gasoline" value={car.gasoline} />
          </div>
          <div className="flex items-center justify-between mt-8 lg:mt-auto">
            <h3 className="text-secondinary-500 text-lg font-semibold lg:text-xl">
              ${car.price.toFixed(2)}/
              <span className="text-xs text-secondinary-300">day</span>
            </h3>
            <button
              className="bg-primary-500 text-sm text-white px-4 py-2 rounded-[4px] lg:text-lg"
              onClick={rentCarHandler}
            >
              Rental Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarInfo;
