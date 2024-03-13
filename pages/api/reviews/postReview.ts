import reviewsModel from "@/models/review";
import connectToDB from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return false;
  }

  try {
    connectToDB();

    const { user, car, comment, rating } = req.body;

    if (!user && !car && !comment && !rating) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existingReview = await reviewsModel.findOne({ user, car });

    if (existingReview) {
      return res.status(409).json({ message: "Review already exists" });
    }

    const newReview = await reviewsModel.create({ user, car, comment, rating });

    if (newReview) {
      return res.status(201).json(newReview);
    }

    return res.status(500).json({ message: "Error posting review" });
  } catch (error) {
    return res.status(500).json({ message: "Unknown Internal Server Error" });
  }
}
