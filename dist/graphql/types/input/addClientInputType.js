"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddClientInputType = void 0;
const graphql_1 = require("graphql");
const AddClientInputType = new graphql_1.GraphQLInputObjectType({
    name: "AddClientInputType",
    fields: () => ({
        name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        phone: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
    }),
});
exports.AddClientInputType = AddClientInputType;
//# sourceMappingURL=addClientInputType.js.map