import dbConnect from "../../../db/dbConnect";
import BoulderData from "../../../db/Models/Boulder-data";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const boulderData = await BoulderData.find();

    const boulderDataArray = boulderData.map((dataObject) => {
      return {
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
      };
    });

    return res.status(200).json(boulderDataArray);
  }
  res.status(405).json({ message: "method not allowed" });
}
