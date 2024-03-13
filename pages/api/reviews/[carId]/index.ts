import reviewsModel from "@/models/review";
import connectToDB from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return false;
  }

  try {
    connectToDB();

    const { carId } = req.query;

    const reviews = await reviewsModel
      .find({ car: carId }, "-User.password")
      .populate("user", "-password");

    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ message: "Unknown Internal Server Error" });
  }
}
