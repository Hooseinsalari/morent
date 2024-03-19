import React from "react";
import Image from "next/image";

// svg
import Arrow from "@/public/svg/arrow-down.svg";

// react aria
import {
  Button,
  Group,
  Label,
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
import { today } from "@internationalized/date";
import type {
  ButtonProps,
  ListBoxItemProps,
  PopoverProps,
} from "react-aria-components";
import { getLocalTimeZone } from "@internationalized/date";

// types
import { PickUpDropOffInterface } from "@/types";

interface Props {
  pickUpDetails: PickUpDropOffInterface;
  setPickUpDetails: React.Dispatch<
    React.SetStateAction<PickUpDropOffInterface>
  >;
}

const DateData = ({ pickUpDetails, setPickUpDetails }: Props) => {
  return (
    <DatePicker
      onChange={(e) =>
        setPickUpDetails({
          ...pickUpDetails,
          date: {
            day: e.day,
            month: e.month,
            year: e.year,
          },
        })
      }
      minValue={today(getLocalTimeZone())}
      className="w-full"
    >
      <Label className="text-secondinary-500 text-sm font-semibold mb-2 inline-block">
        Date
      </Label>
      <Group className="flex justify-between rounded-lg bg-[#F6F7F9] overflow-hidden">
        <DateInput className="w-full flex text-sm mr-2 border-none py-3 px-4 focus:ring-0 bg-transparent font-medium">
          {(segment) => (
            <DateSegment
              className="focus-visible:outline-none px-[0.05rem]"
              segment={segment}
            />
          )}
        </DateInput>
        <Button className="hover:bg-[#e5e7eb] px-2 border-none outline-none ring-0">
          <Image src={Arrow} width={16} height={16} alt="arrow" />
        </Button>
      </Group>
      <MyPopover>
        <Dialog className="p-2 md:p-4 text-gray-600">
          <Calendar>
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
                  const isPast =
                    new Date(date.year, date.month - 1, date.day + 1) <
                    new Date();
                  const cellClassName = `w-9 h-9 outline-none cursor-default rounded-full flex items-center justify-center outside-month:text-gray-300 hover:bg-gray-100 pressed:bg-gray-200 selected:bg-violet-700 selected:text-white focus-visible:ring ring-violet-600/70 ring-offset-2 ${
                    pickUpDetails.date.day
                  } ${isPast ? "text-gray-300 hover:bg-white" : ""}`;
                  return <CalendarCell date={date} className={cellClassName} />;
                }}
              </CalendarGridBody>
            </CalendarGrid>
          </Calendar>
        </Dialog>
      </MyPopover>
    </DatePicker>
  );
};

export default DateData;

function RoundButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className="w-9 h-9 outline-none cursor-default bg-transparent text-gray-600 border-0 rounded-full flex items-center justify-center hover:bg-gray-100 pressed:bg-gray-200 focus-visible:ring ring-violet-600/70 ring-offset-2"
    />
  );
}

function MyPopover(props: PopoverProps) {
  return (
    <Popover
      {...props}
      className="overflow-auto rounded-lg drop-shadow-lg ring-1 ring-black/10 bg-white"
    />
  );
}
