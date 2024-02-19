import React from "react";

// component
import DesktopFilterBar from "./DesktopFilterBar";

// types
import { FilterBarProps } from "@/types";
import MobileFilterBar from "./MobileFilterBar";

const FilterBar = ({
  queryParamsFilter,
  setQueryParamsFilter,
}: FilterBarProps) => {
  return (
    <>
      <DesktopFilterBar
        queryParamsFilter={queryParamsFilter}
        setQueryParamsFilter={setQueryParamsFilter}
      />
      <MobileFilterBar
        queryParamsFilter={queryParamsFilter}
        setQueryParamsFilter={setQueryParamsFilter}
      />
    </>
  );
};

export default FilterBar;
