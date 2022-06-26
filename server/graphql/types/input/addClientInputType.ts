import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const AddClientInputType = new GraphQLInputObjectType({
  name: "AddClientInputType",
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export { AddClientInputType };
