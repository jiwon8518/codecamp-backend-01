//로직
// 1. '-' 기준으로 숫자 자르기
// 2. 앞6 뒤7 아닐 경우 에러 "에러발생!!! 갯수를 제대로 입력해주세요!!!"
// 3. 뒤 7자리 중 끝에서 6는 *로 변경

function checkNumber(number) {

    let isValid = true;

    if(number.includes("-") === false) {
        console.log("에러발생!!! 형식이 올바르지 않습니다!!!");

    }

    // const number1 = number.split("-");
    // console.log(number1);
    // console.log(number1[0].length);
    


    // if(number1[0].length === 6 && number1[1].length === 7) {
    //     return true
    // } else {
    //     console.log("에러발생!!! 갯수를 제대로 입력해주세요!!!");
    //     return false
    // }

}

function residentRegistrationNumber(number) {

    // const isNumber = checkNumber(number);
    // console.log(isNumber);
    // if(isNumber === true) {
    //     number.
    // }



}




// 주민번호 API
checkNumber("920324-1038293");