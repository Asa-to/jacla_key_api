import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    logs(begin: String, end: String): [Log!]!
  }

  type Log {
    id: ID!
    date: String!
    user: User!
    place: Place!
  }

  type User {
    id: ID!
    name: String!
  }

  type Place {
    id: ID!
    name: String!
  }
`;