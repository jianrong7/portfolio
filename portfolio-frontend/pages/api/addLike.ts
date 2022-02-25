import redis from "../../lib/redis";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title } = req.body;

    await redis.incr(title);

    res.status(200).json({ body: "success" });
  }

  res.status(200).json({ name: "John Doe" });
}
