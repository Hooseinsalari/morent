import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

// components
import CarCard from "@/components/modules/CarCard/CarCard";
import PickupDropoffDetails from "@/components/modules/PickupDropoffDetails/PickupDropoffDetails";
import FilterBar from "@/components/templates/Vehicles/FilterBar/FilterBar";

// models
import carsModel from "@/models/car";

// types
import { CarInterface, FilterType, QueryParamsFilter } from "@/types";

// utils
import connectToDB from "@/utils/db";

const Vehicles = ({ cars }: { cars: CarInterface[] }) => {
  // ** router
  const router = useRouter();

  // ** states
  const [queryParamsFilter, setQueryParamsFilter] = useState<QueryParamsFilter>(
    { type: [], capacity: [], price: 50 }
  );

  // ** useEffect
  useEffect(() => {
    router.replace(
      {
        pathname: "/vehicles",
        query: {
          type: queryParamsFilter.type,
          capacity: queryParamsFilter.capacity,
          price: queryParamsFilter.price,
        },
      },
      undefined,
      { scroll: false }
    );

    window.scroll(0, 0);
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
            <div className="w-full flex items-center justify-center mt-10 p-4 rounded-md shadow-sm bg-white mx-auto col-span-4">
              <h1 className="text-xl font-semibold">Nothing Found!</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    connectToDB();

    const filter = {} as FilterType;

    if (query.type) {
      filter.type = query.type;
    }

    if (query.capacity) {
      filter.capacity = query.capacity;
    }

    if (query.price) {
      filter.price = { $gte: query.price };
    }

    const cars = await carsModel.find(filter);

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
