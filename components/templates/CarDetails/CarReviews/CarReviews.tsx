import React, { useState } from "react";
import Image from "next/image";

// types
import { ReviewInterface } from "@/types";

// svg
import ArrowIcon from "@/public/svg/arrow-down.svg";
import AddReview from "@/public/svg/add.svg";

// component
import Review from "./Review";

// interface
interface Props {
  reviews: ReviewInterface[] | [];
}

const CarReviews = ({ reviews }: Props) => {
  // ** state
  const [isShow, setIsShow] = useState<boolean>(false);

  // ** variable
  const reviewsToDisplay = isShow ? reviews : reviews.slice(0, 2);

  return (
    <div className="bg-white py-5 px-4 mt-8 rounded-lg shadow-sm duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h1 className="text-xl text-secondinary-500 font-semibold mr-5">
            Reviews
          </h1>
          <h2 className="bg-primary-500 px-5 w-11 h-7 flex items-center justify-center text-white font-bold rounded-md text-sm">
            {reviews?.length}
          </h2>
        </div>

        <button className="flex items-center gap-x-2 text-secondinary-500 font-semibold p-2 pr-0 rounded-lg opacity-50 hover:opacity-80 duration-200">
          Add review
          <Image width={24} height={24} src={AddReview} alt="add" />
        </button>
      </div>

      <div>
        {reviews.length ? (
          reviewsToDisplay.map((r) => (
            <div key={r._id}>
              <Review review={r} />
            </div>
          ))
        ) : (
          <div className="text-center p-4 font-medium tracking-wide sm:text-xl">
            <h1>Be the first to review this car!</h1>
          </div>
        )}

        {reviews.length > 2 ? (
          <button
            onClick={() => setIsShow((prevState) => !prevState)}
            className="cursor-pointer mt-9 text-secondinary-700 font-medium w-full text-sm flex items-center justify-center"
          >
            Show All{" "}
            <Image
              width={12}
              height={12}
              src={ArrowIcon}
              alt="arrow"
              className={`ml-4 ${isShow && "rotate-180"} duration-300`}
            />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CarReviews;
