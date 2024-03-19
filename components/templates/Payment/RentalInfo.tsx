// types
import { RentalInfoProps } from "@/types";

// react widgets
// import Combobox from "react-widgets/Combobox";
// import DatePicker from "react-widgets/DatePicker";
// import TimeInput from "react-widgets/TimeInput";
// import Localization from "react-widgets/esm/Localization";
// import { DateLocalizer } from "react-widgets/IntlLocalizer";

// svg
import Arrow from "@/public/svg/arrow-down.svg";

// constant
import { citiesInIran } from "@/constant";

// helper
import { formatDate, formatTime } from "@/helper/functions";
import {
  Button,
  ComboBox,
  Group,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  DatePicker,
  DateInput,
  DateSegment,
  Dialog,
  Calendar,
  Heading,
  CalendarGrid,
  CalendarCell,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarGridBody,
} from "react-aria-components";
import type {
  ButtonProps,
  ListBoxItemProps,
  PopoverProps,
} from "react-aria-components";
import Image from "next/image";
import { today } from "@internationalized/date";
import { getLocalTimeZone } from "@internationalized/date";
import { useState } from "react";
import PickUpDetails from "./PickUpSection/PickUpDetails";

const RentalInfo = ({
  pickUpDetails,
  setPickUpDetails,
  dropOffDetails,
  setDropOffDetails,
}: RentalInfoProps) => {
  return (
    <div id="salam" className="my-8 rounded-md bg-white p-4">
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

      {/* <div>
          <h1 className="text-secondinary-500 font-semibold mt-6 mb-4">
            Drop-Off
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
            <div>
              <label className="text-secondinary-500 text-sm font-semibold mb-2 inline-block">
                Locations
              </label>
              <div className="bg-[#F6F7F9] rounded-lg">
                <Combobox
                  onChange={(value) =>
                    setDropOffDetails({ ...dropOffDetails, location: value })
                  }
                  data={citiesInIran}
                  placeholder="Select your city"
                />
              </div>
            </div>
            <div>
              <label className="text-secondinary-500 text-sm font-semibold mb-2 inline-block">
                Date
              </label>
              <div className="bg-[#F6F7F9] rounded-lg">
                <DatePicker
                  onChange={(value) =>
                    setDropOffDetails({
                      ...dropOffDetails,
                      date: formatDate(value),
                    })
                  }
                  min={new Date(pickUpDetails.date)}
                />
              </div>
            </div>
            <div>
              <label className="text-secondinary-500 text-sm font-semibold mb-2 inline-block">
                Time
              </label>
              <div className="bg-[#F6F7F9] rounded-lg">
                <TimeInput
                  onChange={(value) =>
                    setDropOffDetails({
                      ...dropOffDetails,
                      time: formatTime(value),
                    })
                  }
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default RentalInfo;
