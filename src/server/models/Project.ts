import mongoose from "mongoose";
const statusEnum = ["Not Started", "In Progress", "Completed"];

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: statusEnum,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Client',
  },
});
const projectModel = mongoose.model("Project", projectSchema);

export { projectModel };
