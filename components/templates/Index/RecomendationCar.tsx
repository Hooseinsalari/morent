import Link from "next/link";

// components
import CarCard from "@/components/modules/CarCard/CarCard";

// skeleton
import CarSkeleton from "@/skeleton/CarSkeleton";

// types
import { CarInterface } from "@/types";

const RecomendationCar = ({ cars }: { cars: CarInterface[] }) => {
  return (
    <div className="my-16">
      <h2 className="text-secondinary-300 font-semibold text-sm md:text-base">
        Recomendation Car
      </h2>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 xl:grid-cols-4">
        {cars ? (
          cars
            .slice(4, 12)
            .map((car: CarInterface) => <CarCard car={car} key={car._id} />)
        ) : (
          <CarSkeleton cards={4} />
        )}
      </div>
      <div className="flex items-center mt-16">
        <Link
          href="/vehicles"
          className="mr-auto ml-auto bg-primary-500 text-sm text-white px-4 py-2 rounded-[4px]"
        >
          Show more car
        </Link>
        <h3 className="text-secondinary-300 text-sm font-medium">
          {cars.length} Car
        </h3>
      </div>
    </div>
  );
};

export default RecomendationCar;
