import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} from "graphql";
//Mongoose models
import { clientModel } from "../models/Client";
import { projectModel } from "../models/Project";
import { ClientObjectType } from "./types/Client";
import { ProjectObjectType } from "./types/Project";

const query = new GraphQLObjectType({
  name: "rootQuery",
  fields: () => ({
    allProjects: {
      type: new GraphQLList(ProjectObjectType),
      resolve: () => projectModel.find(),
    },
    allClients: {
      type: new GraphQLList(ClientObjectType),
      resolve: () => clientModel.find(),
    },
    client: {
      type: ClientObjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (_, { id }) => clientModel.findById(id),
    },
    project: {
      type: ProjectObjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (_, { id }) => projectModel.findById(id),
    },
  }),
});

export { query };
