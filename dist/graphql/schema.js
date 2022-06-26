"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const mutation_1 = require("./mutation");
const query_1 = require("./query");
const schema = new graphql_1.GraphQLSchema({
    query: query_1.query,
    mutation: mutation_1.mutation,
});
exports.schema = schema;
//# sourceMappingURL=schema.js.map