import CarInfo from "@/components/templates/CarDetails/CarInfo/CarInfo";
import { CarInterface } from "@/types";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

const index = ({ car }: { car: CarInterface }) => {
  console.log(car);

  return (
    <div className="px-6 md:px-16 py-8">
      <CarInfo car={car} />
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

  const { data } = await axios.get(
    `http://localhost:3000/api/cars/${params?.id}`
  );

  if (data.data) {
    return {
      props: {
        car: data.data,
      },
    };
  }

  return {
    props: {},
  };
};
