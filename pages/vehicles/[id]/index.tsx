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
  const { data } = await axios.get(`${BASE_API_URL}/api/cars`);
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
    `${BASE_API_URL}/api/cars/${params?.id}`
  );

  //? fetch car reviews
  const { data: reviews } = await axios.get(
    `${BASE_API_URL}/api/reviews/${params?.id}`
  );

  //? fetch cars
  const { data: popularCar } = (
    await axios.get(`${BASE_API_URL}/api/cars`)
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
