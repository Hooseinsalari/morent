import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import DetailRental from "@/components/templates/Dashboard/DetailRental";
import RecentTransaction from "@/components/templates/Dashboard/RecentTransaction";
import Sidebar from "@/components/templates/Dashboard/Sidebar";
import TopRentedCar from "@/components/templates/Dashboard/TopRentedCar";

// utils
import { verifyToken } from "@/utils/auth";
import connectToDB from "@/utils/db";

// type
import { UserData } from "@/types";

// constant
import { BASE_API_URL } from "@/constant";

const Dashboard = () => {
  // ** context
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${BASE_API_URL}/api/auth/me`);
      if (res.status === 200) {
        setUser(res.data.data);
      }
    };

    fetchData();
  }, []);

  // ** var
  let lastCar = user?.rentedCars ? user?.rentedCars?.length - 1 : 0;

  return (
    <div className="px-6 py-8 relative lg:static lg:flex lg:flex-row-reverse lg:justify-between lg:p-0 lg:gap-4">
      <div className="lg:flex lg:justify-start lg:gap-x-8 lg:p-8 lg:w-full items-start">
        <DetailRental user={user} />

        <div
          className={`${user?.rentedCars[lastCar] ? "lg:w-1/2" : "lg:w-full"}`}
        >
          <TopRentedCar />
          <RecentTransaction user={user} />
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
