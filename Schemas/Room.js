import mongoose from "mongoose";

const Room = new mongoose.Schema({
  number: { type: Number, required: true },
  comments: { type: String, required: true },
  price: { type: String, required: true },
  rooms: [{ type: String }],
  isLux: { type: Boolean },
});

export default mongoose.model("Room", Room);
