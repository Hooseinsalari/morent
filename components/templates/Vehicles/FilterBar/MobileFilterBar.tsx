import React, { FormEvent, useRef, useState } from "react";
import Image from "next/image";

// constant
import { carCapasity, carTypes } from "@/constant";

// hooks
import useOutsideClick from "@/hooks/useOutsideClick";

// types
import { FilterBarProps } from "@/types";

// icons
import Close from "@/public/svg/close.svg";
import Arrow from "@/public/svg/arrow-down.svg";

const MobileFilterBar = ({
  queryParamsFilter,
  setQueryParamsFilter,
}: FilterBarProps) => {
  // ** state
  const [rangeValue, setRangeValue] = useState<number>(50);
  const [isShow, setIsShow] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<{ first: boolean; second: boolean }>({
    first: true,
    second: false,
  });

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

  // ** refs
  const filterBarRef = useRef<HTMLDivElement>(null);

  // ** hooks
  useOutsideClick(filterBarRef, "filterBar", () => setIsShow(false));

  return (
    <div className="md:hidden">
      <div
        ref={filterBarRef}
        id="filterBar"
        className={`fixed bg-white w-2/3 right-0 top-0 min-h-screen z-50 p-4 duration-700 ease-in-out ${
          isShow ? "translate-x-0" : "translate-x-[1000px]"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-semibold text-lg">Filters</h3>
          <button onClick={() => setIsShow(!isShow)}>
            <Image
              src={Close}
              width={24}
              height={24}
              className="cursor-pointer"
              alt="close"
            />
          </button>
        </div>
        <div className="mb-4">
          <div
            onClick={() => setIsOpen({ ...isOpen, first: !isOpen.first })}
            className="mb-2 flex items-center justify-between"
          >
            <h3 className="font-semibold text-secondinary-300">Type</h3>
            <Image
              src={Arrow}
              alt="arrow"
              width={16}
              height={16}
              className={`duration-200 ${isOpen.first ? "rotate-180" : ""}`}
            />
          </div>
          <ul
            className={`px-2 ${
              isOpen.first ? "h-auto overflow-visible" : "h-0 overflow-hidden"
            }`}
          >
            {carTypes.map((i) => (
              <li key={i} className="mb-1 flex items-center">
                <input
                  type="checkbox"
                  className="rounded-sm mr-2"
                  id={i}
                  onChange={typeCheckBoxHandler}
                  value={i}
                  name="type"
                  checked={queryParamsFilter.type.includes(i)}
                />
                <label htmlFor={i} className="font-medium text-secondinary-400">
                  {i}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <div
            onClick={() => setIsOpen({ ...isOpen, second: !isOpen.second })}
            className="mb-2 flex items-center justify-between"
          >
            <h3 className="font-semibold text-secondinary-300">Capacity</h3>
            <Image
              src={Arrow}
              width={16}
              height={16}
              alt="arrow"
              className={`w-4 h-4 duration-200 ${
                isOpen.second ? "rotate-180" : ""
              }`}
            />
          </div>
          <ul
            className={`px-2 ${
              isOpen.second ? "h-auto overflow-visible" : "h-0 overflow-hidden"
            }`}
          >
            {carCapasity.map((i) => (
              <li key={i} className="mb-1 flex items-center">
                <input
                  type="checkbox"
                  className="rounded-sm mr-2"
                  id={i}
                  onChange={capacityCheckBoxHandler}
                  value={i}
                  name="capacity"
                  checked={queryParamsFilter.capacity.includes(i)}
                />
                <label htmlFor={i} className="font-medium text-secondinary-400">
                  {i}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h3 className="font-semibold text-secondinary-300">Price</h3>
          <input
            className="w-full bg-secondinary-300 outline-none"
            name="price"
            value={rangeValue}
            min={20}
            max={500}
            onChange={rangeInputHandler}
            type="range"
            onMouseUp={mouseUpHandler}
          />
          <h3 className="font-medium text-secondinary-400">
            Max ${rangeValue.toFixed(2)}
          </h3>
        </div>
      </div>

      <div
        className={`fixed z-40 inset-0 bg-black opacity-50 pointer-events-auto ${
          isShow ? "block" : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default MobileFilterBar;