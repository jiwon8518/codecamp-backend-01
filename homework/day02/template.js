// 로직
// 회원가입을 축하하는 형태의 템플릿을 출력하는 함수를 만들어 주세요.
// 이메일, 주민번호, 휴대폰번호, 내가 좋아하는 사이트를 함수의 입력으로 받고,
// 해당 내용이 템플릿에 포함되어 콘솔에 출력되어야합니다.

import { checkEmail, checkRegistrationNumber, checkPhoneNumber, checkSite, celebrationTemplate, sendTemplateToConsole } from './signup.js'; 

function createUser(user) {

    // 1. email이 정상인지 확인(1-존재여부, 2-@포함여부)
    // 2. 주민번호 확인(앞6 뒤7 자리)
    // 3. 휴대폰번호 앞3 중4 뒤4 자리 확인
    // 4. 사이트 유효성 검사
    const isValidEmail = checkEmail(user);
    const isValidegistrationNumber = checkRegistrationNumber(user);
    const isValidPhoneNumber = checkPhoneNumber(user);
    const isValidSite = checkSite(user);

    if (isValidEmail === true && isValidegistrationNumber === true && isValidPhoneNumber === true && isValidSite === true) {
        // 5. 축하 탬플릿
        const signupTemplate = celebrationTemplate(user);

        sendTemplateToConsole(signupTemplate);
    }

}

const userInfo = {
    name: "둘리",
    email: "둘리@naver.com",
    registrationNumber : "920324-1038293",
    phone: "010-5555-6666",
    favoriteSite: "www.google.co.kr"
}

// API 실행
createUser(userInfo);