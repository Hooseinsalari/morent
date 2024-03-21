import React from "react";
import Image from "next/image";

// images
import MC from "@/public/images/mc.png";
import Visa from "@/public/images/visa.png";
import Bitcoin from "@/public/images/Bitcoin.png";
import Paypal from "@/public/images/PayPal.png";

// types
import { PaymentComponentsProps } from "@/types";

const PaymentMethod = ({
  inputsValue,
  handleInputChange,
}: PaymentComponentsProps) => {
  return (
    <div className="my-8 rounded-md bg-white p-4">
      <div className="flex items-start justify-between mb-6 sm:mb-8">
        <div>
          <h1 className="text-secondinary-500 font-bold mb-1 sm:text-xl">
            Payment Method
          </h1>
          <p className="text-xs text-secondinary-300 font-medium sm:text-sm">
            Please enter your payment method
          </p>
        </div>
        <h2 className="text-secondinary-300 text-xs font-medium sm:text-sm">
          Step 3 of 4
        </h2>
      </div>

      <CardInformation
        inputsValue={inputsValue}
        handleInputChange={handleInputChange}
      />

      <PayMethod
        inputsValue={inputsValue}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default PaymentMethod;

const CardInformation = ({
  inputsValue,
  handleInputChange,
}: PaymentComponentsProps) => {
  return (
    <div className="bg-[#F6F7F9] rounded-lg p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-secondinary-500 font-semibold">Credit Card</h1>
        <div className="flex items-center gap-x-2">
          <Image src={MC} alt="mc" />
          <Image src={Visa} alt="visa" />
        </div>
      </div>

      <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 mt-5">
        <div className="flex flex-col">
          <label
            htmlFor="card"
            className="text-secondinary-500 mb-1 text-sm font-semibold sm:text-base"
          >
            Card Nubmber
          </label>
          <input
            onChange={handleInputChange}
            value={inputsValue.card}
            name="card"
            required={true}
            type="text"
            id="card"
            placeholder="Card number"
            className="focus:ring-0 border-none bg-white rounded-lg px-6 py-3 text-sm font-medium"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-secondinary-500 mb-1 text-sm font-semibold sm:text-base"
            htmlFor="holder"
          >
            Card Holder
          </label>
          <input
            onChange={handleInputChange}
            value={inputsValue.holder}
            name="holder"
            required={true}
            className="focus:ring-0 border-none bg-white rounded-lg px-6 py-3 text-sm font-medium"
            type="text"
            id="holder"
            placeholder="Card holder"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-secondinary-500 mb-1 text-sm font-semibold sm:text-base"
            htmlFor="date"
          >
            Expration Date
          </label>
          <input
            onChange={handleInputChange}
            value={inputsValue.date}
            name="date"
            required={true}
            className="focus:ring-0 border-none bg-white rounded-lg px-6 py-3 text-sm font-medium"
            type="text"
            id="date"
            placeholder="Expration date"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-secondinary-500 mb-1 text-sm font-semibold sm:text-base"
            htmlFor="CVC"
          >
            CVC
          </label>
          <input
            onChange={handleInputChange}
            value={inputsValue.cvc}
            name="cvc"
            required={true}
            className="focus:ring-0 border-none bg-white rounded-lg px-6 py-3 text-sm font-medium"
            type="text"
            id="CVC"
            placeholder="CVC"
          />
        </div>
      </form>
    </div>
  );
};

const PayMethod = ({
  inputsValue,
  handleInputChange,
}: PaymentComponentsProps) => {
  return (
    <>
      <div className="bg-[#F6F7F9] p-4 rounded-lg flex items-center justify-between mt-5">
        <div className="flex flex-row items-center gap-x-4">
          <input
            onChange={handleInputChange}
            value="paypal"
            name="pay"
            required={true}
            id="paypal"
            type="radio"
            checked={inputsValue.pay === "paypal"}
          />

          <label
            className="text-secondinary-500 text-sm font-semibold"
            htmlFor="paypal"
          >
            Paypal
          </label>
        </div>
        <Image src={Paypal} alt="paypal" />
      </div>

      <div className="bg-[#F6F7F9] p-4 rounded-lg flex items-center justify-between mt-5">
        <div className="flex flex-row items-center gap-x-4">
          <input
            onChange={handleInputChange}
            value="bitcoin"
            name="pay"
            required={true}
            id="bit"
            type="radio"
            checked={inputsValue.pay === "bitcoin"}
          />

          <label
            className="text-secondinary-500 text-sm font-semibold"
            htmlFor="bit"
          >
            Bitcoin
          </label>
        </div>
        <Image src={Bitcoin} alt="bitcoin" />
      </div>
    </>
  );
};
