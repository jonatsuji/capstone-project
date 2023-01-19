import mongoose from "mongoose";

const { Schema } = mongoose;

// Blaupause
const commentsSchema = new Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: false },
  routeID: { type: String, required: true },
});

// Question Model erlaubt uns die CRUD-Operationen
const Comments =
  mongoose.models.Comments || mongoose.model("Comments", commentsSchema);

export default Comments;
