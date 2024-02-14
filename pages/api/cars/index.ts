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

  connectToDB();

  const cars = await carsModel.find({});

  if (cars) {
    return res.status(200).json({ message: "Request successful." });
  }
}
