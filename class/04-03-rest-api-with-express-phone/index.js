import express from 'express';
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';
// import * as aaa from './phone.js';


const app = express()
app.use(express.json())

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

  res.send('등록에 성공하였습니다.')
})



app.post('/tokens/phone', function (req, res) {

  const myphone = req.body.myphone

  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone);

  if(isValid === true) { //if(isValid) { true 생략 가능
      // 2. 휴대폰 토큰 6자기 만들기
      const mytoken =  getToken(4);
  
      // 3. 핸드폰 번호에 토큰 전송하기
      sendTokenToSMS(myphone, mytoken);
      res.send('인증완료!!')
  }
})

app.listen(3002)