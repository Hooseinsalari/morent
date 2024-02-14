import { GetStaticProps } from "next";
import axios from "axios";

// models
import carsModel from "@/models/car";

// components
import PickupDropoffDetails from "@/components/modules/PickupDropoffDetails/PickupDropoffDetails";
import Banner from "@/components/templates/Index/Banner";
import { CarInterface } from "@/types";
import connectToDB from "@/utils/db";

export default function Home({ cars }: { cars: CarInterface[] }) {
  return (
    <div className="px-6 md:px-16 py-8">
      <Banner />
      <PickupDropoffDetails />
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
