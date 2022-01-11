import { getCreatedAt } from './utils.js';

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
export function getWelcomeTemplate({ name, age, school }) { // myuser 를 분해해서 받음

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
                <div>나이: ${age}살</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createAt}</div>
            </body>
        </html>
    `
}

export function sendTemplateToEmail(email, mytemplate) {

    console.log(email + " 이메일로 " + mytemplate + " 를 전송합니다!");
}