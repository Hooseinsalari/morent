import React, { FormEvent, useState } from "react";

// constant
import { carCapasity, carTypes } from "@/constant";

// types
import { FilterBarProps } from "@/types";

export default function DesktopFilterBar({
  queryParamsFilter,
  setQueryParamsFilter,
}: FilterBarProps) {
  // ** state
  const [rangeValue, setRangeValue] = useState<number>(50);

  // ** handlers
  const typeCheckBoxHandler = (e: FormEvent<HTMLInputElement>) => {
    const { checked, value } = e.currentTarget;

    if (checked) {
      setQueryParamsFilter({
        ...queryParamsFilter,
        type: [...queryParamsFilter.type, value],
      });
    } else {
      const unselectedTypes = queryParamsFilter.type.filter((t) => t !== value);
      setQueryParamsFilter({
        ...queryParamsFilter,
        type: unselectedTypes,
      });
    }
  };

  const capacityCheckBoxHandler = (e: FormEvent<HTMLInputElement>) => {
    const { checked, value } = e.currentTarget;

    if (checked) {
      setQueryParamsFilter({
        ...queryParamsFilter,
        capacity: [...queryParamsFilter.capacity, value],
      });
    } else {
      const unselectedCapacity = queryParamsFilter.capacity.filter(
        (t) => t !== value
      );
      setQueryParamsFilter({
        ...queryParamsFilter,
        capacity: unselectedCapacity,
      });
    }
  };

  const rangeInputHandler = (e: FormEvent<HTMLInputElement>) => {
    setRangeValue(+e.currentTarget.value);
  };

  const mouseUpHandler = () => {
    setQueryParamsFilter({
      ...queryParamsFilter,
      price: rangeValue,
    });
  };

  return (
    <div className="lg:w-1/5 md:w-1/4 lg:px-8 py-16 px-4 bg-white h-auto hidden md:block border-r">
      <div className="sticky top-10">
        <div className="mb-10">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-semibold text-secondinary-300 text-xs uppercase space-x-2 tracking-widest">
              Type
            </h3>
          </div>
          <ul className={`px-2`}>
            {carTypes.map((i) => (
              <li key={i} className="mb-1 flex items-center">
                <input
                  type="checkbox"
                  className="cursor-pointer rounded-sm mr-2"
                  id={i}
                  onChange={typeCheckBoxHandler}
                  value={i}
                  name="type"
                  checked={queryParamsFilter.type.includes(i)}
                />
                <label htmlFor={i} className="text-sm lg:text-base font-medium text-secondinary-400">
                  {i}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-10">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-semibold text-secondinary-300 text-xs uppercase space-x-2 tracking-widest">
              Capacity
            </h3>
          </div>
          <ul className={`px-2`}>
            {carCapasity.map((i) => (
              <li key={i} className="mb-1 flex items-center">
                <input
                  type="checkbox"
                  className="cursor-pointer rounded-sm mr-2"
                  id={i}
                  onChange={capacityCheckBoxHandler}
                  value={i}
                  name="capacity"
                  checked={queryParamsFilter.capacity.includes(i)}
                />
                <label htmlFor={i} className="text-sm lg:text-base font-medium text-secondinary-400">
                  {i} Person
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-5 font-semibold text-secondinary-300 text-xs uppercase space-x-2 tracking-widest">
            Price
          </h3>
          <input
            name="price"
            value={rangeValue}
            min={20}
            max={500}
            onChange={rangeInputHandler}
            onMouseUp={mouseUpHandler}
            type="range"
            className="w-full bg-secondinary-300 outline-none"
          />
          <h3 className="font-medium text-secondinary-400 text-sm lg:text-base">
            Max ${rangeValue.toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
}
