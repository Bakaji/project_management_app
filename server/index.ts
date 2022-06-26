import express from "express";
import morgan from "morgan";
import "colors";
import cors from "cors";
import path from "path";
require("dotenv").config();

import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema";
import { connectDb } from "./config/db";
const app: express.Express = express();

const isDevelopment = process.env.NODE_ENV === "development";
const port = process.env.PORT || 5000;
const frontEndFolder = path.resolve(__dirname, "../dist/frontend");

connectDb();
app.use(cors());
app.use(express.static(frontEndFolder));

app.use(morgan(isDevelopment ? "dev" : "common"));
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: isDevelopment,
  })
);
app.use("/", (req, res) => {
  res.sendFile(path.join(frontEndFolder, "index.html"));
});
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
