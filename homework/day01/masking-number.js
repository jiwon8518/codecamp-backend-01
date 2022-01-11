// 로직
// 1. '-' 유무 확인
// 2. '-' 앞 뒤로 숫자 자르기
// 3. 앞6 뒤7 아닐 경우 에러 "에러발생!!! 갯수를 제대로 입력해주세요!!!"
// 4. 뒤 7자리 중 끝에서 6는 *로 변경

// 1. '-' 유무 확인
export function checkDash(number) {
    // 2. '-' 앞 뒤로 숫자 자르기
    const numberSplit = number.split("-");
      
    // 3. 앞6 뒤7 아닐 경우 에러 "에러발생!!! 갯수를 제대로 입력해주세요!!!"
    if(numberSplit[0].length === 6 && numberSplit[1].length === 7) {
        // console.log("* 모양으로!!");
        return true
           
    } else if(numberSplit[0].length !== 6 || numberSplit[1].length !== 7){
        console.log("에러발생!!! 갯수를 제대로 입력해주세요!!!");
        return false
           
    } else if(number.includes("-") === false) {
        console.log("에러발생!!! 형식이 올바르지 않습니다!!!");
        return false
    }
}
   
// 4. 뒤 7자리 중 끝에서 6는 *로 변경
export function maskingNumber(number) {
      
    const numberSplit = number.split("-");
    const frontNumber = numberSplit[0];
    const backNumber = numberSplit[1];
    //console.log(backNumber);
    let arr = backNumber.split("");
    //console.log(arr);
    const masking = arr.fill("*", arr.length-6, arr.length);
    //console.log(masking);
    //console.log(masking.join(""));
    const maskingBackNumber = masking.join("");
    const maskingNumber = frontNumber + "-" + maskingBackNumber;
    console.log(maskingNumber);
    
}