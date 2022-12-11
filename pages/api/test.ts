import type { NextApiRequest, NextApiResponse } from "next";
import connection from "../../lib/db";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse) {
    const requestMethod = req.method;
    const body = req.body;
    switch (requestMethod) {
      case "POST":
        res.status(200).json({ message: `You submitted the following data: ${body}` });
      default:
        res.status(200).json({ message: "Welcome to API Routes" });
    }
}