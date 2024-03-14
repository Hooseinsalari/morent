import React from "react";
import Image from "next/image";

// type
import { ReviewInterface } from "@/types";

// helper
import { extractDate } from "@/helper/functions";

// svg
import ProfileCircle from "@/public/svg/profile-circle.svg";

const Review = ({ review }: { review: ReviewInterface }) => {
  return (
    <div className="mb-8">
      <div className="flex items-start justify-between">
        <div className="flex items-start">
          <Image
            src={ProfileCircle}
            alt="avatar"
            width={44}
            height={44}
            className="mr-2"
          />
          <div>
            <h1 className="text-secondinary-500 font-semibold text-base mb-1">
              {review.user.username}
            </h1>
            <h3 className="text-secondinary-300 text-xs fotn">consumer</h3>
          </div>
        </div>
        <div>
          <h2 className="text-secondinary-300 text-sm font-medium">
            {extractDate(review.createdAt)}
          </h2>
        </div>
      </div>
      <p className="mt-4 pl-2 text-secondinary-300 text-sm leading-6">
        {review.comment}
      </p>
    </div>
  );
};

export default Review;
