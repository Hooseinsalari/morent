import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

// components
import CarCard from "@/components/modules/CarCard/CarCard";
import PickupDropoffDetails from "@/components/modules/PickupDropoffDetails/PickupDropoffDetails";
import FilterBar from "@/components/templates/Vehicles/FilterBar/FilterBar";

// models
import carsModel from "@/models/car";

// skeleton
import CarSkeleton from "@/skeleton/CarSkeleton";

// types
import { CarInterface, QueryParamsFilter } from "@/types";

// utils
import connectToDB from "@/utils/db";

const Vehicles = ({ cars }: { cars: CarInterface[] }) => {
  const [queryParamsFilter, setQueryParamsFilter] = useState<QueryParamsFilter>(
    { type: [], capacity: [], price: 50 }
  );

  useEffect(() => {
    console.log(queryParamsFilter);
  }, [queryParamsFilter]);

  return (
    <div className="md:flex md:justify-between md:gap-x-10 min-h-screen">
      <FilterBar
        queryParamsFilter={queryParamsFilter}
        setQueryParamsFilter={setQueryParamsFilter}
      />
      <div className="px-6 md:pr-10 md:pl-0 py-8 md:w-3/4 lg:w-4/5 mb-16">
        <PickupDropoffDetails />
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 xl:grid-cols-4">
          {cars.length ? (
            cars.map((car: CarInterface) => <CarCard car={car} key={car._id} />)
          ) : (
            <CarSkeleton cards={8} />
          )}
          z
        </div>
      </div>
    </div>
  );
};

export default Vehicles;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    connectToDB();
    const cars = await carsModel.find({}, "-createdAt -updatedAt -__v ");

    return {
      props: {
        cars: JSON.parse(JSON.stringify(cars)),
      },
    };
  } catch (error) {
    console.log("Fetch cars faild", error);

    return {
      props: {
        cars: [],
      },
    };
  }
};
