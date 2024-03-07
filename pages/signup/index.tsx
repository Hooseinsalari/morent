import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

// loading
import LoadingSpinner from "@/components/modules/LoadingSpinner/LoadingSpinner";

// types
import { SignUpFormData } from "@/types";

// form
import { useForm } from "react-hook-form";

// toast
import toast from "react-hot-toast";

// context
import { useUser } from "@/context/UserContextProvider";

const SignUp = () => {
  // ** states
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // ** context
  const { setUser } = useUser();

  // ** router
  const router = useRouter();

  // ** useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormData>();

  const password = watch("password");

  const registerOptions = {
    name: {
      required: "Name is required",
      pattern: {
        value: /^(?=.*[A-Za-z])[A-Za-z0-9]+$/,
        message: "Please enter a valid name that includes at least one letter.",
      },
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        message: "Invalid input. Please enter a valid value.",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
    confirmPassword: {
      required: "Confirm password is required",
      validate: (value: string) =>
        value === password || "Passwords do not match",
    },
  };

  // ** submit
  const handleRegistration = async (data: SignUpFormData) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/auth/signUp",
        data
      );

      if (response.status === 201) {
        toast.success(response.data.message);

        router.replace("/");

        const { username, email, rentedCars } = response.data.data;

        setUser({
          username,
          email,
          rentedCars,
        });
      }
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex my-32 justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(handleRegistration)}
        className="bg-white rounded-md h-fit p-4 w-4/5 mx-auto md:w-1/2 lg:w-2/5 md:py-6 md:px-8 shadow-md"
      >
        <h1 className="text-secondinary-500 text-3xl text-center font-semibold mb-12">
          Sign Up
        </h1>
        <div className="my-5 flex flex-col">
          <label
            htmlFor="username"
            className="font-semibold text-secondinary-500"
          >
            Name
          </label>
          <input
            {...register("username", registerOptions.name)}
            name="username"
            type="text"
            id="username"
            placeholder="Your name"
            className="rounded-lg border-none focus:ring-0 bg-[#F6F7F9] font-medium py-3"
          />
          <span className="text-red-500 text-sm font-bold w-fit px-1 py-[0.1rem] mt-1 rounded-lg">
            {errors?.username && errors.username?.message}
          </span>
        </div>
        <div className="my-5 flex flex-col">
          <label className="font-semibold text-secondinary-500" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", registerOptions.email)}
            name="email"
            className="rounded-lg border-none focus:ring-0 bg-[#F6F7F9] font-medium py-3"
            type="email"
            id="email"
            placeholder="Your email"
          />
          <span className="text-red-500 text-sm font-bold w-fit px-1 py-[0.1rem] mt-1 rounded-lg">
            {errors?.email && errors?.email?.message}
          </span>
        </div>
        <div className="my-5 flex flex-col">
          <label
            className="font-semibold text-secondinary-500"
            htmlFor="password"
          >
            Password
          </label>
          <input
            {...register("password", registerOptions.password)}
            name="password"
            className="rounded-lg border-none focus:ring-0 bg-[#F6F7F9] font-medium py-3"
            type="password"
            id="password"
            placeholder="Your password"
          />
          <span className="text-red-500 text-sm font-bold w-fit px-1 py-[0.1rem] mt-1 rounded-lg">
            {errors?.password && errors?.password?.message}
          </span>
        </div>
        <div className="my-5 flex flex-col">
          <label
            className="font-semibold text-secondinary-500"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", registerOptions.confirmPassword)}
            name="confirmPassword"
            className="rounded-lg border-none focus:ring-0 bg-[#F6F7F9] font-medium py-3"
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
          />
          <span className="text-red-500 text-sm font-bold w-fit px-1 py-[0.1rem] mt-1 rounded-lg">
            {errors?.confirmPassword && errors?.confirmPassword?.message}
          </span>
        </div>
        <div className="w-full mt-10 flex items-start justify-center flex-col">
          <button
            type="submit"
            className="bg-primary-500 text-base text-white px-4 py-3 rounded-[4px] w-full font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isLoading ? true : false}
          >
            {isLoading ? <LoadingSpinner /> : "Submit"}
          </button>
          <Link
            className="text-sm font-semibold text-secondinary-300 mt-3"
            href={`/login`}
          >
            already have account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
