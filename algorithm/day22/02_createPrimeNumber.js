// 소수 만들기
// 문제 설명
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때,
// nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때
// 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
// nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
// 입출력 예
// nums	result
// [1,2,3,4]	1
// [1,2,7,6,4]	4
// 입출력 예 설명
// 입출력 예 #1
// [1,2,4]를 이용해서 7을 만들 수 있습니다.

// 입출력 예 #2
// [1,2,4]를 이용해서 7을 만들 수 있습니다.
// [1,4,6]을 이용해서 11을 만들 수 있습니다.
// [2,4,7]을 이용해서 13을 만들 수 있습니다.
// [4,6,7]을 이용해서 17을 만들 수 있습니다.

function solution(nums) {
  var answer = -1;

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log('Hello Javascript');

  return answer;
}

// 멘토님 풀이
function solution(nums) {
  var answer = -1;

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log('Hello Javascript');

  return answer;
}

// Reference Code ( for )
function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let l = i + 1; l < nums.length; l++) {
      for (let j = l + 1; j < nums.length; j++) {
        const sum = nums[i] + nums[l] + nums[j];

        let count = 0;
        for (let o = 1; o <= sum; o++) {
          if (sum % o === 0) {
            // 약수를 구해온다.
            count++;

            if (count > 2) {
              break;
            }
          }
        }
        if (count === 2) {
          answer++;
        }
      }
    }
  }
  return answer;
}

// Reference Code ( forEach + for )
function solution(nums) {
  let answer = 0;
  let index = 0;

  // 첫번째 i 가 0 이라면
  nums.forEach((num1, i) => {
    index = i + 1; // i 가 1 부터
    nums.slice(index).forEach((num2) => {
      index += 1; // i 가 2 부터
      nums.slice(index).forEach((num3) => {
        const sum = num1 + num2 + num3;

        let count = 0;
        if (sum % 2 === 1) {
          // 홀수일 때만
          for (let o = 1; o <= sum; o++) {
            if (sum % o === 0) {
              count++;

              if (count > 2) {
                break;
              }
            }
          }
          if (count === 2) {
            answer++;
          }
        }
      });
    });
  });
  return answer;
}
