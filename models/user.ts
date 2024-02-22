import mongoose from "mongoose";
import { carSchema } from "./car";

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
    rentedCars: [carSchema],
  },
  {
    timestamps: true,
  }
);

const usersModel = mongoose.models.User || mongoose.model("User", userSchema);

export default usersModel;
