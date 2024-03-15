import { CarInterface } from "@/types";
import React, { createContext, useContext, useReducer, useState } from "react";

type ActionType =
  | { type: "RENT"; payload: CarInterface }
  | { type: "CHECKOUT"; payload: CarInterface }
  | { type: "CLEAR"; payload: CarInterface };

interface ReducerStateInterface {
  selectedCar: CarInterface | {};
  checkout: boolean;
  clear: boolean;
}

const initialState: ReducerStateInterface = {
  selectedCar: {},
  checkout: false,
  clear: false,
};

const rentalCartContext = createContext<{
  state: ReducerStateInterface;
  dispatch: React.Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

const carReducer = (
  state: ReducerStateInterface,
  action: ActionType
): ReducerStateInterface => {
  console.log(state);

  switch (action.type) {
    case "RENT":
      return {
        ...state,
        selectedCar: action.payload,
        checkout: false,
      };
    case "CHECKOUT":
      return {
        ...state,
        checkout: true,
        selectedCar: {},
      };
    case "CLEAR":
      return {
        checkout: false,
        selectedCar: {},
        clear: true,
      };
    default:
      return state;
  }
};

const RentalCartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(carReducer, initialState);

  return (
    <rentalCartContext.Provider value={{ state, dispatch }}>
      {children}
    </rentalCartContext.Provider>
  );
};

export default RentalCartContextProvider;

export function useRentalCart() {
  const { state, dispatch } = useContext(rentalCartContext);
  return { state, dispatch };
}