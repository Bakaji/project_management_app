"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientObjectType = void 0;
const graphql_1 = require("graphql");
const ClientObjectType = new graphql_1.GraphQLObjectType({
    name: "ClientObjectType",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString },
    }),
});
exports.ClientObjectType = ClientObjectType;
//# sourceMappingURL=Client.js.map