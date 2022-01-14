// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from 'apollo-server';
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';


// The GraphQL schema
const myTypeDefs = gql`
  type BoardReturn {
    number:Int
    writer: String
    title: String
    contents: String
  }

  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  input CreateTokenOfPhoneInput {
    phone: String
  }

  type Query {
    # fetchBoards: BoardReturn => 객체 1개를 의미 , 샾이 주석
    fetchBoards: [BoardReturn] # => 주석 배열 안에 객체 1개 이상
  }

  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String
    createBoard(createBoardInput: CreateBoardInput!): String #느낌표 붙으면 강제화
    
    createTokenOfPhone(myphone: String!): String
    # createTokenOfPhone(createTokenOfPhoneInput: CreateTokenOfPhoneInput!): String
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
    },

    createTokenOfPhone: (_, args) => {

      const myPhone = args.myphone;

      // 1. 휴대폰번호 자릿수 맞는지 확인하기
      const isValid = checkValidationPhone(myphone);

      if(isValid === true) { //if(isValid) { true 생략 가능
          // 2. 휴대폰 토큰 6자기 만들기
          const mytoken =  getToken(4);
      
          // 3. 핸드폰 번호에 토큰 전송하기
          sendTokenToSMS(myphone, mytoken);
      }

      return "인증완료닷!!!!";
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