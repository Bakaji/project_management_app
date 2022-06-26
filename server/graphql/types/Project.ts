import {
  GraphQLEnumType,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { ProjectStatus } from "../../models/Project";
import { clientModel } from "../../models/Client";
import { ClientObjectType } from "./Client";

const ProjectStatusEnum = new GraphQLEnumType({
  name: "ProjectStatusEnum",
  values: ProjectStatus,
});

const ProjectObjectType = new GraphQLObjectType({
  name: "projectQueryType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: ProjectStatusEnum },
    client: {
      type: ClientObjectType,
      resolve(parent) {
        return clientModel.findById(parent.clientId);
      },
    },
  }),
});

export { ProjectObjectType ,ProjectStatusEnum};
