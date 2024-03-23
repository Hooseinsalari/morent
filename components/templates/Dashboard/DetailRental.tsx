import { useRentalCart } from "@/context/RentalCartContextProvider";
import { useUser } from "@/context/UserContextProvider";
import { getMonthName } from "@/helper/functions";
import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";

const DetailRental = () => {
  // ** context
  const { user } = useUser();

  // ** var
  const lastCar: number = user?.rentedCars ? user?.rentedCars?.length - 1 : 0;

  return (
    <>
      {user?.rentedCars[lastCar] ? (
        <div className="bg-white rounded-lg p-4 lg:w-1/2">
          <h1 className="text-secondinary-500 font-bold">Detail Rental</h1>

          <div className="flex items-center my-12">
            <div className="bg-car-bg bg-cover w-1/2 bg-no-repeat rounded-lg lg:w-[40%] sm:w-[30%]">
              <Image
                src={user?.rentedCars[lastCar].carInfo?.image}
                alt="image"
                width={500}
                height={400}
              />
            </div>
            <div className="ml-2">
              <h1 className="text-secondinary-500 text-lg font-bold">
                {user.rentedCars[lastCar].carInfo?.name}
              </h1>
              <h1 className="text-[#3D5278] text-sm font-medium">
                {user.rentedCars[lastCar].carInfo?.type}
              </h1>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="text-secondinary-500 font-semibold">Pick-Up</h1>
            <div className="bg-[#F6F7F9] rounded-lg p-2 py-4">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-secondinary-500 font-semibold">Location</h1>
                <h1 className="text-secondinary-400 font-medium">
                  {user.rentedCars[lastCar].pickUpDetails.location}
                </h1>
              </div>
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-secondinary-500 font-semibold">Time</h1>
                <h1 className="text-secondinary-400 font-medium">
                  {user.rentedCars[lastCar].pickUpDetails?.time}
                </h1>
              </div>
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-secondinary-500 font-semibold">Date</h1>
                <h1 className="text-secondinary-400 font-medium">
                  <span className="mr-1">
                    {user.rentedCars[lastCar].pickUpDetails?.date.day}
                  </span>
                  <span className="mr-1">
                    {getMonthName(
                      user.rentedCars[lastCar].pickUpDetails?.date?.month
                    )}
                  </span>
                  <span>
                    {user.rentedCars[lastCar].pickUpDetails?.date.year}
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="text-secondinary-500 font-semibold">Drop-Off</h1>
            <div className="bg-[#F6F7F9] rounded-lg p-2 py-4">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-secondinary-500 font-semibold">Location</h1>
                <h1 className="text-secondinary-400 font-medium">
                  {user.rentedCars[lastCar].dropOffDetails?.location}
                </h1>
              </div>
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-secondinary-500 font-semibold">Time</h1>
                <h1 className="text-secondinary-400 font-medium">
                  {user.rentedCars[lastCar].dropOffDetails?.time}
                </h1>
              </div>
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-secondinary-500 font-semibold">Date</h1>
                <h1 className="text-secondinary-400 font-medium">
                  <span className="mr-1">
                    {user.rentedCars[lastCar].dropOffDetails?.date.day}
                  </span>
                  <span className="mr-1">
                    {getMonthName(
                      user.rentedCars[lastCar].dropOffDetails?.date?.month
                    )}
                  </span>
                  <span>
                    {user.rentedCars[lastCar].dropOffDetails?.date.year}
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className="py-4 border-t mt-8 flex items-center justify-between">
            <div>
              <h1 className="text-secondinary-500 font-bold">
                Total Rental Price
              </h1>
              <h2 className="text-secondinary-300 text-xs font-medium">
                Overall price rental
              </h2>
            </div>
            <h2 className="text-secondinary-500 font-bold text-lg lg:text-xl">
              ${user.rentedCars[lastCar].carInfo.price}
            </h2>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DetailRental;
