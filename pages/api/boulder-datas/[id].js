import dbConnect from "../../../db/dbConnect";
import BoulderData from "../../../db/Models/Boulder-data";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  const { id } = req.query;

  if (method === "GET") {
    const dataObject = await BoulderData.findById(id);

    if (dataObject) {
      return res.status(200).json({
        id: dataObject._id,
        name: dataObject.name,
        type: dataObject.type,
        grade: dataObject.grade,
        routes: dataObject.routes,
        stone: dataObject.stone,
        country: dataObject.country,
        image: dataObject.image,
        walkTime: dataObject.walkTime,
        sector: dataObject.sector,
        area: dataObject.area,
        lng: dataObject.lng,
        lat: dataObject.lat,
        length: dataObject.lengths,
        slug: dataObject.slug,
        video: dataObject.video,
      });
    }
    {
      return res.status(404).json({ message: "object not found" });
    }
  }

  if (method === "PUT") {
    const result = await BoulderData.findByIdAndUpdate(
      id,
      {
        id: req.body.id,
        name: req.body.name,
        type: req.body.type,
        grade: req.body.grade,
        routes: req.body.routes,
        stone: req.body.stone,
        country: req.body.country,
        image: req.body.image,
        walkTime: req.body.walkTime,
        sector: req.body.sector,
        area: req.body.area,
        lng: req.body.lng,
        lat: req.body.lat,
        length: req.body.lengths,
        slug: req.body.slug,
        video: req.body.video,
      },

      {
        returnDocument: "after",
      }
    );

    if (result) {
      return res.status(200).json(result);
    }
    {
      return res.status(404).json({ message: "object not found" });
    }
  }

  res.status(405).json({ message: "method not allowed" });
}
