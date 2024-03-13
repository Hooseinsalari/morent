import React from "react";

interface Props {
  title: string;
  value: string | number;
}

const DetailItems = ({ title, value }: Props) => {
  return (
    <div className="flex items-center">
      <h1 className="text-secondinary-300 flex-1 font-medium text-sm lg:text-lg">
        {title}
      </h1>
      <h1 className="text-secondinary-500 text-sm font-semibold lg:text-lg">
        {value}
      </h1>
    </div>
  );
};

export default DetailItems;
