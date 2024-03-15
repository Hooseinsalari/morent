import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// context
import { useRentalCart } from "@/context/RentalCartContextProvider";

// helper
import { numberOfDays } from "@/helper/functions";

// svg
import Star from "@/public/svg/star-icon.svg";
import EmptyStar from "@/public/svg/empty-star.svg";

const RentSummary = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) => {
  // ** context
  const { state } = useRentalCart();

  console.log(state);

  // ** calc total price
  let totalPrice = (
    +numberOfDays(startDate, endDate) * state?.selectedCar?.price!
  ).toFixed(2);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && state.selectedCar && (
        <div className="bg-white rounded-md p-4 my-8">
          <h1 className="text-secondinary-500 font-bold sm:text-xl">
            Rental Summary
          </h1>
          <p className="text-secondinary-300 text-xs font-medium sm:text-sm">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
          <Link
            href={`/vehicles/${state?.selectedCar?._id}`}
            className="flex items-center justify-start mt-12 mb-3 border-b pb-12"
          >
            <div className="w-1/2 bg-car-bg bg-cover bg-no-repeat rounded-xl py-3 sm:w-2/5">
              <Image
                width={800}
                height={800}
                className="w-full h-auto"
                src={state?.selectedCar?.image}
                alt={state.selectedCar.name}
              />
            </div>
            <div className="ml-3">
              <h1 className="text-secondinary-500 text-xl mb-3 font-bold sm:text-2xl">
                {state?.selectedCar?.name}
              </h1>
              <div className="xl:flex xl:items-center xl:justify-center xl:gap-x-3">
                <div className="flex items-center">
                  <Image
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    src={Star}
                    alt="star"
                  />
                  <Image
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    src={Star}
                    alt="star"
                  />
                  <Image
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    src={Star}
                    alt="star"
                  />
                  <Image
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    src={Star}
                    alt="star"
                  />
                  <Image
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    src={EmptyStar}
                    alt="star"
                  />
                </div>
                <h3 className="text-[#3D5278] text-xs font-semibold mt-1 sm:mt-0 sm:text-sm">
                  440+ Reviewer
                </h3>
              </div>
            </div>
          </Link>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-secondinary-300 text-xs font-semibold sm:text-base">
              Subtotal
            </h2>
            <h2 className="text-secondinary-500 text-base font-semibold ">
              ${state?.selectedCar?.price.toFixed(2)}
            </h2>
          </div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-secondinary-300 text-xs font-semibold sm:text-base">
              Tax
            </h2>
            <h2 className="text-secondinary-500 text-base font-semibold ">
              $0
            </h2>
          </div>
          <form className="flex items-center justify-between px-2 mb-6 bg-[#F6F7F9] rounded-lg sm:py-2">
            <input
              required={true}
              type="text"
              placeholder="Apply promo code"
              className="bg-transparent focus:ring-0 border-none text-secondinary-300 text-xs py-2 sm:text-sm"
            />
            <button className="text-secondinary-500 text-right text-xs font-semibold sm:text-sm sm:px-4">
              Apply now
            </button>
          </form>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-secondinary-500 text-base font-bold mb-1 sm:text-xl">
                Total Rental Price
              </h1>
              <h3 className="text-xs font-medium text-secondinary-300 sm:text-sm">
                Overall price rental
              </h3>
            </div>
            <h1 className="text-secondinary-500 text-xl font-bold sm:text-2xl">
              {/* calculate total price */}$
              {startDate && endDate && state?.selectedCar?.price
                ? totalPrice
                : state?.selectedCar?.price.toFixed(2)}
            </h1>{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default RentSummary;
