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
