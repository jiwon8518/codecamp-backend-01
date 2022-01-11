const apple = 3;
const banana = 2;

//console.log("철수는 사과를 " + apple + "개, 바나나를 " + banana + " 개를 가지고 있습니다");
console.log(`철수는 사과를 ${apple} 개, 바나나를 ${banana} 개를 가지고 있습니다`); // 탬플릿 리터럴

function getWelcomeTemplate({ name, age, school }) { // myuser 를 분해해서 받음
    // createAt 날짜 생성
    const createAt = "2010-09-07";
    
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
                `;
}
            
const myuser = { // 객체로 묶어서 통째로 넘기고 받으면 안전함
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
    email: "a@a.com"
}
            
getWelcomeTemplate(myuser);