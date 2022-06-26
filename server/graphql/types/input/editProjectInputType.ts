import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import { ProjectStatusEnum } from "../Project";

const EditProjectInputType = new GraphQLInputObjectType({
  name: "EditProjectInputType",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    status: { type: ProjectStatusEnum },
    description: { type: GraphQLString },
  }),
});

export {
    EditProjectInputType
}