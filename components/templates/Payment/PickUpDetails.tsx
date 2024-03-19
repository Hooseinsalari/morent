import React from "react";

// components
import LocationData from "./RentalInfoItemsSection/LocationData";
import DateData from "./RentalInfoItemsSection/DateData";
import TimeData from "./RentalInfoItemsSection/TimeData";

// types
import { PickUpDropOffInterface } from "@/types";

interface Props {
  pickUpDetails: PickUpDropOffInterface;
  setPickUpDetails: React.Dispatch<
    React.SetStateAction<PickUpDropOffInterface>
  >;
}

const PickUpDetails = ({ pickUpDetails, setPickUpDetails }: Props) => {
  // ** handler
  const setLocationHandler = (selected: string) => {
    setPickUpDetails({ ...pickUpDetails, location: selected });
  };

  return (
    <>
      <h1 className="text-secondinary-500 font-semibold mt-6 mb-4">Pick-Up</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
        <LocationData
          selectedLocation={pickUpDetails.location}
          setLocationHandler={setLocationHandler}
        />

        <DateData
          pickUpDropOffDetails={pickUpDetails}
          setPickUpDropOffDetails={setPickUpDetails}
        />

        <TimeData
          pickUpDropOffDetails={pickUpDetails}
          setPickUpDropOffDetails={setPickUpDetails}
        />
      </div>
    </>
  );
};

export default PickUpDetails;
