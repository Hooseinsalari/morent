import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// components
import BillingInfo from "@/components/templates/Payment/BillingInfo";
import Confirmation from "@/components/templates/Payment/Confirmation";
import PaymentMethod from "@/components/templates/Payment/PaymentMethod";
import RentSummary from "@/components/templates/Payment/RentSummary";
import RentalInfo from "@/components/templates/Payment/RentalInfo";

// context
import { useRentalCart } from "@/context/RentalCartContextProvider";
import { useUser } from "@/context/UserContextProvider";

// helper
import { isFilled } from "@/helper/functions";

// types
import { InputsValueInterface, PickUpDropOffInterface } from "@/types";
import { GetServerSideProps } from "next";

// toast
import toast from "react-hot-toast";

// utils
import connectToDB from "@/utils/db";
import { verifyToken } from "@/utils/auth";

// constant
import { BASE_API_URL } from "@/constant";

const Payment = () => {
  // ** router
  const router = useRouter();

  // ** context
  const { state, dispatch } = useRentalCart();
  const { setUser } = useUser();

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

  // ** useEffect
  useEffect(() => {
    if (!state.selectedCar) {
      router.replace("/");
    }
  }, []);

  // ** handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setInputsValue((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const rentHandler = async () => {
    const inputsValueFilled = isFilled(inputsValue);
    const pickUpDetailsFilled = isFilled(pickUpDetails);
    const dropOffDetailsFilled = isFilled(dropOffDetails);

    if (!inputsValueFilled && !pickUpDetailsFilled && !dropOffDetailsFilled) {
      toast.error(
        "Oops! It looks like some information is missing. Please fill out all the required fields to proceed with your payment.",
        {
          duration: 6000,
        }
      );
      return;
    } else {
    try {
      const user = await axios.put(
        `${BASE_API_URL}/api/user/updateRentalCarList`,
        {
          carInfo: state.selectedCar,
          pickUpDetails,
          dropOffDetails,
        }
      );

      if (user.status === 200) {
        toast.success(user.data.message, { duration: 4000 });

        setUser(user.data.user)

        dispatch({ type: "CHECKOUT" });

        router.replace("/");
      }
    } catch (error: any) {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 404)
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
    }
  };

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

export default Payment;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    connectToDB();

    const { token } = req.cookies;

    if (!token) {
      return {
        props: {},
        redirect: {
          destination: "/",
        },
      };
    }

    const tokenPayload = verifyToken(token!);

    if (!tokenPayload) {
      return {
        props: {},
        redirect: {
          destination: "/",
        },
      };
    }

    return {
      props: {},
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
