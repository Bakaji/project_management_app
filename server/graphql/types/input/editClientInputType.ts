import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const EditClientInputType = new GraphQLInputObjectType({
  name: "EditClientInputType",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

export { EditClientInputType };
