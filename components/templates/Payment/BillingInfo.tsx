import { PaymentComponentsProps } from "@/types";
import React from "react";

const BillingInfo = ({
  inputsValue,
  handleInputChange,
}: PaymentComponentsProps) => {
  return (
    <div className="my-8 rounded-md bg-white p-4">
      <div className="flex items-start justify-between mb-6 sm:mb-8">
        <div>
          <h1 className="text-secondinary-500 font-bold mb-1 sm:text-xl">
            Billing Info
          </h1>
          <p className="text-xs text-secondinary-300 font-medium sm:text-sm">
            Please enter your billing info
          </p>
        </div>
        <h2 className="text-secondinary-300 text-xs font-medium sm:text-sm">
          Step 1 of 4
        </h2>
      </div>

      <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-secondinary-500 mb-1 text-sm font-semibold sm:text-base"
          >
            Name
          </label>
          <input
            onChange={handleInputChange}
            value={inputsValue.name}
            name="name"
            required={true}
            type="text"
            id="name"
            placeholder="Your name"
            className="focus:ring-0 border-none bg-[#F6F7F9] rounded-lg px-6 py-3 text-sm font-medium"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-secondinary-500 mb-1 text-sm font-semibold sm:text-base"
            htmlFor="address"
          >
            Address
          </label>
          <input
            onChange={handleInputChange}
            value={inputsValue.address}
            name="address"
            required={true}
            className="focus:ring-0 border-none bg-[#F6F7F9] rounded-lg px-6 py-3 text-sm font-medium"
            type="text"
            id="address"
            placeholder="Your address"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-secondinary-500 mb-1 text-sm font-semibold sm:text-base"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            onChange={handleInputChange}
            value={inputsValue.phone}
            name="phone"
            required={true}
            className="focus:ring-0 border-none bg-[#F6F7F9] rounded-lg px-6 py-3 text-sm font-medium"
            type="text"
            id="phone"
            placeholder="Your phone"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-secondinary-500 mb-1 text-sm font-semibold sm:text-base"
            htmlFor="town"
          >
            Town/City
          </label>
          <input
            onChange={handleInputChange}
            value={inputsValue.town}
            name="town"
            required={true}
            className="focus:ring-0 border-none bg-[#F6F7F9] rounded-lg px-6 py-3 text-sm font-medium"
            type="text"
            id="town"
            placeholder="Town or city"
          />
        </div>
      </form>
    </div>
  );
};

export default BillingInfo;
