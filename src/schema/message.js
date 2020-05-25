import { gql } from 'apollo-server-express';

export default gql`

  type Message {
     id: ID!
     text: String!
     createdAt: Date;
     user: User;
   }
   type MessageCreated{
     message: Message!
  }
  extend type Query {
    message(id:ID!): Message!
  }
  extend type Mutation {
      createMessage(text: String!): Message!
      deleteMessage(id: ID!): Boolean;
  }
  extend type Subscription {
      messageCreated: MessageCreated!
  }
  `