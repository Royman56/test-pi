import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  information: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
},{timestamps:true});

export default mongoose.model("Task", TaskSchema);