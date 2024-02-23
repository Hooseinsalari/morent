import connectToDB from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.json({ message: "hello" });
}
