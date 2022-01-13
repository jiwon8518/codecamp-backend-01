// 025. 문자열 삽입
// num을 입력받아 1부터 num의 값까지 각각의 숫자 사이에 "-"이 들어간 문자열을 만들어야 합니다. 
// num이 3일 경우에는 "1-2-3"입니다.

function makeNumber(num) {
	let str = '';
  for(let i = 1; i < num+1; i++) {
    str += i + "-";
  }
  str = str.substring(0, str.length - 1); // 인덱스0 ~ str.length-1 까지만 가져오기
  //str = str.replace(/.$/, ''); // /.$/ 마지막 문자열을 가져와서 '' 없애준다
  return str;
}

// makeNumber(5) // 1-2-3-4-5
// makeNumber(7) // 1-2-3-4-5-6-7


// Reference Code

// function makeNumber(num) {
// 	let str = '';
// 								// i++
// 	for( let i = 1; i <= num; i = i + 1 ) {
// 		str = str + i

//     if( i !== num ) {
// 			str = str + '-'
//     }	
// 	}
// }