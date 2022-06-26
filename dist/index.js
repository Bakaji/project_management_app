"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
require("colors");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
require("dotenv").config();
const express_graphql_1 = require("express-graphql");
const schema_1 = require("./graphql/schema");
const db_1 = require("./config/db");
const app = (0, express_1.default)();
const isDevelopment = process.env.NODE_ENV === "development";
const port = process.env.PORT || 5000;
const frontEndFolder = path_1.default.resolve(__dirname, "../dist/frontend");
(0, db_1.connectDb)();
app.use((0, cors_1.default)());
app.use(express_1.default.static(frontEndFolder));
app.use((0, morgan_1.default)(isDevelopment ? "dev" : "common"));
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.schema,
    graphiql: isDevelopment,
}));
app.use("/", (req, res) => {
    res.sendFile(path_1.default.join(frontEndFolder, "index.html"));
});
app.listen(port, () => {
    console.log(`server running on ${port}`);
});
//# sourceMappingURL=index.js.map