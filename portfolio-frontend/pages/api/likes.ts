import redis from "../../lib/redis";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title } = req.query;
  // handle add like
  if (req.method === "PUT") {
    const { liked } = req.query;
    let likes;
    if (liked) {
      likes = await redis.incr(title as KeyType);
    } else {
      likes = await redis.decr(title as KeyType);
    }
    res.status(200).json({ likes });
    // handle get like
  } else if (req.method === "GET") {
    const likes = await redis.get(title as KeyType);
    if (!likes) await redis.set(title as KeyType, 0);
    res.status(200).json({ likes });
  }
}
