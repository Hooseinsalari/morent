import type { NextApiRequest, NextApiResponse } from "next";

// models
import usersModel from "@/models/user";

// auth function
import { generateToken, hashPassword } from "@/utils/auth";

// db
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

    const { username, email, password, confirmPassword } = req.body;

    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      return res.status(422).json({ message: "Data are not valid !" });
    }

    // ** hash password
    const hashedPassword = await hashPassword(password);

    // ** token
    const token = generateToken({ email });

    // ** check user exist or not
    const isUserExist = await usersModel.findOne({
      $or: [{ email }, { username }],
    });

    if (isUserExist) {
      return res.status(422).json({ message: "User already exist!" });
    }

    const users = await usersModel.find({});

    await usersModel.create({
      username,
      email,
      password: hashedPassword,
      role: users.length < 1 ? "ADMIN" : "USER",
    });

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
      .json({ message: "User create successfully!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Unknown Internal Server Error", error });
  }
}
