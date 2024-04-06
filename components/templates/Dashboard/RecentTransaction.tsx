import React from "react";

// context
import Image from "next/image";

// function
import { getMonthName } from "@/helper/functions";

// type
import { UserData } from "@/types";

const RecentTransaction = ({ user }: { user: UserData | null }) => {
  return (
    <div className="bg-white rounded-lg p-4 mt-8">
      <h1 className="text-secondinary-500 font-bold">Recent Transaction</h1>
      {user?.rentedCars.length ? (
        user?.rentedCars?.map((car, index) => {
          return (
            <div
              key={index}
              className={`flex items-center justify-between my-2 border-b py-2 ${
                user.rentedCars.length - 1 === index ? "border-b-0" : ""
              }`}
            >
              <div className="flex items-center">
                <div className="w-20">
                  <Image
                    src={car.carInfo.image}
                    alt="car"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="ml-2">
                  <h1 className="text-secondinary-500 font-bold text-sm">
                    {car.carInfo.name}
                  </h1>
                  <h2 className="text-secondinary-300 text-xs font-medium">
                    {car.carInfo.type}
                  </h2>
                </div>
              </div>
              <div>
                <h2 className="text-xs font-medium">
                  {car.pickUpDetails.date.day}{" "}
                  {getMonthName(car.pickUpDetails.date.month)}
                </h2>
                <h1 className="text-secondinary-500 text-sm font-bold">
                  ${car.carInfo.price}
                </h1>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-secondinary-500 text-center py-4 font-medium">
          <h1>There is nothing</h1>
        </div>
      )}
    </div>
  );
};

export default RecentTransaction;
