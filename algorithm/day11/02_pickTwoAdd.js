// https://programmers.co.kr/learn/courses/30/lessons/68644

// 두 개 뽑아서 더하기
// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.
// 입출력 예
// numbers	result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]
// 입출력 예 설명
// 입출력 예 #1

// 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
// 3 = 2 + 1 입니다.
// 4 = 1 + 3 입니다.
// 5 = 1 + 4 = 2 + 3 입니다.
// 6 = 2 + 4 입니다.
// 7 = 3 + 4 입니다.
// 따라서 [2,3,4,5,6,7] 을 return 해야 합니다.
// 입출력 예 #2

// 2 = 0 + 2 입니다.
// 5 = 5 + 0 입니다.
// 7 = 0 + 7 = 5 + 2 입니다.
// 9 = 2 + 7 입니다.
// 12 = 5 + 7 입니다.
// 따라서 [2,5,7,9,12] 를 return 해야 합니다.

// Reference Code ( for )
function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);

    for (let l = i + 1; l < numbers.length; l++) {
      console.log(number[i], number[l]);
      const sum = number[i] + number[l];

      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    }
  }

  console.log(answer);
  return answer.sort((a, b) => a - b); // 오름차순정렬
}

// Reference Code ( for : new Set )
// new Set 사용방법
function solution(numbers) {
  let answer = new Set([]);

  for (let i = 0; i < numbers.length; i++) {
    for (let l = i + 1; l < numbers.length; l++) {
      const sum = number[i] + number[l];

      answer.add(sum);
    }
  }

  console.log(answer);
  return Array.from(answer).sort((a, b) => a - b); // 오름차순정렬
}

// Reference Code ( forEach )
function solution(numbers) {
  const answer = [];

  numbers.forEach((num1, i) => {
    numbers.slice(i + 1, numbers.length).forEach((num2) => {
      const sum = num1 + num2;

      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    });
  });

  return answer.sort((a, b) => a - b);
}

// Reference Code ( forEach : new Set )
function solution(numbers) {
  let answer = new Set([]);

  numbers.forEach((num1, i) => {
    console.log(num, numbers.slice(i + 1, numbers.length));

    numbers.slice(i + 1, numbers.length).forEach((num2) => {
      console.log(num1, num2);
      answer.add(num1 + num2); // 배열로 뽑고 싶다 하면 includes 해서 중복 제거 후 배열에 push 해주면 됨
    });
  });

  console.log(Array.from(answer).sort((a, b) => a - b));
  return Array.from(answer).sort((a, b) => a - b);
}

// 최신 문법
arr = new Set([]);

arr.add(1);
arr.add(2);

arr.length; // 작동안됨
arr.size; // 갯수
arr.has(1); //해당 타입이 있는지 없는지 blooen 타입으로 반환

// new set 을 배열 형태로 반환하는 방법
Array.from(arr); // false 배열의 형태를 가지고 있지만 배열이 아니다

// .isArray() 배열인지 아닌지 검증
Array.isArray(arr);
