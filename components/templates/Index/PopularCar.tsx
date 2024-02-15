import CarCard from "@/components/modules/CarCard/CarCard";
import CarSkeleton from "@/skeleton/CarSkeleton";
import { CarInterface } from "@/types";
import Link from "next/link";
import React from "react";

const PopularCar = ({ cars }: { cars: CarInterface[] }) => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-secondinary-300 font-semibold text-sm md:text-base">
          Popular Car
        </h2>
        <Link
          href="/vehicles"
          className="text-primary-500 font-semibold text-sm md:text-base"
        >
          View All
        </Link>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 xl:grid-cols-4">
        {cars ? (
          cars
            .slice(0, 4)
            .map((car: CarInterface) => <CarCard car={car} key={car._id} />)
        ) : (
          <CarSkeleton cards={4} />
        )}
      </div>
    </div>
  );
};

export default PopularCar;
