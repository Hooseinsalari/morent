import React from "react";
import Image from "next/image";

// svg
import Arrow from "@/public/svg/arrow-down.svg";

// react aria
import {
  Button,
  ComboBox,
  Group,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";

// constant
import { citiesInIran } from "@/constant";

// types
import { PickUpDropOffInterface } from "@/types";

interface Props {
  pickUpDetails: PickUpDropOffInterface;
  setPickUpDetails: React.Dispatch<
    React.SetStateAction<PickUpDropOffInterface>
  >;
}

const LocationData = ({ pickUpDetails, setPickUpDetails }: Props) => {
  return (
    <ComboBox
      defaultItems={citiesInIran}
      onInputChange={(selected) =>
        setPickUpDetails({ ...pickUpDetails, location: selected })
      }
      className="w-full"
    >
      <Label className="text-secondinary-500 text-sm font-semibold mb-2 inline-block">
        Location
      </Label>
      <Group className="flex justify-between rounded-lg bg-[#F6F7F9] overflow-hidden">
        <Input
          placeholder="Select yout city"
          className="w-full text-sm mr-2 border-none py-3 px-4 placeholder:text-secondinary-500 focus:ring-0 bg-transparent font-medium"
        />
        <Button className="hover:bg-[#e5e7eb] px-2">
          <Image src={Arrow} width={16} height={16} alt="arrow" />
        </Button>
      </Group>
      <Popover className="h-72 w-[--trigger-width] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5">
        <ListBox className="outline-none p-1">
          {citiesInIran.map((item) => (
            <ListBoxItem
              textValue={item.name}
              key={item.id}
              className={`my-4 p-2 hover:bg-[#e5e7eb] cursor-pointer ${
                item.name === pickUpDetails.location ? "bg-[#e5e7eb]" : ""
              }`}
            >
              <span>{item.name}</span>
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </ComboBox>
  );
};

export default LocationData;
