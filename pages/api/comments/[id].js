import dbConnect from "../../../db/dbConnect";
import Comments from "../../../db/Models/Comments";

// /api/questions/6390625d81028414270e1657 // [id]
export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  const { id } = req.query;

  if (method === "GET") {
    const commentsObject = await Comments.findById(id);

    if (commentsObject) {
      return res.status(200).json({
        id: commentsObject._id,
        name: commentsObject.name,
        comment: commentsObject.comment,
        routeID: commentsObject.routeID,
      });
    }
    {
      return res.status(404).json({ message: "comment not found" });
    }
  }

  if (method === "DELETE") {
    const result = await Comments.findByIdAndDelete(id);

    if (result) {
      return res.status(200).json({ message: "comment deleted" });
    }
    {
      return res.status(404).json({ message: "comment not found" });
    }
  }

  res.status(405).json({ message: "method not allowed" });
}
