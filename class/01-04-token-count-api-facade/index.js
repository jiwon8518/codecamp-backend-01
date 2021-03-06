console.log("안녕하세요~");

function checkValidationPhone(myphone) {

    if(myphone.length !== 10 && myphone.length !== 11) {
        console.log("에러발생!! 핸드폰 번호를 제대로 입력해주세요!!");
        return false
    } else {
        return true
    }
}

function getToken(mycount) {

    if(mycount === undefined) {
        console.log("에러발생!!! 갯수를 제대로 입력해주세요!!");
        return
    } else if(mycount <= 0) {
        console.log("에러 발생!! 갯수가 너무 적습니다!!");
        return
    } else if(mycount > 10) {
        console.log("에러발생!! 갯수가 너무 많습니다!!");
        return
    }
    
    const result = String(Math.floor( Math.random() * 10**mycount )).padStart(mycount, "0");
    return result;
}

function sendTokenToSMS(fff, ggg) {

    console.log(fff + " 번호로 인증번호 " + ggg + " 를 전송합니다!!");
}

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
