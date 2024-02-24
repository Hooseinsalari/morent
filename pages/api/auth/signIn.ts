import type { NextApiRequest, NextApiResponse } from "next";

// models
import usersModel from "@/models/user";

// utils
import { generateToken, verifyPassword } from "@/utils/auth";
import connectToDB from "@/utils/db";

// cookie
import { serialize } from "cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return false;
  }

  try {
    connectToDB();

    const { identifier, password } = req.body;

    // ** checking inputs
    if (!identifier.trim() || !password.trim()) {
      return res.status(422).json({ message: "Data are not valid !" });
    }

    const user = await usersModel.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });

    // ** checking user exist or not
    if (!user) {
      return res.status(401).json({
        message: "We couldn’t find an account with that username or email.",
      });
    }

    const isMatch = await verifyPassword(password, user.password);

    // ** checking password is match or not
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials.",
      });
    }

    // ** generate token
    const token = generateToken({ email: user.email });

    return res
      .setHeader(
        "Set-Cookie",
        serialize("token", token, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7,
          path: "/",
        })
      )
      .status(201)
      .json({ message: `Welcome back, ${user.username}!` });
  } catch (error) {
    return res.status(500).json({ message: "Unknown Internal Server Error" });
  }
}
