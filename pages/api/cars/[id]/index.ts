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

    const { id } = req.query;

    if (id) {
      const car = await carsModel.findOne({ _id: id });
      return res
        .status(200)
        .json({ message: "Request was successfully", data: car });
    }
  } catch (error) {
    return res.status(500).json({ message: "Unknown Internal Server Error" });
  }
}
