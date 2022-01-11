
// 1. email이 정상인지 확인(1-존재여부, 2-@포함여부)
export function checkEmail(user) {
    const length = user.email.length;
    const chkIncludes = user.email.includes("@");

    if(length >= 1 && chkIncludes === true) {
        return true
    } else {
        console.log("이메일 형식을 확인해주세요");
        return false
    }
}
// 2. 주민번호 확인(앞6 뒤7 자리)
export function checkRegistrationNumber(user) {
    const numberSplit = user.registrationNumber.split("-");
      
    // 3. 앞6 뒤7 아닐 경우 에러 "에러발생!!! 갯수를 제대로 입력해주세요!!!"
    if(numberSplit[0].length === 6 && numberSplit[1].length === 7) {
        return true
           
    } else if(numberSplit[0].length !== 6 || numberSplit[1].length !== 7){
        console.log("에러발생!!! 주민번호 갯수를 제대로 입력해주세요!!!");
        return false
           
    } else if(number.includes("-") === false) {
        console.log("에러발생!!! 주민번호이 올바르지 않습니다!!!");
        return false
    }
}

// 3. 휴대폰번호 앞3 중4 뒤4 자리 확인
export function checkPhoneNumber(user) {
    const phoneSplit = user.phone.split("-");
    //   console.log(phoneSplit);

    // 3. 앞6 뒤7 아닐 경우 에러 "에러발생!!! 갯수를 제대로 입력해주세요!!!"
    if(phoneSplit[0].length === 3 && phoneSplit[1].length === 4 && phoneSplit[2].length === 4) {
        return true
           
    } else if(phoneSplit[0].length !== 3 || phoneSplit[1].length !== 4 || phoneSplit[2].length !== 4){
        console.log("에러발생!!! 휴대폰번호 갯수를 제대로 입력해주세요!!!");
        return false
        
    } else if(number.includes("-") === false) {
        console.log("에러발생!!! 휴대폰번호 형식이 올바르지 않습니다!!!");
        return false
    }
}

// 4. 사이트 유효성 검사
export function checkSite(user) {
    //console.log(user.favoriteSite.includes("www"));
    const site = user.favoriteSite;
    if(site === undefined || !site.includes("www")) {
        console.log("에러발생!! 사이트 주소를 제대로 입력해주세요");
        return false
    } else {
        return true
    }
}


// 5. 축하 탬플릿 html
export function celebrationTemplate({ name, email, registrationNumber, phone, favoriteSite }) {
    return `
        <html>
            <body>
            <h1>${name}님 회원가입을 축하합니다!!</h1>
            <div>이름: ${name}</div>
            <div>이메일: ${email}</div>
            <div>주민등록번호: ${registrationNumber}</div>
            <div>핸드폰: ${phone}</div>
            <div>내가 좋아하는 사이트: ${favoriteSite}</div>
            </body>
        </html>
    
    `;
}

// 6. 축하 탬플릿 콘솔창 띄우기
export function sendTemplateToConsole(signupTemplate) {
    console.log(signupTemplate);
}