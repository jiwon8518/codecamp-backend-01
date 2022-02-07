//-- 최대공약수와 최소공배수 --//
// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.

// 입출력 예
// n	m	return
// 3	12	[3, 12]
// 2	5	[1, 10]

// 입출력 예 설명
// 입출력 예 #1
// 위의 설명과 같습니다.
// 입출력 예 #2
// 자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.


function solution(n, m) {
  let answer = [];
  let gcd = 1;
  let lcm = 1;

  for( let i = 2; i <= Math.min(n, m); i++ ){
    if(n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }
  console.log(`최대공약수 ${gcd}`);
  
  while(true){
    if((lcm % n == 0) & (lcm % m ==0)){
      break;
    }
    lcm++ ;
  }
  
  console.log(`최대공약수 ${gcd}, 최소공배수 ${lcm}`)
  console.log(answer.push(gcd));
  lcm = answer.push(lcm);
  console.log("answer "+ answer);
 // return answer.push(gcd)+answer.push(lcm);
  return answer;
}

let n = 3;
let m = 12;
solution(n, m);


// 멘토님 풀이
function solution(n, m) {
  // 최대공약수 : 두 수의 약수 중에서 (공통되는) 제일 큰 수
  // 최소공배수 : 두 수의 배수 중에서 (공통되는) 제일 작은 수

  // 최대공약수 구하기
  let max = 0; // 제일 큰 값
  for(let i = 1; i <= m; i++) {
    if(n % i === 0 && m % i === 0) {
      console.log(i, n % i, m % i);
      max = i;
    }
  }

  // 최소공배수 구하기
  let min = 0;
  for (let i = m; i <= n * m; i += m) {
    if(n % i === 0 && M % i === 0) {
      console.log(i);
      if(i % n === 0) {
        min = i;
        break;

      }
    }
    console.log(max, min);
    return [max, min];
  }
}

let n = 3;
let m = 12;
solution(n, m);


// 유클리드 호제법(공식) - 최대공약수 최소공배수 구하는 알고리즘
function solution(n, m) {
  // - 최대공약수를 구하기 위한 알고리즘 (공식)

  // a를 b로 나눴을떄 (큰 수를 작은 수로 나눴을 때)
  // 나머지 값이 0이 되면, 작은 수가 최대공약수 된다.
  // 만약에, 0이 되지 않느다면 작은 수가 큰 수가 되고 나머지 값이 작은 수가 된다
  // 다시 나누는 과정을 반복해서 나머지 값이 0 이 나오면, 작은 수가 최대공약수가 된다

  let a = m; // 큰 수
  let b = n; // 작은 수
  let r = 0; //  a를 b로 나눴을 때 나머지 값이 들어온다

  while ( (a % b) > 0) { // a와 b를 나눌때 나머지가 0 보다 클때까지
    r = a % b;
    a = b; // 큰수에 작은 수를 다시 할당
    b = r; // 작은 수에 나머지 값을 할당

  }
  console.log(a, b);

  // 최소 공배수 :  n 과 m 을 곱한 값에 최대공약수를 나눠준 값
  return [ b, (n * m)/b ];

}

