import carsModel from "./car";
import usersModel from "./user";

const mongoose = require("mongoose");

export const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: usersModel,
      required: true,
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: carsModel,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const reviewsModel =
  mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default reviewsModel;
