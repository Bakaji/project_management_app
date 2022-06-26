import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";

const AddProjectInputType = new GraphQLInputObjectType({
  name: "AddProjectInputType",
  fields: () => ({
    clientId: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export { AddProjectInputType };
