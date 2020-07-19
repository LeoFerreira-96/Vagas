import mongoose, { Schema } from "mongoose";

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url:{
    type: String,
    required: false,
  },
  resume: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Item", ItemSchema);
