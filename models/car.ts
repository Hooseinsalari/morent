const mongoose = require("mongoose");

export const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    gasoline: {
      type: Number,
      required: true,
    },
    steering: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const carsModel = mongoose.models.Car || mongoose.model("Car", carSchema);

export default carsModel;
