import { client } from "../../sanity";
import { Comment } from "../../interface";
import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
