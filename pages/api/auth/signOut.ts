import type { NextApiRequest, NextApiResponse } from "next";

// cookie
import { serialize } from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return false;
  }

  try {
    if (req.body.key === "static-key") {
      return res
        .setHeader(
          "Set-Cookie",
          serialize("token", "", {
            maxAge: 0,
            path: "/",
            httpOnly: true,
          })
        )
        .status(200)
        .json({
          message: "Logout successful. We hope to see you again soon!",
          status: "success",
        });
    }
  } catch (error) {
    return res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
    });
  }
}
