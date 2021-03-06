import axios from 'axios';

export function checkValidationPhone(myphone) {

    if(myphone.length !== 10 && myphone.length !== 11) {
        console.log("에러발생!! 핸드폰 번호를 제대로 입력해주세요!!");
        return false
    } else {
        return true
    }
}

export function getToken(mycount) {

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

export async function sendTokenToSMS(fff, ggg) {
    // 환경변수
    const appKey = process.env.SMS_APP_KEY;
    const XSecretKey = process.env.SMS_X_SECRET_KEY;
    const sender = process.env.SMS_SENDER;


    const result = await axios.post(
        `https://api-sms.cloud.toast.com/sms/v3.0/appKeys/${appKey}/sender/sms`, // url
        {
            body: "안녕하세요 인증번호는 [123456] 입니다.", // 본문내용(문자내용)
            sendNo: sender, // 발신자 번호
            recipientList: [
                {
                    internationalRecipientNo: "01040365685" // 받을사람 핸드폰번호
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


    console.log(result.data.body.data.sendResultList)
    console.log("전송끝!!");


    // console.log(fff + " 번호로 인증번호 " + ggg + " 를 전송합니다!!");
}

