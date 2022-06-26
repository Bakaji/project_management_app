"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const graphql_1 = require("graphql");
//Mongoose models
const Client_1 = require("../models/Client");
const Project_1 = require("../models/Project");
const Client_2 = require("./types/Client");
const Project_2 = require("./types/Project");
const query = new graphql_1.GraphQLObjectType({
    name: "rootQuery",
    fields: () => ({
        allProjects: {
            type: new graphql_1.GraphQLList(Project_2.ProjectObjectType),
            resolve: () => Project_1.projectModel.find(),
        },
        allClients: {
            type: new graphql_1.GraphQLList(Client_2.ClientObjectType),
            resolve: () => Client_1.clientModel.find(),
        },
        client: {
            type: Client_2.ClientObjectType,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
            },
            resolve: (_, { id }) => Client_1.clientModel.findById(id),
        },
        project: {
            type: Project_2.ProjectObjectType,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
            },
            resolve: (_, { id }) => Project_1.projectModel.findById(id),
        },
    }),
});
exports.query = query;
//# sourceMappingURL=query.js.map