import usersModel from "@/models/user";
import { verifyToken } from "@/utils/auth";
import connectToDB from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    return false;
  }

  try {
    connectToDB();

    const { carId } = req.body;

    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "You are not logged in!" });
    }

    const tokenPayload = verifyToken(token);

    if (!tokenPayload) {
      return res.status(401).json({ message: "You are not logged in!" });
    }

    const user = await usersModel.findOne({ email: tokenPayload.email });

    const filter = { email: user.email };

    const update = {
      $push: {
        rentedCars: carId,
      },
    };

    const result = await usersModel.updateOne(filter, update);

    if (result.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "Unable to confirm car rental. Please try again." });
    }

    return res
      .status(200)
      .json({ message: "Car rental confirmed. Enjoy your trip!" });
  } catch (error) {
    return res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
    });
  }
}
