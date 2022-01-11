const apple = 3;
const banana = 2;

//console.log("철수는 사과를 " + apple + "개, 바나나를 " + banana + " 개를 가지고 있습니다");
console.log(`철수는 사과를 ${apple} 개, 바나나를 ${banana} 개를 가지고 있습니다`); // 탬플릿 리터럴

function getWelcomeTemplate(user) { // ${변수명} ex)user 변수명의 이름일뿐
    // createAt 날짜 생성
    const createAt = "2010-09-07";
    
    return `
        <html>
        <body>
        <h1>${user.name}님 가입을 환영합니다!!</h1>
                <hr />
                <div>이름: ${user.name}</div>
                <div>나이: ${user.age}살</div>
                <div>학교: ${user.school}</div>
                <div>가입일: ${createAt}</div>
                </body>
                </html>
                `;
}
            
const myuser = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교"
}
            
getWelcomeTemplate(myuser);