import { getCreatedAt } from './utils.js';
import axios from 'axios';

// 1. email 이 정상인지 확인(1-존재여부, 2-@포함여부)
export function checkEmail(user) {
    const length = user.email.length;
    const chkIncludes = user.email.includes("@");
    //console.log(user.email.length);
    //console.log(user.email.includes("@"));
    if(length >= 1 && chkIncludes === true) {
        return true
    } else {
        console.log("이메일 형식을 확인해주세요");
        return false
    }
    
}

// 2. 가입환영 탬플릿 만들기
export function getWelcomeTemplate({ name, phone, site }) { // myuser 를 분해해서 받음

    // createAt 날짜 생성
    const createAt = getCreatedAt();
    // console.log(createAt);
    //console.log(name);
    
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>전화번호: ${phone}</div>
                <div>좋아하는 사이트: ${site}</div>
                <div>가입일: ${createAt}</div>
            </body>
        </html>
    `
}

export async function sendTemplateToEmail(email, mytemplate) {
    const appKey = process.env.EMAIL_APP_KEY;
    const XSecretKey = process.env.EMAIL_X_SECRET_KEY;
    const sender = process.env.EMAIL_SENDER;

    console.log('fffff')

    const result = await axios.post(
        `https://api-mail.cloud.toast.com/email/v2.0/appKeys/${appKey}/sender/mail`, // url
        {
            senderAddress: sender,
            title: "안녕하세요 가입을 환영합니다.",
            body: mytemplate,
            receiverList: [
                {
                    receiveMailAddr: email, // 받을사람 이메일 주소
                    receiveType: "MRT0" // MRT0 : 받는사람 , MRT1 : 참조, MRT2 : 숨은참조
                }
            ]
        }, // data
        {
            headers: {
                "X-Secret-Key": XSecretKey,
                "Content-Type": "application/json;charset=UTF-8"
            }
        } // Secret-Key
    );


    console.log(result);


    console.log(email + " 이메일로 " + mytemplate + " 를 전송합니다!");
}