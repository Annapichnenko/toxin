import mongoose from "mongoose";

const Data = new mongoose.Schema({
  title: { type: String, required: true },
});

export default mongoose.model("Data", Data);
