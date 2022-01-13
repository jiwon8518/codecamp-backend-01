// 026. 홀수 문자열
// num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.
// num이 5일 경우에는 "135"입니다.
// - for을 이용해서 문제를 풀어야 합니다.
// - 짝수를 제외하는 조건을 추가해야 합니다.

function makeOdd(num) {
	let str = '';

  for(let i = 1; i < num+1; i++) {
    if(i%2 === 0){
      continue;
    }
    str += String(i);
  }
  
  return str;
}

// makeOdd(5) // 135
// makeOdd(7) // 1357


// Reference Code

// function makeOdd(num) {
// 	let str = '';
// 												 // i++
// 	for( let i = 1; i <= num; i = i + 1 ) {
// 		if( i % 2 === 1 ) {
// 			str = str + i
//     }
// 	}
// }