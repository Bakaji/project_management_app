"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProjectInputType = void 0;
const graphql_1 = require("graphql");
const AddProjectInputType = new graphql_1.GraphQLInputObjectType({
    name: "AddProjectInputType",
    fields: () => ({
        clientId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
        name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        description: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
    }),
});
exports.AddProjectInputType = AddProjectInputType;
//# sourceMappingURL=addProjectInputType.js.map