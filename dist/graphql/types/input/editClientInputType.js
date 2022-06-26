"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditClientInputType = void 0;
const graphql_1 = require("graphql");
const EditClientInputType = new graphql_1.GraphQLInputObjectType({
    name: "EditClientInputType",
    fields: () => ({
        id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString },
    }),
});
exports.EditClientInputType = EditClientInputType;
//# sourceMappingURL=editClientInputType.js.map