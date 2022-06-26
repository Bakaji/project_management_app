import mongoose from "mongoose";

const ProjectStatus = {
  PLANNED: { value: "PLANNED" },
  IN_PROGRESS: { value: "IN_PROGRESS" },
  COMPLETED: { value: "COMPLETED" },
};

const statusArray = Object.values(ProjectStatus).map((a) => a.value);

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: statusArray,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});
const projectModel = mongoose.model("Project", projectSchema);

export { projectModel ,ProjectStatus};
