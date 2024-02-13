import Image from "next/image";
import { useState } from "react";

// svg
import Swap from "@/public/svg/swap.svg";

// types
import { PickUpDropOffInterface } from "@/types";

// components
import PickupComponent from "./PickupComponent";
import DropoffComponent from "./DropoffComponent";

const PickupDropoffDetails = () => {
  // ** States
  const [pickUp, setPickUp] = useState<PickUpDropOffInterface>({
    location: "",
    date: "",
    time: "",
  });
  const [dropOff, setDropOff] = useState<PickUpDropOffInterface>({
    location: "",
    date: "",
    time: "",
  });

  // ** Handler
  const swapHandler = () => {
    setPickUp(dropOff);
    setDropOff(pickUp);
  };

  return (
    <div className="mt-6 flex flex-col lg:flex-row lg:justify-between">
      <PickupComponent pickUp={pickUp} setPickUp={setPickUp} />
      <div
        onClick={swapHandler}
        className="cursor-pointer w-14 h-14 my-4 lg:my-auto mx-auto lg:mx-4 rounded-lg bg-primary-500 flex items-center justify-center hover:shadow-md duration-200"
      >
        <Image src={Swap} alt="swap" />
      </div>
      <DropoffComponent dropOff={dropOff} setDropOff={setDropOff} />
    </div>
  );
};

export default PickupDropoffDetails;
