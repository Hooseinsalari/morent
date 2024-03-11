import { CarInterface } from "@/types";
import Link from "next/link";
import React from "react";
import GasStation from "@/public/svg/gas-station.svg";
import Gear from "@/public/svg/gear.svg";
import Capacity from "@/public/svg/capacity.svg";
import Image from "next/image";

const CarCard = ({ car }: { car: CarInterface }) => {
  return (
    <div className="bg-white rounded-lg px-3 py-4 mt-5 w-full">
      <div className="mb-4">
        <h2 className="text-secondinary-500 font-semibold text-base">
          {car.name}
        </h2>
        <h3 className="text-secondinary-300 text-sm">{car.type}</h3>
      </div>

      <Link
        href={`/vehicles/${car._id}`}
        className="flex items-center justify-between sm:flex-col sm:mt-10"
      >
        <div className="w-2/3 sm:w-full mr-2 h-32 flex items-center justify-center">
          <img
            src={car.image}
            referrerPolicy="no-referrer"
            alt="car"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="sm:flex sm:mt-12 sm:w-full justify-between md:items-center">
          <div className="flex items-center mb-4">
            <Image
              width={16}
              height={16}
              className="mr-1"
              src={GasStation}
              alt="gas station"
            />
            <span className="text-secondinary-300 font-medium text-xs">
              {car.gasoline}L
            </span>
          </div>
          <div className="flex items-center mb-4">
            <Image
              width={16}
              height={16}
              className="mr-1"
              src={Gear}
              alt="gear"
            />
            <span className="text-secondinary-300 font-medium text-xs">
              {car.steering}
            </span>
          </div>
          <div className="flex items-center mb-4">
            <Image
              width={16}
              height={16}
              className="mr-1"
              src={Capacity}
              alt="capacity"
            />
            <span className="text-secondinary-300 font-medium text-xs">
              {car.capacity} People
            </span>
          </div>
        </div>
      </Link>

      <div className="flex items-center justify-between mt-5 sm:mt-3">
        <h3 className="text-secondinary-500 text-base font-semibold">
          ${car.price.toFixed(2)}/
          <span className="text-xs text-secondinary-300">day</span>
        </h3>
        <button className="bg-primary-500 text-sm text-white px-4 py-2 rounded-[4px]">
          Rental Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
