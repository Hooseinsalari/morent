import DetailRental from "@/components/templates/Dashboard/DetailRental";
import RecentTransaction from "@/components/templates/Dashboard/RecentTransaction";
import Sidebar from "@/components/templates/Dashboard/Sidebar";
import TopRentedCar from "@/components/templates/Dashboard/TopRentedCar";
import { useUser } from "@/context/UserContextProvider";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Dashboard = () => {
  // ** router
  const router = useRouter();

  // ** context
  const { user } = useUser();

  // ** var
  const lastCar: number = user?.rentedCars ? user?.rentedCars?.length - 1 : 0;

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
