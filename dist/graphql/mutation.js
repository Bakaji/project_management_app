"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutation = void 0;
const graphql_1 = require("graphql");
const Client_1 = require("../models/Client");
const Project_1 = require("../models/Project");
const Client_2 = require("./types/Client");
const input_1 = require("./types/input");
const Project_2 = require("./types/Project");
const mutation = new graphql_1.GraphQLObjectType({
    name: "MutationObjectType",
    fields: () => ({
        addClient: {
            type: Client_2.ClientObjectType,
            args: {
                input: { type: new graphql_1.GraphQLNonNull(input_1.AddClientInputType) },
            },
            resolve: (_, { input }) => {
                const client = new Client_1.clientModel(input);
                return client.save();
            },
        },
        editClient: {
            type: Client_2.ClientObjectType,
            args: {
                input: { type: new graphql_1.GraphQLNonNull(input_1.EditClientInputType) },
            },
            resolve: (_, { input }) => {
                const filteredInput = {};
                //filter null values from object with typescript
                Object.keys(input).forEach((key) => {
                    if (input[key] !== null) {
                        filteredInput[key] = input[key];
                    }
                });
                return Client_1.clientModel.findByIdAndUpdate(input.id, filteredInput);
            },
        },
        deleteClient: {
            type: Client_2.ClientObjectType,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
            },
            resolve: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
                yield Project_1.projectModel.deleteMany({ clientId: id });
                return Client_1.clientModel.findByIdAndDelete(id);
            }),
        },
        addProject: {
            type: Project_2.ProjectObjectType,
            args: {
                input: { type: new graphql_1.GraphQLNonNull(input_1.AddProjectInputType) },
            },
            resolve: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
                const client = yield Client_1.clientModel.findById(input.clientId);
                if (!client) {
                    throw new graphql_1.GraphQLError("Client not found");
                }
                const project = new Project_1.projectModel(Object.assign(Object.assign({}, input), { status: Project_1.ProjectStatus.PLANNED.value }));
                return project.save();
            }),
        },
        editProject: {
            type: Project_2.ProjectObjectType,
            args: {
                input: { type: new graphql_1.GraphQLNonNull(input_1.EditProjectInputType) },
            },
            resolve: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
                const project = yield Project_1.projectModel.findById(input.id);
                if (!project) {
                    throw new graphql_1.GraphQLError("Project not found");
                }
                const filteredInput = {};
                Object.keys(input).forEach((key) => {
                    if (input[key] !== null) {
                        filteredInput[key] = input[key];
                    }
                });
                return yield Project_1.projectModel.findByIdAndUpdate(input.id, filteredInput);
            }),
        },
        deleteProject: {
            type: Project_2.ProjectObjectType,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
            },
            resolve: (_, { id }) => {
                return Project_1.projectModel.findByIdAndDelete(id);
            },
        },
    }),
});
exports.mutation = mutation;
//# sourceMappingURL=mutation.js.map