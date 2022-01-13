// 다른 js파일의 함수 불러오기
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';


console.log("안녕하세요~");

// API 만들기
function createTokenOfPhone(myphone) {
    
    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    const isValid = checkValidationPhone(myphone);

    if(isValid === true) { //if(isValid) { true 생략 가능
        // 2. 휴대폰 토큰 6자기 만들기
        const mytoken =  getToken(4);
    
        // 3. 핸드폰 번호에 토큰 전송하기
        sendTokenToSMS(myphone, mytoken);
    }

}

// API 실행하기
createTokenOfPhone("01012345678");
