import React from "react";

// react aria
import {
  Label,
  DateInput,
  DateSegment,
  TimeField,
} from "react-aria-components";

// types
import { PickUpDropOffInterface } from "@/types";

interface Props {
  pickUpDetails: PickUpDropOffInterface;
  setPickUpDetails: React.Dispatch<
    React.SetStateAction<PickUpDropOffInterface>
  >;
}

const TimeData = ({ pickUpDetails, setPickUpDetails }: Props) => {
  return (
    <TimeField
      onChange={(e) =>
        setPickUpDetails({
          ...pickUpDetails,
          time: `${e.hour}:${e.minute}`,
        })
      }
      hourCycle={24}
    >
      <Label className="text-secondinary-500 text-sm font-semibold mb-2 inline-block">
        Time
      </Label>
      <DateInput className="focus-visible:outline-none outline-blue-600 w-full flex text-sm mr-2 bg-[#F6F7F9] gap-2 border-none py-3 px-4 focus:ring-0 font-medium">
        {(segment) => (
          <DateSegment
            className="focus-visible:outline-none"
            segment={segment}
          />
        )}
      </DateInput>
    </TimeField>
  );
};

export default TimeData;
