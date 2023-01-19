import dbConnect from "../../../db/dbConnect";
import Comments from "../../../db/Models/Comments";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const comments = await Comments.find();

    return res.status(200).json(comments);
  }

  if (req.method === "POST") {
    const data = req.body;

    try {
      const newPost = await Comments.create(data);

      return res.status(201).json(newPost);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
  res.status(405).json({ message: "method not allowed" });
}
