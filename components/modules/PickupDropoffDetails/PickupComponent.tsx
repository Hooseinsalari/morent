import Image from "next/image";
import { useRef, useState } from "react";

// components
import Mark from "./Mark";

// svg
import Arrow from "@/public/svg/arrow-down.svg";

// types
import { MinTimeType, PickUpComponentProps } from "@/types";

// hooks
import useOutsideClick from "@/hooks/useOutsideClick";

// constant
import { citiesInIran } from "@/constant";

// helper
import { formatTime, getMonthName } from "@/helper/functions";

// react aria
import {
  Button,
  ButtonProps,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  DateInput,
  DateSegment,
  Heading,
  ListBox,
  ListBoxItem,
  TimeField,
} from "react-aria-components";

const PickupComponent = ({ pickUp, setPickUp }: PickUpComponentProps) => {
  // ** states
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [showTime, setShowTime] = useState<boolean>(false);
  const [showLocation, setShowLocation] = useState<boolean>(false);
  const [minTime, setMinTime] = useState<MinTimeType>({
    day: null,
    month: null,
    year: null,
  });

  // ** refs
  const calendarRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  // ** hooks
  useOutsideClick(calendarRef, "calendar", () => setShowCalendar(false));
  useOutsideClick(timeRef, "time", () => setShowTime(false));
  useOutsideClick(locationRef, "location", () => setShowLocation(false));

  // ** handler
  const listBoxHandler = (e: any) => {
    const selectedNumber = e.split("-")[2];

    const cityData = citiesInIran.find((item) => item.id === +selectedNumber);

    setPickUp({ ...pickUp, location: cityData?.name! });
    setShowLocation(false);
  };

  const calendarHandler = (e: any) => {
    setPickUp({
      ...pickUp,
      date: { day: e.day, month: e.month, year: e.year },
    });
  };

  return (
    <div className="bg-white p-4 w-full lg:w-1/2 rounded-lg lg:flex-grow">
      <div className="flex items-center">
        <Mark isPickUp={true} />
        <h2 className="text-secondinary-500 font-semibold ml-2 lg:text-lg">
          Pick-Up
        </h2>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="cursor-pointer relative">
          <h3 className="font-bold text-secondinary-500 lg:text-base">
            Location
          </h3>
          <h4
            id="location"
            role="button"
            tabIndex={0}
            onClick={() => setShowLocation((prevState) => !prevState)}
            className="text-secondinary-300 text-xs font-normal flex items-center lg:text-sm"
          >
            {pickUp.location || "select..."}
            <Image
              src={Arrow}
              alt="arrow"
              className={`ml-2 lg:w-4 duration-300 ${
                showLocation ? "rotate-180" : "rotate-0"
              }`}
            />
          </h4>
          {showLocation && (
            <ListBox
              aria-label="City"
              ref={locationRef}
              className={`duration-200 shadow-lg rounded-md border h-[18rem] overflow-auto z-50 absolute top-12 md:-left-4 -left-7 xs:-left-5 mx-auto w-[290px] bg-white`}
              selectionMode="single"
              onAction={listBoxHandler}
              items={citiesInIran}
            >
              {citiesInIran.map((c) => (
                <ListBoxItem
                  key={c.id}
                  className={`my-4 p-2 hover:bg-[#e5e7eb] cursor-pointer ${
                    c.name === pickUp.location ? "bg-[#e5e7eb]" : ""
                  }`}
                >
                  {c.name}
                </ListBoxItem>
              ))}
            </ListBox>
          )}
        </div>
        <div className="md:ml-5 cursor-pointer relative z-40">
          <h3 className="font-bold text-secondinary-500 lg:text-base">Date</h3>
          <h4
            id="calendar"
            onClick={() => setShowCalendar((prevState) => !prevState)}
            className="text-secondinary-300 text-xs font-normal flex items-center lg:text-sm"
          >
            <span>
              {pickUp.date.day && pickUp.date.month
                ? `${pickUp.date.day} ${getMonthName(pickUp.date.month)}`
                : "select..."}
            </span>
            <Image
              src={Arrow}
              alt="arrow"
              className={`ml-2 lg:w-4 duration-300 ${
                showCalendar ? "rotate-180" : "rotate-0"
              }`}
            />
          </h4>
          {showCalendar && (
            <Calendar
              onChange={calendarHandler}
              ref={calendarRef}
              className={`duration-200 absolute top-12 -left-28 mx-auto w-[300px] bg-white`}
              aria-label="Date"
            >
              <header className="flex items-center gap-1 pb-4 px-1 font-serif w-full">
                <Heading className="flex-1 font-semibold text-sm md:text-xl ml-2" />
                <RoundButton className="cursor-pointer" slot="previous">
                  <Image
                    className="rotate-90"
                    src={Arrow}
                    width={16}
                    height={16}
                    alt="arrow"
                  />
                </RoundButton>
                <RoundButton className="cursor-pointer" slot="next">
                  <Image
                    className="-rotate-90"
                    src={Arrow}
                    width={16}
                    height={16}
                    alt="arrow"
                  />
                </RoundButton>
              </header>
              <CalendarGrid className="border-spacing-0 md:border-spacing-1 border-separate">
                <CalendarGridHeader>
                  {(day) => (
                    <CalendarHeaderCell className="text-xs text-gray-500 font-semibold">
                      {day}
                    </CalendarHeaderCell>
                  )}
                </CalendarGridHeader>
                <CalendarGridBody>
                  {(date) => {
                    // Disable past days
                    const isPast = minTime?.day
                      ? new Date(date.year, date.month - 1, date.day) <
                        new Date(
                          minTime.year!,
                          minTime.month! - 1,
                          minTime.day!
                        )
                      : new Date(date.year, date.month - 1, date.day) <
                        new Date();

                    const cellClassName = `w-9 h-9 outline-none cursor-default rounded-full flex items-center justify-center outside-month:text-gray-300 hover:bg-gray-100 pressed:bg-gray-200 selected:bg-violet-700 selected:text-white focus-visible:ring ring-violet-600/70 ring-offset-2 ${
                      pickUp.date.day
                    } ${isPast ? "text-gray-300 hover:bg-white" : ""}`;
                    return (
                      <CalendarCell date={date} className={cellClassName} />
                    );
                  }}
                </CalendarGridBody>
              </CalendarGrid>
            </Calendar>
          )}
        </div>
        <div className="md:ml-5 cursor-pointer relative">
          <h3 className="font-bold text-secondinary-500 lg:text-base">Time</h3>
          <h4
            id="time"
            onClick={() => setShowTime((prevState) => !prevState)}
            className="text-secondinary-300 text-xs font-normal flex items-center lg:text-sm"
          >
            {pickUp.time || "select..."}
            <Image
              src={Arrow}
              alt="arrow"
              className={`ml-2 lg:w-4 duration-300 ${
                showTime ? "rotate-180" : "rotate-0"
              }`}
            />
          </h4>
          {showTime && (
            <TimeField
              aria-label="Time"
              ref={timeRef}
              className={`duration-200 absolute top-12 -left-14 mx-auto w-[120px] bg-white shadow-lg`}
              onChange={(e) =>
                setPickUp({
                  ...pickUp,
                  time: formatTime(e.hour, e.minute),
                })
              }
              hourCycle={24}
            >
              <DateInput className="focus-visible:outline-none outline-blue-600 w-full flex text-sm mr-2 gap-2 border-none py-3 px-4 focus:ring-0 font-medium">
                {(segment) => (
                  <DateSegment
                    className="focus-visible:outline-none"
                    segment={segment}
                  />
                )}
              </DateInput>
            </TimeField>
          )}
        </div>
      </div>
    </div>
  );
};

export default PickupComponent;

function RoundButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className="w-9 h-9 outline-none cursor-default bg-transparent text-gray-600 border-0 rounded-full flex items-center justify-center hover:bg-gray-100 pressed:bg-gray-200 focus-visible:ring ring-violet-600/70 ring-offset-2"
    />
  );
}
