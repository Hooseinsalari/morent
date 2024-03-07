import type { NextApiRequest, NextApiResponse } from "next";

// model
import usersModel from "@/models/user";

// utils
import { verifyToken } from "@/utils/auth";
import connectToDB from "@/utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return false;
  }

  try {
    connectToDB();

    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "You are not logged in!" });
    }

    const tokenPayload = verifyToken(token);

    if (!tokenPayload) {
      return res.status(401).json({ message: "You are not logged in!" });
    }

    const user = await usersModel.findOne(
      { email: tokenPayload.email },
      "username email rentedCars"
    );

    return res.status(200).json({ data: user });
  } catch (error) {
    return res.status(500).json({ message: "Unknown Internal Server Error" });
  }
}
