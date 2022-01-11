const apple = 3;
const banana = 2;

//console.log("철수는 사과를 " + apple + "개, 바나나를 " + banana + " 개를 가지고 있습니다");
console.log(`철수는 사과를 ${apple} 개, 바나나를 ${banana} 개를 가지고 있습니다`); // 탬플릿 리터럴

function getWelcomeTemplate(name, age, school) { // ${변수명} ex)name, age, school 변수명의 이름일뿐
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
            
            
const myname = "철수";
const myage = 8;
const myschool = "다람쥐초등학교";
            
getWelcomeTemplate(myname, myage, myschool);