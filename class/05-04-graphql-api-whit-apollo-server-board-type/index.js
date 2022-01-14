// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from 'apollo-server';


// The GraphQL schema
const myTypeDefs = gql`
  type BoardReturn {
    number:Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    # fetchBoards: BoardReturn => 객체 1개를 의미 , 샾이 주석
    fetchBoards: [BoardReturn] # => 주석 배열 안에 객체 1개 이상
  }

  type Mutation {
    createBoard(writer: String, title: String, contents: String): String
  }
`;

// A map of functions which return data for the schema.
const myResolvers = {
  Query: {
    fetchBoards: (_, args) => {
      // 데이터베이스에서 데이터를 꺼내오는 로직
      
      return [
        { number: 1, writer: "둘리", title: "제목입니당", contents: "내용입니다~~" },
        { number: 2, writer: "또치", title: "제목입니당!", contents: "내용입니다~!" },
        { number: 3, writer: "희동이", title: "제목입니당!!", contents: "내용입니다~!!" },
        { number: 4, writer: "마이콜", title: "제목입니당!!", contents: "내용입니다~!!!" }
      ]
    }
  },

  Mutation: {
    createBoard: (_, args) => {
      // 데이터베이스에 데이터를 저장하는 로직
      console.log(args);

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