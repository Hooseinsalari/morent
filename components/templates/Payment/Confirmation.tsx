import React from "react";

// image
import Walet from "@/public/images/walet.png";

// types
import { InputsValueInterface } from "@/types";
import Image from "next/image";

const Confirmation = ({
  inputsValue,
  handleInputChange,
  rentHandler,
}: {
  inputsValue: InputsValueInterface;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rentHandler: () => void;
}) => {
  return (
    <div className="my-8 rounded-md bg-white p-4">
      <div className="flex items-start justify-between mb-6 sm:mb-8">
        <div>
          <h1 className="text-secondinary-500 font-bold mb-1 sm:text-xl">
            Confirmation
          </h1>
          <p className="text-xs text-secondinary-300 font-medium sm:text-sm">
            Just few clicks and your rental is ready!{" "}
          </p>
        </div>
        <h2 className="text-secondinary-300 text-xs font-medium sm:text-sm">
          Step 4 of 4
        </h2>
      </div>

      <div className="bg-[#F6F7F9] p-4 rounded-lg flex items-center justify-between mt-5">
        <div className="flex flex-row items-center gap-x-4">
          <input
            name="check1"
            required={true}
            id="con1"
            type="checkbox"
            className="rounded-sm"
          />
          <label
            className="text-[#1F2544] text-sm font-semibold"
            htmlFor="con1"
          >
            I agree with sending an Marketing and newsletter emails. No spam,
            promissed!
          </label>
        </div>
      </div>

      <div className="bg-[#F6F7F9] p-4 rounded-lg flex items-center justify-between mt-5">
        <div className="flex flex-row items-center gap-x-4">
          <input
            required={true}
            name="check1"
            value="bitcoin"
            id="con2"
            type="checkbox"
            className="rounded-sm"
            checked={inputsValue.check1}
            onChange={handleInputChange}
          />
          <label
            className="text-[#1F2544] text-sm font-semibold"
            htmlFor="con2"
          >
            I agree with our terms and conditions and privacy policy!
          </label>
        </div>
      </div>

      <button
        onClick={rentHandler}
        className="bg-primary-500 text-white rounded py-2 px-4 my-8"
      >
        Rental Now
      </button>

      <Image src={Walet} alt="walet" />

      <div className="mt-4">
        <h1 className="text-secondinary-500 font-bold mb-1 sm:text-xl">
          All your data are safe
        </h1>
        <p className="text-xs text-secondinary-300 font-medium sm:text-sm">
          We are using the most advanced security to provide you the best
          experience ever.
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
