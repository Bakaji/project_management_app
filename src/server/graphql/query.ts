import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
//Mongoose models
import { clientModel } from "../models/Client";
import { projectModel } from "../models/Project";

const ProjectObjectType = new GraphQLObjectType({
  name: "projectQueryType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientObjectType,
      resolve(parent) {
        return clientModel.findById(parent.clientId);
      },
    },
  }),
});

const ClientObjectType = new GraphQLObjectType({
  name: "ClientObjectType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

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
