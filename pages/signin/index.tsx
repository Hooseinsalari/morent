import { SignInFormData } from "@/types";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  // ** useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const registerOptions = {
    identifier: {
      required: "Name or Email is required",
      pattern: {
        value:
          /^(?!\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^[a-zA-Z0-9._%+-]+$/,
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
  };

  // ** submit
  const handleRegistration = (data: SignInFormData) => {
    console.log(data);
  };

  return (
    <div className="flex mt-32 justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(handleRegistration)}
        className="bg-white rounded-md h-fit p-4 w-4/5 mx-auto md:w-1/2 lg:w-2/5 md:py-6 md:px-8 shadow-md"
      >
        <h1 className="text-secondinary-500 text-xl font-bold mb-8">Login</h1>
        <div className="my-5 flex flex-col">
          <label className="font-semibold text-secondinary-500" htmlFor="email">
            Name or Email
          </label>
          <input
            {...register("identifier", registerOptions.identifier)}
            name="identifier"
            className="rounded-lg border-none focus:ring-0 bg-[#F6F7F9] font-medium py-3"
            id="identifier"
            placeholder="Your name or email"
          />
          <span className="text-red-500 text-sm font-bold w-fit px-1 py-[0.1rem] mt-1 rounded-lg">
            {errors?.identifier && errors?.identifier?.message}
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
        <div className="w-full mt-10 flex items-start justify-center flex-col">
          <button
            type="submit"
            className="bg-primary-500 text-base text-white px-4 py-3 rounded-[4px] w-full font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Submit
          </button>
          <Link
            className="text-sm font-medium text-secondinary-300 mt-2"
            href="/signup"
          >
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
