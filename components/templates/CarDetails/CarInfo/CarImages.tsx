import Image from "next/image";
import React from "react";

// images
import gallery1 from "@/public/images/gallery1.jpg";
import gallery2 from "@/public/images/gallery2.jpg";
import gallery3 from "@/public/images/gallery3.jpg";
import { CarInterface } from "@/types";

const CarImages = ({
  setOpen,
  car
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  car: CarInterface
}) => {
  return (
    <div className="mt-5 sm:flex lg:block lg:flex-1">
      <Image
        width={800}
        height={1000}
        className="w-[30rem] mx-auto cursor-pointer"
        src={car.image}
        alt="image"
        priority={true}
        onClick={() => setOpen(true)}
      />
      <div className="flex items-center justify-center flex-wrap gap-2 lg:gap-x-7 sm:flex-nowrap sm:flex-col lg:flex-row">
        <Image
          onClick={() => setOpen(true)}
          className="w-20 h-20 sm:w-28 sm:h-28 rounded-lg cursor-pointer"
          src={gallery1}
          alt="car image"
          priority={true}
        />
        <Image
          onClick={() => setOpen(true)}
          className="w-20 h-20 sm:w-28 sm:h-28 rounded-lg cursor-pointer"
          src={gallery2}
          alt="car image"
          priority={true}
        />
        <Image
          onClick={() => setOpen(true)}
          className="w-20 h-20 sm:w-28 sm:h-28 rounded-lg cursor-pointer"
          src={gallery3}
          alt="car image"
          priority={true}
        />
      </div>
    </div>
  );
};

export default CarImages;
