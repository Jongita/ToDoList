import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['not-started', 'in-progress', 'done'],
    default: 'not-started',
  },
});

const Task=mongoose.model("Task", taskSchema);

export {Task};