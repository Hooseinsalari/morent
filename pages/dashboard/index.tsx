import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";

// components
import DetailRental from "@/components/templates/Dashboard/DetailRental";
import RecentTransaction from "@/components/templates/Dashboard/RecentTransaction";
import Sidebar from "@/components/templates/Dashboard/Sidebar";
import TopRentedCar from "@/components/templates/Dashboard/TopRentedCar";

// context
import { useUser } from "@/context/UserContextProvider";

// utils
import { verifyToken } from "@/utils/auth";
import connectToDB from "@/utils/db";

const Dashboard = () => {
  // ** context
  const { user } = useUser();

  // ** var
  let lastCar = user?.rentedCars ? user?.rentedCars?.length - 1 : 0;

  return (
    <div className="px-6 py-8 relative lg:static lg:flex lg:flex-row-reverse lg:justify-between lg:p-0 lg:gap-4">
      <div className="lg:flex lg:justify-start lg:gap-x-8 lg:p-8 lg:w-full">
        <DetailRental />

        <div
          className={`${user?.rentedCars[lastCar] ? "lg:w-1/2" : "lg:w-full"}`}
        >
          <TopRentedCar />
          <RecentTransaction />
        </div>
      </div>

      <Sidebar />
    </div>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    connectToDB();

    const { token } = req.cookies;

    if (!token) {
      return {
        props: {},
        redirect: {
          destination: "/",
        },
      };
    }

    const tokenPayload = verifyToken(token!);

    if (!tokenPayload) {
      return {
        props: {},
        redirect: {
          destination: "/",
        },
      };
    }

    return {
      props: {},
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
