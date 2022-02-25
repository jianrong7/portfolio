import redis from "../../lib/redis";

export default async function handler(req, res) {
  const { title } = req.body;
  const likes = await redis.get(title);
  res.status(200).json({ likes });
  // res.end(`Post Slug: ${slug}`);
  // res.status(200).json({ name: "John Doe" });
}
