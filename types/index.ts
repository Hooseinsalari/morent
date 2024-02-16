import React from "react";

export interface PickUpDropOffInterface {
  location: string;
  date: string;
  time: string;
}

export interface PickUpComponentProps {
  pickUp: PickUpDropOffInterface;
  setPickUp: React.Dispatch<React.SetStateAction<PickUpDropOffInterface>>;
}

export interface DropOffComponentProps {
  dropOff: PickUpDropOffInterface;
  setDropOff: React.Dispatch<React.SetStateAction<PickUpDropOffInterface>>;
}

export interface MarkProps {
  isPick: boolean;
}

export interface CarInterface {
  _id: string;
  name: string;
  type: string;
  gasoline: number;
  steering: string;
  capacity: number;
  price: number;
  image: string;
}

export interface TagListsProps {
  title: string;
  li_1: string;
  li_2: string;
  li_3: string;
  li_4: string;
}

export interface QueryParamsFilter {
  type: string[];
  capacity: string[];
  price: number;
}

export interface FilterBarProps {
  queryParamsFilter: QueryParamsFilter;
  setQueryParamsFilter: React.Dispatch<React.SetStateAction<QueryParamsFilter>>;
}
