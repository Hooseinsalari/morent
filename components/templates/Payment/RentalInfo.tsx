import { useEffect, useState } from "react";

// types
import { MinTimeType, RentalInfoProps } from "@/types";

// components
import PickUpDetails from "./PickUpDetails";
import DropOffDetails from "./DropOffDetails";

const RentalInfo = ({
  pickUpDetails,
  setPickUpDetails,
  dropOffDetails,
  setDropOffDetails,
}: RentalInfoProps) => {
  // ** state
  const [minTime, setMinTime] = useState<MinTimeType>({
    day: null,
    month: null,
    year: null,
  });

  // ** useEffect
  useEffect(() => {
    setMinTime({ ...pickUpDetails.date });
  }, [pickUpDetails.date]);

  return (
    <div className="my-8 rounded-md bg-white p-4">
      <div className="flex items-start justify-between mb-6 sm:mb-8">
        <div>
          <h1 className="text-secondinary-500 font-bold mb-1 sm:text-xl">
            Rental Info
          </h1>
          <p className="text-xs text-secondinary-300 font-medium sm:text-sm">
            Please select your rental date
          </p>
        </div>
        <h2 className="text-secondinary-300 text-xs font-medium sm:text-sm">
          Step 2 of 4
        </h2>
      </div>

      <div className="mb-8">
        <PickUpDetails
          pickUpDetails={pickUpDetails}
          setPickUpDetails={setPickUpDetails}
        />
      </div>

      <div>
        <DropOffDetails
          dropOffDetails={dropOffDetails}
          setDropOffDetails={setDropOffDetails}
          minTime={minTime}
        />
      </div>
    </div>
  );
};

export default RentalInfo;
