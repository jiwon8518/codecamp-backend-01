// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from 'apollo-server';


// The GraphQL schema
const myTypeDefs = gql`
  type Query {
    fetchBoards: String
  }

  type Mutation {
    createBoard: String
  }
`;

// A map of functions which return data for the schema.
const myResolvers = {
  Query: {
    fetchBoards: () => {
      // 데이터베이스에서 데이터를 꺼내오는 로직
      
      return "조회에 성공하였습니다";
    }
  },

  Mutation: {
    createBoard: () => {
      // 데이터베이스에 데이터를 저장하는 로직

      return "등록에 성공하였습니다.";
    }
  }
};

const server = new ApolloServer({ // server 변수명임 app 도 변수명
  typeDefs: myTypeDefs, // Key와 값value이 같을때 값(value) 생략 가능 => shorthand property
  resolvers: myResolvers
});

server.listen(3000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });