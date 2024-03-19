import React from "react";

// components
import LocationData from "./LocationData";
import DateData from "./DateData";
import TimeData from "./TimeData";

// types
import { PickUpDropOffInterface } from "@/types";

interface Props {
  pickUpDetails: PickUpDropOffInterface;
  setPickUpDetails: React.Dispatch<
    React.SetStateAction<PickUpDropOffInterface>
  >;
}

const PickUpDetails = ({ pickUpDetails, setPickUpDetails }: Props) => {
  return (
    <>
      <h1 className="text-secondinary-500 font-semibold mt-6 mb-4">Pick-Up</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
        <LocationData
          pickUpDetails={pickUpDetails}
          setPickUpDetails={setPickUpDetails}
        />

        <DateData
          pickUpDetails={pickUpDetails}
          setPickUpDetails={setPickUpDetails}
        />

        <TimeData
          pickUpDetails={pickUpDetails}
          setPickUpDetails={setPickUpDetails}
        />
      </div>
    </>
  );
};

export default PickUpDetails;
