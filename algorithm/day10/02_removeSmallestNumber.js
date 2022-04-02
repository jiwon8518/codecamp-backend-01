// https://programmers.co.kr/learn/courses/30/lessons/12935

// 제일 작은 수 제거하기
// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
// 입출력 예
// arr	return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]

// Reference Code ( for 반복문 )
// for문
function solution(arr) {
  const answer = [];

  let min = arr[0];
  // 제일 작은 수 찾기
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);

    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min);

  // 제일 작은 수를 제외한 데이터를 배열에 추가
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }

  console.log(answer);

  // 빈 배열인지를 체크해서
  // 빈 배열이라면 -1 이 담긴 배열을 리턴
  // 아니라면 2번째 과정에서 받아온 배열을 그냥 리턴
  return answer.length === 0 ? [-1] : answer;
}

// Math.min
// 1. 들어오는 인자 중에서 가장 작은 수를 찾아준다.
Math.min(6, 4, 10, 22, 1);
Math.min(...[1, 2, 3, 4]); // 스프레드연산자를 이요해서 배열을 복사해서   사용 가능

// Reference Code ( filter )
// 메서드
function solution(arr) {
  // 1. 제일 작은 수 찾기
  const min = Math.min(...arr);
  console.log(min);

  // 2. 제일 작은 수를 제외한 데이터를 배열에 추가
  const answer = arr.filter((num) => {
    console.log(num, min);
    return num !== min;
  });
  console.log(answer);

  return answer.length === 0
    ? [-1] // 빈 배열 일 경우
    : answer; // 데이터가 있는 경우
}

let arr = [4, 3, 2, 1];
solution(arr);
