import React, { useState } from "react";
import Image from "next/image";

// types
import { ReviewInterface } from "@/types";

// svg
import ArrowIcon from "@/public/svg/arrow-down.svg";
import AddReview from "@/public/svg/add.svg";

// component
import Review from "./Review";
import AddNewReview from "./AddNewReview";

// context
import { useUser } from "@/context/UserContextProvider";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import axios from "axios";

// interface
interface Props {
  reviews: ReviewInterface[] | [];
}

const CarReviews = ({ reviews }: Props) => {
  // ** state
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // for modal
  const [reviewValues, setReviewValues] = useState({
    rating: 0,
    comment: "",
  });

  // ** context
  const { user } = useUser();

  // ** variable
  const reviewsToDisplay = isShow ? reviews : reviews.slice(0, 2);

  // ** router
  const { query } = useRouter();

  // ** handler
  // the modal for add new review
  const openModalHandler = () => {
    const isRented = user?.rentedCars.find((i) => i === query.id);

    if (!user) {
      toast.error("Please log in to continue.");
      return;
    } else if (!isRented) {
      toast.error("You need to rent the car before you can leave a review.");
      return;
    } else {
      setIsModalOpen(true);
    }
  };

  //! submit new review
  const submitNewReview = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (reviewValues.comment && reviewValues.rating !== 0) {
        const response = await axios.post(
          "http://localhost:3000/api/reviews/postReview",
          {
            comment: reviewValues.comment,
            rating: reviewValues.rating,
            user: user?._id,
            car: query.id,
          }
        );

        if (response.status === 201) {
          setIsModalOpen(false);
          setReviewValues({
            rating: 0,
            comment: "",
          });
          toast.success(
            "Thank you for your review! It has been successfully submitted."
          );
        }
      } else {
        toast.error(
          "Please make sure to add a comment and select a rating before submitting your review."
        );
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-white py-5 px-4 mt-8 rounded-lg shadow-sm duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h1 className="text-base sm:text-xl text-secondinary-500 font-semibold mr-3 sm:mr-5">
            Reviews
          </h1>
          <h2 className="bg-primary-500 px-5 w-11 h-7 flex items-center justify-center text-white font-bold rounded-md text-xs sm:text-sm">
            {reviews?.length}
          </h2>
        </div>

        <button
          onClick={openModalHandler}
          className="text-sm sm:text-base flex items-center gap-x-2 text-secondinary-500 font-semibold p-2 pr-0 rounded-lg opacity-50 hover:opacity-80 duration-200"
        >
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

      <AddNewReview
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        submitNewReview={submitNewReview}
        setReviewValues={setReviewValues}
        reviewValues={reviewValues}
      />
    </div>
  );
};

export default CarReviews;
