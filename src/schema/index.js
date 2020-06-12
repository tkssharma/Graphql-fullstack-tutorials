const {gql} = require('apollo-server-express');

const baseSchema =  gql`
scalar Date

type Query {
  _: Boolean
}

type Mutation {
  _: Boolean
}

type Subscription {
  _: Boolean
}
`;
module.exports =  [baseSchema]