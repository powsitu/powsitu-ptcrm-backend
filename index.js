const express = require("express");
const corsMiddleWare = require("cors");

const app = express();
const { PORT } = require("./config/myVars");

// applying middlewares
app.use(corsMiddleWare());
app.use(express.json());

// start of stuff to initialize graphql
const { ApolloServer } = require("apollo-server-express");
// const db = require("./models");
const { typeDefs } = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});
server.applyMiddleware({ app });
// end of graphql stuff

// running the server!
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
