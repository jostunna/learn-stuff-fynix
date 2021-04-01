const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const resolvers = require("./resolvers");
const { startDatabase } = require("./database");
const expressPlayground = require("graphql-playground-middleware-express")
  .default;

// create context for holding db info
const context = async function () {
  const db = await startDatabase();

  return { db };
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    context,
  })
);

// graphql playground route
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

module.exports = app;
