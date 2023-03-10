import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../sanity";
import { Tweet } from "../../interface";
import { groq } from "next-sanity";

const feedQuery = groq`
*[_type == 'tweet' && !blockTweet ]{
  _id,
  ...  
}|order(_createdAt desc)
`;

type Data = {
  tweets: Tweet[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const tweets: Tweet[] = await client.fetch(feedQuery);
  res.status(200).json({ tweets });
}
