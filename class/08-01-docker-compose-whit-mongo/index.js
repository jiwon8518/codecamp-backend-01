import express from 'express';
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';
// import * as aaa from './phone.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import { checkEmail, getWelcomeTemplate, sendTemplateToEmail} from './email.js';
import dotenv from 'dotenv';
dotenv.config();



//const express = require('express');
// const swaggerDocument = require('./swagger.json');
// const swaggerSpec = swaggerJSDoc(options);

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.get('/boards', function (req, res) {
// 데이터를 조회하는 로직 => DB 에서 꺼내옴

  // res.send('조회에 성공하였습니다')
  res.send([
    { number: 1, writer: '철수', title: '제목입니다', contents: "내용입니다"},
    { number: 2, writer: '영희', title: '제목입니다!', contents: "내용입니다!"},
    { number: 3, writer: '훈이', title: '제목입니다~', contents: "내용입니다~"},
  ])
})




app.post('/boards', function (req, res) {
// 데이터를 등록하는 로직 => DB 에다 저장함

  console.log(req.body);

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

app.listen(3001)