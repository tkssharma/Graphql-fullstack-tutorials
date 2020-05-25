import 'dotenv/config';
import { graphiqlExpress } from 'apollo-server-express';
const typeDefs = require('./src/schema')
const resolvers = require('./src/resolver')
import { connectMongo } from './src/model/index';
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const PORT = 4000;

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });
connectMongo().then(() => {
  app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
}).catch(err => {
  // TBD
})
