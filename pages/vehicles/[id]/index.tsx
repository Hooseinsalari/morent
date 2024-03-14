import CarInfo from "@/components/templates/CarDetails/CarInfo/CarInfo";
import CarReviews from "@/components/templates/CarDetails/CarReviews/CarReviews";
import PopularCar from "@/components/templates/Index/PopularCar";
import { CarInterface, ReviewInterface } from "@/types";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

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
  const { data } = await axios.get("http://localhost:3000/api/cars");
  const paths = data.data.map((car: CarInterface) => {
    return {
      params: { id: car._id },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  //? fetch car data
  const { data } = await axios.get(
    `http://localhost:3000/api/cars/${params?.id}`
  );

  //? fetch car reviews
  const { data: reviews } = await axios.get(
    `http://localhost:3000/api/reviews/${params?.id}`
  );

  //? fetch cars
  const { data: popularCar } = (
    await axios.get("http://localhost:3000/api/cars")
  ).data;

  if (data.data) {
    return {
      props: {
        car: data.data,
        reviews: reviews,
        popularCar,
      },
      revalidate: 7200,
    };
  }

  return {
    props: {},
  };
};
