import React from "react";

export interface PickUpDropOffInterface {
  location: string;
  date: {
    day: number | null;
    month: number | null;
    year: number | null;
  };
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

export interface FilterType {
  type: string | string[] | undefined;
  capacity: string | string[] | undefined;
  price: { $gte: string | string[] };
}

export interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignInFormData {
  identifier: string;
  password: string;
}

export interface RentedCarInterface {
  carInfo: CarInterface;
  pickUpDetails: PickUpDropOffInterface;
  dropOffDetails: PickUpDropOffInterface;
}

export interface UserData {
  username: string;
  email: string;
  rentedCars: RentedCarInterface[] | [];
  _id: string;
}

export interface ReviewInterface {
  _id: string;
  user: {
    _id: string;
    username: string;
    email: string;
    role: string;
    rentedCars: RentedCarInterface[] | [];
  };
  car: string;
  comment: string;
  rating: number;
  createdAt: string;
}

export interface InputsValueInterface {
  name: string;
  address: string;
  phone: string;
  town: string;
  card: string;
  holder: string;
  date: string;
  cvc: string;
  pay: string;
  check1: boolean;
}

export interface PaymentComponentsProps {
  inputsValue: InputsValueInterface;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RentalInfoProps {
  pickUpDetails: PickUpDropOffInterface;
  setPickUpDetails: React.Dispatch<
    React.SetStateAction<PickUpDropOffInterface>
  >;
  dropOffDetails: PickUpDropOffInterface;
  setDropOffDetails: React.Dispatch<
    React.SetStateAction<PickUpDropOffInterface>
  >;
}

export interface MinTimeType {
  day: number | null;
  month: number | null;
  year: number | null;
}
