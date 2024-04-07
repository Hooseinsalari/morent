import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import axios from "axios";

// components
import CarInfo from "@/components/templates/CarDetails/CarInfo/CarInfo";
import CarReviews from "@/components/templates/CarDetails/CarReviews/CarReviews";
import PopularCar from "@/components/templates/Index/PopularCar";

// constant
import { BASE_API_URL } from "@/constant";

// type
import { CarInterface, ReviewInterface } from "@/types";
import connectToDB from "@/utils/db";
import carsModel from "@/models/car";
import reviewsModel from "@/models/review";

interface Props {
  car: CarInterface;
  reviews: ReviewInterface[] | [];
  popularCar: CarInterface[];
}

const index = ({ car, reviews, popularCar }: Props) => {
  return (
    <div className="px-6 md:px-16 py-8">
      <CarInfo car={car} />
      <CarReviews reviews={reviews} />
      <PopularCar cars={popularCar} />
    </div>
  );
};

export default index;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    connectToDB();

    const cars = await carsModel.find({});

    const paths = cars.map((car: CarInterface) => {
      return {
        params: { id: car._id.toString() },
      };
    });

    return { paths, fallback: "blocking" };
  } catch (error) {
    return { paths: [], fallback: "blocking" };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  try {
    connectToDB();

    const car = await carsModel.findOne({ _id: params?.id });

    const reviews = await reviewsModel
      .find({ car: params?.id }, "-User.password")
      .populate("user", "-password");

    const popularCar = await carsModel.find({});

    if (car) {
      return {
        props: {
          car: JSON.parse(JSON.stringify(car)),
          reviews: JSON.parse(JSON.stringify(reviews)),
          popularCar: JSON.parse(JSON.stringify(popularCar)),
        },
        revalidate: 7200,
      };
    }
  } catch (error) {
    console.log("Fetch data in single car page faild!", error);

    return {
      props: {},
    };
  }

  return {
    props: {},
  };
};
