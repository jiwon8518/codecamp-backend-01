//================ 피보나치 수 ================//
// 문제 설명
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

// 예를들어

// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5
// 와 같이 이어집니다.

// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

// 제한 사항
// n은 2 이상 100,000 이하인 자연수입니다.
// 입출력 예
// n	return
// 3	2
// 5	5
// 입출력 예 설명
// 피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, ... 와 같이 이어집니다.

// 멘토님 풀이1
// 0, 1, 1, 2, 3, 5, 8, 13 ...
function solution(n) {
  let prev = 0; // F(0) 0번째의 피보나치 숫자
  let next = 1; // F(1) 1번째의 피보나치 숫자
  let sum = 1; // F(0) + F(1) 숫자

  const answer = [];
  for (let i = 2; i <= n; i++) {
    console.log(i);
    sum = (prev + next) % 1234567;
    prev = next; // n-1 값을 할당
    next = sum; // 이전 피보나치의 수의 값
    //f(3): F(2) + F(1) // n-2
    //f(2): F(1) + F(0) // n-1 +F(0)
    console.log(i, next, prev);
    answer.push(sum);
  }

  return answer[n - 2];
  // 마지막에 나누는게 아니라 숫자의 합마다 나누는 이유
}
// 숫자 타입 = number, 이지만 컴퓨터 공학적으로는 Int 타입
//   정해진 범위 안에서만 제대로 작동함
//   2 ** 53 -1 값 까지가 정해진 범위안
a = 2 ** 53 - 1;
Number.isSafeInteger(a); // true
Number.isSafeInteger(a + 1); //false

// 메서드 풀이2 reduce()

function solution(n) {
  let prev = 0; // F(0) 0번째의 피보나치 수의 결과
  let next = 1; // F(1) 1번째의 피보나치 수의 결과
  let sum = prev + next; // F(0) + F(1) 숫자, 0 + 1 = 1;

  const answer = new Array(n - 1)
    .fill(1) //
    .reduce((acc) => {
      //   console.log(acc);
      sum = (prev + acc) % 1234567;
      prev = acc; //  n-1 값 할당
      next = sum; // 이전 피보나치의 수의 값
      return sum;
    }, sum);
  console.log(answer);
  return answer;
}

// 노션 풀이
function solution(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    let sum = (arr[i - 2] + arr[i - 1]) % 1234567;
    // prev : 현재 피보나치 수의 2칸 앞에 있는 데이터
    let prev = arr[i - 1];
    // next : 현재 피보나치 수의 1칸 앞에 있는 데이터
    let next = sum;

    arr.push(sum);
  }
  return arr[n];
}
