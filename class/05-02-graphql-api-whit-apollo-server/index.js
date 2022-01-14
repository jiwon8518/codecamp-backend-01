// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from 'apollo-server';


// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const server = new ApolloServer({ // server 변수명임 app 도 변수명
  typeDefs,
  resolvers,
});

server.listen(3000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });