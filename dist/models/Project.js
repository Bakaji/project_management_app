"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectStatus = exports.projectModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ProjectStatus = {
    PLANNED: { value: "PLANNED" },
    IN_PROGRESS: { value: "IN_PROGRESS" },
    COMPLETED: { value: "COMPLETED" },
};
exports.ProjectStatus = ProjectStatus;
const statusArray = Object.values(ProjectStatus).map((a) => a.value);
const projectSchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Client",
    },
});
const projectModel = mongoose_1.default.model("Project", projectSchema);
exports.projectModel = projectModel;
//# sourceMappingURL=Project.js.map