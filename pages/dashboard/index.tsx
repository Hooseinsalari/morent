import DetailRental from "@/components/templates/Dashboard/DetailRental";
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

  return (
    <div className="lg:flex lg:justify-start lg:gap-x-8 lg:p-8 lg:w-full">
      <DetailRental />
    </div>
  );
};

export default Dashboard;
