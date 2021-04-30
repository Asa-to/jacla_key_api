import { ApolloServer } from 'apollo-server';

import { typeDefs } from './schema';
import { resolvers } from './resolver';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});