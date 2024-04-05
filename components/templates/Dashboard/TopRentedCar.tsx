import React from "react";
import Chart from "./Chart";

const TopRentedCar = () => {
  return (
    <div className="bg-white rounded-lg p-4 pb-0 mt-8 lg:m-0">
      <h1 className="text-secondinary-500 font-bold mb-5">Top 5 Car Rental</h1>
      <div className="w-full overflow-hidden">
        <Chart />
      </div>
    </div>
  );
};

export default TopRentedCar;
