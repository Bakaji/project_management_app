"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectStatusEnum = exports.ProjectObjectType = void 0;
const graphql_1 = require("graphql");
const Project_1 = require("../../models/Project");
const Client_1 = require("../../models/Client");
const Client_2 = require("./Client");
const ProjectStatusEnum = new graphql_1.GraphQLEnumType({
    name: "ProjectStatusEnum",
    values: Project_1.ProjectStatus,
});
exports.ProjectStatusEnum = ProjectStatusEnum;
const ProjectObjectType = new graphql_1.GraphQLObjectType({
    name: "projectQueryType",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        status: { type: ProjectStatusEnum },
        client: {
            type: Client_2.ClientObjectType,
            resolve(parent) {
                return Client_1.clientModel.findById(parent.clientId);
            },
        },
    }),
});
exports.ProjectObjectType = ProjectObjectType;
//# sourceMappingURL=Project.js.map