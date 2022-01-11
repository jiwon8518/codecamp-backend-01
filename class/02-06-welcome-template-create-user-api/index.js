import { checkEmail, getWelcomeTemplate, sendTemplateToEmail} from './email.js'

function createUser(user) {

    const isValid = checkEmail(user);
    // 1. email 이 정상인지 확인(1-존재여부, 2-@포함여부)
    if(isValid === true) {

        // 2. 가입환영 탬플릿 만들기
        const mytemplate = getWelcomeTemplate(user);

        // 3. 이메일에 가입환영 탬플릿 전송하기(콘솔로 나오게 한줄의 메세지 정도 추가)
        sendTemplateToEmail( user.email, mytemplate);

    }

}

const myuser = { // 객체로 묶어서 통째로 넘기고 받으면 안전함
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
    email: "AAA@a.com"
}

// API 실행
createUser(myuser);