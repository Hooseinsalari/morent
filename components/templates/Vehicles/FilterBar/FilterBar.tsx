import React from "react";

// component
import DesktopFilterBar from "./DesktopFilterBar";

// types
import { FilterBarProps } from "@/types";

const FilterBar = ({queryParamsFilter,setQueryParamsFilter}: FilterBarProps) => {
  return (
    <>
      <DesktopFilterBar
        queryParamsFilter={queryParamsFilter}
        setQueryParamsFilter={setQueryParamsFilter}
      />
    </>
  );
};

export default FilterBar;
