import mongoose from "mongoose";
import carsModel, { carSchema } from "./car";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      maxlength: 15,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    rentedCars: [
      {
        carInfo: {
          type: mongoose.Schema.ObjectId,
          ref: "carsModel",
        },
        pickUpDetails: {
          location: String,
          date: {
            day: { type: Number, default: null },
            month: { type: Number, default: null },
            year: { type: Number, default: null },
          },
          time: String,
        },
        dropOffDetails: {
          location: String,
          date: {
            day: { type: Number, default: null },
            month: { type: Number, default: null },
            year: { type: Number, default: null },
          },
          time: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const usersModel = mongoose.models.User || mongoose.model("User", userSchema);

export default usersModel;
