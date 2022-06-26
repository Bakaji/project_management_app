"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditProjectInputType = void 0;
const graphql_1 = require("graphql");
const Project_1 = require("../Project");
const EditProjectInputType = new graphql_1.GraphQLInputObjectType({
    name: "EditProjectInputType",
    fields: () => ({
        id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
        name: { type: graphql_1.GraphQLString },
        status: { type: Project_1.ProjectStatusEnum },
        description: { type: graphql_1.GraphQLString },
    }),
});
exports.EditProjectInputType = EditProjectInputType;
//# sourceMappingURL=editProjectInputType.js.map