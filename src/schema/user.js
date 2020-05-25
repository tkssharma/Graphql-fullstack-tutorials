import { gql } from 'apollo-server-express';

export default gql`

  type Token {
        token: String!
   }
  type User {
    id: ID!
    username: String!
    email: String!
    role: String
    messages: [Message!]
  }
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }
  extend type Mutation {
    users: [User!]
    user(id: ID!): User
    me: User
  }
  extend type Subscription {
  }
  `