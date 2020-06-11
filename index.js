require('dotenv/config');
const cors = require('cors');
const http = require('http');
const jwt = require('jsonwebtoken');
const express = require('express');
const {
  ApolloServer,
  AuthenticationError,
} = require('apollo-server-express');

const schema = require('./data/schema');
const resolvers = require('./data/resolvers');

const app = express();

app.use(cors());

const server = new ApolloServer({
  introspection: true,
  schema,
  context: async (req) => {
    authUser: req.user
}
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const port = process.env.PORT || 3000;

httpServer.listen({ port }, () => {
    console.log(`Apollo Server on http://localhost:${port}/graphql`);
});