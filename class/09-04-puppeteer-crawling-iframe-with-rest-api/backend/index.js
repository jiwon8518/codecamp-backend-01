import express from 'express';
import mongoose from 'mongoose';
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';
// import * as aaa from './phone.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import { checkEmail, getWelcomeTemplate, sendTemplateToEmail} from './email.js';
import dotenv from 'dotenv';
import { Board } from './models/board.model.js';
import { Stock } from './models/stock.model.js';
dotenv.config();



//const express = require('express');
// const swaggerDocument = require('./swagger.json');
// const swaggerSpec = swaggerJSDoc(options);

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.get('/boards', async function (req, res) {
// 데이터를 조회하는 로직 => DB 에서 꺼내옴

  const result = await Board.find({ writer:"철수" })
  console.log(result);

  // res.send('조회에 성공하였습니다')
  res.send([
    { number: 1, writer: '철수', title: '제목입니다', contents: "내용입니다"},
    { number: 2, writer: '영희', title: '제목입니다!', contents: "내용입니다!"},
    { number: 3, writer: '훈이', title: '제목입니다~', contents: "내용입니다~"},
  ])
})




app.post('/boards', async function (req, res) {
// 데이터를 등록하는 로직 => DB 에다 저장함

  const myaddress = req.body.mycontents.split(" ").filter( (el) => el.include("http")); // map(), forEach(), filter() 메서드로 사용가능
      // filter 로 요소 순회하면서 http 가 들어간 요소 찾아라

      const html = await axios.get(myaddress[0]); // myaddress 의 0번째
      const $ = cheerio.load(html.data); // cheerio 로 불러오기
      $("meta").each( (_, el) => {  // cheerio의 내장함수인 each()

          // if문 방법1
          // if($(el).attr('property')){
          //     const key = $(el).attr('property').split(":")[1] // og:title
          //     console.log(key);
          // }

          // 방법2
          const key = $(el).attr('property')?.split(":")[1] // og:title ? 앞에 조건이 해당되면 있으면 실행 없으면 실행X
          
          // Key 가 있을떄만 실행해줘
          if(key) {
              const value = $(el).attr("content");
              console.log(key, value);
          }
          



      }) 
      // console.log(html);

  //console.log(req.body);
  console.log("안녕하세용ㅇㅇ2555555555666666");

  const board = new Board ({
    writer: req.body.mywriter,
    title: req.body.mytitle,
    contents: req.body.mycontents,
    // pretitle: ,
    // precontents: ,
    // preimage: ,
    // preurl:

  });
    
  await board.save();


  res.send('등록에 성공하였습니다.');
})



app.post('/tokens/phone', function (req, res) {

  const myphone = req.body.myphone;

  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone);

  if(isValid === true) { //if(isValid) { true 생략 가능
      // 2. 휴대폰 토큰 6자기 만들기
      const mytoken =  getToken(4);
  
      // 3. 핸드폰 번호에 토큰 전송하기
      sendTokenToSMS(myphone, mytoken);
      res.send('인증완료!!');
  }
})

app.post("/users", function (req, res) { // 미들워어함수
  const user = req.body.user;

  const isValid = checkEmail(user); //user.email
  //const isValid = checkEmail(user.email); //user.email
  // 1. email 이 정상인지 확인(1-존재여부, 2-@포함여부)
  if(isValid === true) {

    // 2. 가입환영 탬플릿 만들기
    const mytemplate = getWelcomeTemplate(user);

    // 3. 이메일에 가입환영 탬플릿 전송하기(콘솔로 나오게 한줄의 메세지 정도 추가)
    sendTemplateToEmail( user.email, mytemplate);

}
});


app.get("/stocks", async function (req, res) { // stocks 에서 찾아서 res 에서 돌려줌
  
  const stocks = await Stock.find();

  res.send(stocks);
})


// 몽고 DB 에 접속
mongoose.connect("mongodb://my_database:27017/codecamp"); // my_database 네임 리졸루션


// espress 서버 오픈(listen)
app.listen(3001)