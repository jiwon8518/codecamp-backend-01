const apple = 3;
const banana = 2;

//console.log("철수는 사과를 " + apple + "개, 바나나를 " + banana + " 개를 가지고 있습니다");
console.log(`철수는 사과를 ${apple} 개, 바나나를 ${banana} 개를 가지고 있습니다`); // 탬플릿 리터럴

function getCreatedAt() {
    // 오늘 날짜
    const aaa = new Date();
    const yyyy = aaa.getFullYear();
    const MM = aaa.getMonth() + 1; // month 는 0부터 시작하기 때문에 +1 해줘야함
    const dd = aaa.getDate(); // getDay 는 요일

    return `${yyyy}-${MM}-${dd}`
    
}

function getWelcomeTemplate({ name, age, school }) { // myuser 를 분해해서 받음


    // createAt 날짜 생성
    const createAt = getCreatedAt();
    
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