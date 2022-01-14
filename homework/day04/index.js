import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';

const app = express();
// const swaggerSpec = swaggerJSDoc(options);

app.use(express.json());
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


app.listen(3001); // 3001번 포트에서 실행