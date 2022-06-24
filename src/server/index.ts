import express from "express";
import "colors";
require("dotenv").config();

import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema";
import { connectDb } from "./config/db";
const app: express.Express = express();

const port = process.env.PORT || 5000;

connectDb();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
