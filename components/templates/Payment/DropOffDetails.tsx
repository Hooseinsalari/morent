import React from "react";

// types
import { MinTimeType, PickUpDropOffInterface } from "@/types";

// compoents
import LocationData from "./RentalInfoItemsSection/LocationData";
import DateData from "./RentalInfoItemsSection/DateData";
import TimeData from "./RentalInfoItemsSection/TimeData";

interface Props {
  dropOffDetails: PickUpDropOffInterface;
  setDropOffDetails: React.Dispatch<
    React.SetStateAction<PickUpDropOffInterface>
  >;
  minTime: MinTimeType;
}

const DropOffDetails = ({
  dropOffDetails,
  setDropOffDetails,
  minTime,
}: Props) => {
  const setLocationHandler = (selected: string) => {
    setDropOffDetails({ ...dropOffDetails, location: selected });
  };

  return (
    <>
      <h1 className="text-secondinary-500 font-semibold mt-6 mb-4">Drop-Off</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
        <LocationData
          selectedLocation={dropOffDetails.location}
          setLocationHandler={setLocationHandler}
        />

        <DateData
          pickUpDropOffDetails={dropOffDetails}
          setPickUpDropOffDetails={setDropOffDetails}
          minTime={minTime}
        />

        <TimeData
          pickUpDropOffDetails={dropOffDetails}
          setPickUpDropOffDetails={setDropOffDetails}
        />
      </div>
    </>
  );
};

export default DropOffDetails;
