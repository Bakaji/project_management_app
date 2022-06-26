import {
  GraphQLError,
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
} from "graphql";
import { clientModel } from "../models/Client";
import { projectModel, ProjectStatus } from "../models/Project";
import { ClientObjectType } from "./types/Client";
import {
  AddClientInputType,
  AddProjectInputType,
  EditClientInputType,
  EditProjectInputType,
} from "./types/input";
import { ProjectObjectType } from "./types/Project";

const mutation = new GraphQLObjectType({
  name: "MutationObjectType",
  fields: () => ({
    addClient: {
      type: ClientObjectType,
      args: {
        input: { type: new GraphQLNonNull(AddClientInputType) },
      },
      resolve: (_, { input }) => {
        const client = new clientModel(input);
        return client.save();
      },
    },
    editClient: {
      type: ClientObjectType,
      args: {
        input: { type: new GraphQLNonNull(EditClientInputType) },
      },
      resolve: (_, { input }) => {
        const filteredInput: any = {};
        //filter null values from object with typescript
        Object.keys(input).forEach((key) => {
          if (input[key] !== null) {
            filteredInput[key] = input[key];
          }
        });
        return clientModel.findByIdAndUpdate(input.id, filteredInput);
      },
    },
    deleteClient: {
      type: ClientObjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: async (_, { id }) => {
        await projectModel.deleteMany({ clientId: id });
        return clientModel.findByIdAndDelete(id);
      },
    },
    addProject: {
      type: ProjectObjectType,
      args: {
        input: { type: new GraphQLNonNull(AddProjectInputType) },
      },
      resolve: async (_, { input }) => {
        const client = await clientModel.findById(input.clientId);
        if (!client) {
          throw new GraphQLError("Client not found");
        }
        const project = new projectModel({
          ...input,
          status: ProjectStatus.PLANNED.value,
        });
        return project.save();
      },
    },
    editProject: {
      type: ProjectObjectType,
      args: {
        input: { type: new GraphQLNonNull(EditProjectInputType) },
      },
      resolve: async (_, { input }) => {
        const project = await projectModel.findById(input.id);
        if (!project) {
          throw new GraphQLError("Project not found");
        }
        const filteredInput: any = {};
        Object.keys(input).forEach((key) => {
          if (input[key] !== null) {
            filteredInput[key] = input[key];
          }
        });
        return await projectModel.findByIdAndUpdate(input.id, filteredInput);
      },
    },
    deleteProject: {
      type: ProjectObjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (_, { id }) => {
        return projectModel.findByIdAndDelete(id);
      },
    },
  }),
});

export { mutation };
