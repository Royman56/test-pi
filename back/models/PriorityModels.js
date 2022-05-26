import mongoose from "mongoose";

const PrioritySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
});

export default mongoose.model("Priority", PrioritySchema);