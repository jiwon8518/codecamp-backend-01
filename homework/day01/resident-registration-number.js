// 로직
// 1. '-' 유무 확인
// 2. '-' 앞 뒤로 숫자 자르기
// 3. 앞6 뒤7 아닐 경우 에러 "에러발생!!! 갯수를 제대로 입력해주세요!!!"
// 4. 뒤 7자리 중 끝에서 6는 *로 변경

// 함수 불러오기
import { checkDash, maskingNumber } from './masking-number.js';

function residentRegistrationNumber(number) {

    const isDash = checkDash(number);
        //console.log(isDash);
    
    if(isDash === true) {
        maskingNumber(number);
    }
}
    
    
    

// 주민번호 API
residentRegistrationNumber("920324-1038293");