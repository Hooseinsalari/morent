import React from "react";
import Skeleton from "react-loading-skeleton";

const DetailRentalCarSkeleton = () => {
  return (
    <div className="bg-white rounded-lg p-4 lg:w-1/2">
      <h1>
        <Skeleton width={200} />
      </h1>
      <div className="flex items-center my-12">
        <div className="rounded-lg lg:w-[40%] sm:w-[30%]">
          <Skeleton height={400} />
        </div>
        <div className="ml-2">
          <h1>
            <Skeleton width={200} />
          </h1>
          <h1>
            <Skeleton width={150} />
          </h1>
        </div>
      </div>
      <div className="mt-5">
        <h1>
          <Skeleton width={150} />
        </h1>
        <div className="rounded-lg p-2 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1>
              <Skeleton width={100} />
            </h1>
            <h1>
              <Skeleton width={150} />
            </h1>
          </div>
          <div className="flex items-center justify-between mb-4">
            <h1>
              <Skeleton width={100} />
            </h1>
            <h1>
              <Skeleton width={150} />
            </h1>
          </div>
          <div className="flex items-center justify-between mb-4">
            <h1>
              <Skeleton width={100} />
            </h1>
            <h1>
              <Skeleton width={150} />
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1>
          <Skeleton width={150} />
        </h1>
        <div className="rounded-lg p-2 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1>
              <Skeleton width={100} />
            </h1>
            <h1>
              <Skeleton width={150} />
            </h1>
          </div>
          <div className="flex items-center justify-between mb-4">
            <h1>
              <Skeleton width={100} />
            </h1>
            <h1>
              <Skeleton width={150} />
            </h1>
          </div>
          <div className="flex items-center justify-between mb-4">
            <h1>
              <Skeleton width={100} />
            </h1>
            <h1>
              <Skeleton width={150} />
            </h1>
          </div>
        </div>
      </div>
      <div className="py-4 border-t mt-8 flex items-center justify-between">
        <div>
          <h1>
            <Skeleton width={200} />
          </h1>
          <h2>
            <Skeleton width={150} />
          </h2>
        </div>
        <h2>
          <Skeleton width={100} />
        </h2>
      </div>
    </div>
  );
};

export default DetailRentalCarSkeleton;
