import carsModel from "@/models/car";
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

    const searchQuery = req.query.name;

    const cars = await carsModel.find({
      name: { $regex: new RegExp(`^${searchQuery}`, "i") },
    });

    if (cars) {
      return res
        .status(200)
        .json({ message: "Request successful.", data: cars });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
