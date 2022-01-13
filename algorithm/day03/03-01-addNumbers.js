// 023. 숫자 더하기
// 입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.
// num은 1이상의 자연수가 들어옵니다.
// 만약 num이 5라면 1 + 2 + 3 + 4 + 5를 모두 더한 값을 출력시켜주세요.

function sum(num) {
	let count = 0;
  
  for(let i = 1; i < num+1; i++) {
    count += i;
  }
  
  return count;
}

// sum(5); // 15
// sum(3); // 6


// Reference Code

// function sum(num) {
// 	let count = 0;
// 								 // i++
// 	for( let i = 1; i <= num; i = i + 1 ) {
// 		count = count + i;
//   }
// }