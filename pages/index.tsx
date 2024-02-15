import { GetStaticProps } from "next";
import connectToDB from "@/utils/db";

// models
import carsModel from "@/models/car";

// types
import { CarInterface } from "@/types";

// components
import PickupDropoffDetails from "@/components/modules/PickupDropoffDetails/PickupDropoffDetails";
import Banner from "@/components/templates/Index/Banner";
import PopularCar from "@/components/templates/Index/PopularCar";
import RecomendationCar from "@/components/templates/Index/RecomendationCar";

export default function Home({ cars }: { cars: CarInterface[] }) {
  return (
    <div className="px-6 md:px-16 py-8">
      <Banner />
      <PickupDropoffDetails />
      <PopularCar cars={cars} />
      <RecomendationCar cars={cars} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
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
