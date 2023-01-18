import mongoose from "mongoose";

const { Schema } = mongoose;

// Blaupause
const boulderSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  grade: { type: String, required: false },
  routes: { type: Number, required: false },
  stone: { type: String, required: true },
  country: { type: String, required: false },
  image: { type: String, required: false },
  walkTime: { type: String, required: false },
  sector: { type: String, required: false },
  area: { type: String, required: false },
  lng: { type: Number, required: false },
  lat: { type: Number, required: false },
  lengths: { type: Number, required: false },
  slug: { type: String, required: false },
});

// Question Model erlaubt uns die CRUD-Operationen
const BoulderData =
  mongoose.models.BoulderData || mongoose.model("Boulder-data", boulderSchema);

export default BoulderData;
