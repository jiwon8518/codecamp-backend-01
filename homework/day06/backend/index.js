import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';
import { checkEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js';
import { options } from './swagger/config.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
// const swaggerSpec = swaggerJSDoc(options);

app.use(express.json());
app.use(cors()); // 모든 주소 허용
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));


// 회원 목록 조회 API 만들기
app.get('/users', function (req, res) {

    res.send([
        { email: "aaa@naver.com",
          name: "둘리", 
          phone: "01055556666", 
          personal: "861023-5698741", 
          perfer: "https://naver.com"
        },
        { email: "bbb@naver.com",
          name: "또치",
          phone: "01044447777",
          personal: "880927-3256987",
          perfer: "https://github.com/"
        },
        { email: "ccc@naver.com",
          name: "마이콜",
          phone: "01088889999",
          personal: "980505-1258963",
          perfer: "https://www.google.co.kr/"
        },
        { email: "ddd@naver.com",
          name: "희동이",
          phone: "01022223333",
          personal: "180825-8745966",
          perfer: "https://daum.net"
        },
        { email: "fff@naver.com",
          name: "고길동",
          phone: "01058586464",
          personal: "200125-4545698",
          perfer: "https://nate.com"
        }
    ])

  //res.send(req.body); // 응답 보내기
})

// 커피목록 조회 API 만들기
app.get('/5', function (req, res) {

    res.send([
        { name: '아메리카노', kcal: 100 },
        { name: '카페라떼', kcal: 150 },
        { name: '카푸치노', kcal: 370 },
        { name: '카라멜마키아또', kcal: 520 },
        { name: '카페모카', kcal: 550 },
        { name: '에스프레소', kcal: 5 },
        { name: '비엔나', kcal: 5 },
        { name: '연유라떼', kcal: 374 },
        { name: '디카페인', kcal: 50 },
        { name: '바닐라라떼', kcal: 440 }
    ])

  //res.send(req.body); // 응답 보내기
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
  console.log(isValid);
})

app.post('/users', function (req, res) {
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

app.listen(3001); // 3001번 포트에서 실행