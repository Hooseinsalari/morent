import BillingInfo from "@/components/templates/Payment/BillingInfo";
import Confirmation from "@/components/templates/Payment/Confirmation";
import PaymentMethod from "@/components/templates/Payment/PaymentMethod";
import RentSummary from "@/components/templates/Payment/RentSummary";
import RentalInfo from "@/components/templates/Payment/RentalInfo";
import { InputsValueInterface, PickUpDropOffInterface } from "@/types";
import { useState } from "react";

const index = () => {
  // ** state
  const [pickUpDetails, setPickUpDetails] = useState<PickUpDropOffInterface>({
    location: "",
    date: {
      day: null,
      month: null,
      year: null,
    },
    time: "",
  });

  const [dropOffDetails, setDropOffDetails] = useState<PickUpDropOffInterface>({
    location: "",
    date: {
      day: null,
      month: null,
      year: null,
    },
    time: "",
  });

  const [inputsValue, setInputsValue] = useState<InputsValueInterface>({
    name: "",
    address: "",
    phone: "",
    town: "",
    card: "",
    holder: "",
    date: "",
    cvc: "",
    pay: "",
    check1: false,
  });

  // ** handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setInputsValue((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const rentHandler = () => {}

  return (
    <div className="px-6 md:px-10 flex flex-col lg:flex-row-reverse lg:gap-x-2">
      <div className="flex-shrink lg:w-2/5 lg:px-6">
        <RentSummary
          startDate={pickUpDetails.date.day!}
          endDate={dropOffDetails.date.day!}
        />
      </div>
      <div className="flex-shrink-0 lg:w-3/5 lg:px-6">
        <BillingInfo
          inputsValue={inputsValue}
          handleInputChange={handleInputChange}
        />
        <RentalInfo
          pickUpDetails={pickUpDetails}
          setPickUpDetails={setPickUpDetails}
          dropOffDetails={dropOffDetails}
          setDropOffDetails={setDropOffDetails}
        />
        <PaymentMethod
          inputsValue={inputsValue}
          handleInputChange={handleInputChange}
        />
        <Confirmation
          inputsValue={inputsValue}
          handleInputChange={handleInputChange}
          rentHandler={rentHandler}
        />
      </div>
    </div>
  );
};

export default index;
