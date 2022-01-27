//-- 내적 --//

// 문제 설명
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 제한사항
// - a, b의 길이는 1 이상 1,000 이하입니다.
// - a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

// 입출력 예
// a	        b	            result
// [1,2,3,4]	[-3,-1,0,2]	    3
// [-1,0,1]	    [1,0,-1]	    -2

// 입출력 예 설명
// 입출력 예 #1
// - a와 b의 내적은 1*(-3) + 2*(-1) + 3*0 + 4*2 = 3 입니다.
// 입출력 예 #2
// - a와 b의 내적은 (-1)*1 + 0*0 + 1*(-1) = -2 입니다.

function solution(a, b) {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }

  console.log("sum: " + sum);
  return sum;
}

let a = [-1, 0, 1];
let b = [1, 0, -1];
solution(a, b);

//-- 멘토님 풀이 --//
function solution(a, b) {
  const answer = a.reduce((cu, el, i) => {
    console.log(cu, el, b[i]);
    return cu + el * b[i];
  }, 0);
  return answer;
}

let a = [-1, 0, 1];
let b = [1, 0, -1];
solution(a, b);


// for문
function solution(a, b) {
    let answer = 0;
    
    for( let i = 0; i < a.length; i++ ) {
        answer += (a[i] * b[i])
    }
    return answer;
}

// map + reduce
function solution(a, b) {
    const answer = a.map( (num, i) => {
        return num * b[i]
    }).reduce( (el, cu) => { return el + cu }, 0)
    
    return answer;
}