import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

const ClientObjectType = new GraphQLObjectType({
  name: "ClientObjectType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});
export { ClientObjectType };
