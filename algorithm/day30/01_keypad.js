// [카카오 인턴] 키패드 누르기
// 문제 설명
// 스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

// kakao_phone1.png

// 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
// 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

// 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
// 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때,
// 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

// [제한사항]
// numbers 배열의 크기는 1 이상 1,000 이하입니다.
// numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
// hand는 "left" 또는 "right" 입니다.
// "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
// 왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.
// 입출력 예
// numbers	hand	result
// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL"
// 입출력 예에 대한 설명
// 입출력 예 #1

// 순서대로 눌러야 할 번호가 [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]이고, 오른손잡이입니다.

// 왼손 위치	오른손 위치	눌러야 할 숫자	사용한 손	설명
// *	#	1	L	1은 왼손으로 누릅니다.
// 1	#	3	R	3은 오른손으로 누릅니다.
// 1	3	4	L	4는 왼손으로 누릅니다.
// 4	3	5	L	왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.
// 5	3	8	L	왼손 거리는 1, 오른손 거리는 3이므로 왼손으로 8을 누릅니다.
// 8	3	2	R	왼손 거리는 2, 오른손 거리는 1이므로 오른손으로 2를 누릅니다.
// 8	2	1	L	1은 왼손으로 누릅니다.
// 1	2	4	L	4는 왼손으로 누릅니다.
// 4	2	5	R	왼손 거리와 오른손 거리가 1로 같으므로, 오른손으로 5를 누릅니다.
// 4	5	9	R	9는 오른손으로 누릅니다.
// 4	9	5	L	왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.
// 5	9	-	-
// 따라서 "LRLLLRLLRRL"를 return 합니다.

// 입출력 예 #2

// 왼손잡이가 [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]를 순서대로 누르면 사용한 손은 "LRLLRRLLLRR"이 됩니다.

// 입출력 예 #3

// 오른손잡이가 [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]를 순서대로 누르면 사용한 손은 "LLRLLRLLRL"이 됩니다.

function solution(numbers, hand) {
  let answer = '';
  //   let hand_R = [3, 6, 9];
  //   let hand_L = [1, 4, 7];

  //   for (let ele of numbers) {
  //     if (ele === 1 || ele === 4 || ele === 7) {
  //       answer = answer.concat('', 'L');
  //     } else if (ele === 3 || ele === 6 || ele === 9) {
  //       answer = answer.concat('', 'R');
  //     }
  //   }

  return answer;
}

// 멘토님 풀이1
// Reference Code ( for )
const leftNumbers = [1, 4, 7]; // 왼쪽 키패드에 해당되는 숫자
const rightNumbers = [3, 6, 9]; // 오른쪽 키패드에 해당되는 숫자
function solution(numbers, hand) {
  let answer = '';
  // 현재 손가락의 위치를 저장
  const current = {
    left: 10, // 위치값
    right: 12,
  };
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    // 왼쪽 키패드에 해당되는지
    if (leftNumbers.includes(numbers[i])) {
      // 누를 번호가 키패드에 해당되는 경우( = 왼쪽 손가락으로 누를 경우)
      answer += 'L';
      current['left'] = numbers[i]; // 왼쪽 손가락 위치를 변경
    } else if (rigthNumbers.includes(numbers[i])) {
      // 누를 번호가 오른쪽 키패드에 해당되는 경우( = 오른쪽 손가락으로 누를 경우)
      answer += 'R';
      current['right'] = numbers[i]; // 오른쪽 손가락 위치를 변경
    } else {
      // 가운데 번호를 누를 때
      const locationObj = { ...current }; // 왼쪽과 오른쪽의 위치 차이를 저장
      for (let hand in locationObj) {
        // console.log(locationObj[hand], hand, numbers[i]);
        // 0번을 눌렀을 때의 예외 처리 = 0번은 11 위치값으로 처리한다
        numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
        // 왼쪽과 오른쪽의 엄지손가락으로 부터 거리값을 구해온다
        let location = Math.abs(numbers[i] - locationObj[hand]);
        // 상하로 이동이 가능하다
        if (location >= 3) {
          location = Math.trunc(location / 3) + (location % 3); // trunc 소수점 제거
        }
        location[hand] = location;
      }
      console.log(number[i], location, hand, locationObj[hand]);
      if (locationObj['left'] === locationObj['right']) {
        //왼쪽 손가락의 위치와 오른쪽 손가락의 위치가 동일할 경우
        // 주로 사용하는 손가락을 이용해 누른다
        answer += hand === 'left' ? 'L' : 'R';
        current[hand] = numbers[i];
      } else {
        if (locationObj['left'] > locationObj['right']) {
          // 오른쪽 손가락이 더 가까운 경우
          answer += 'R';
          current['rigth'] = numbers[i];
        } else {
          // 왼쪽 손가락이 더 가까운 경우
          answer += 'L';
          current['left'] = numbers[i];
        }
      }
    }
  }
  return answer;
}

// 멘토님 풀이2 (reduce메서드, 비구조할당 사용)
// Reference Code ( reduce )
const [leftNumbers, rigthNumbers] = [
  [1, 4, 7],
  [3, 6, 9],
]; // 비구조화 할당

function solution(numbers, hand) {
  // 현재 손가락의 위치를 저장
  const current = {
    left: 10, // 위치값
    right: 12,
  };
  const answer = numbers.reduce((acc, cur) => {
    let [useFinger, target, number] = ['', '', 0];
    if (leftNumbers.includes(cur)) {
      [useFinger, target, number] = ['L', 'left', cur];
    } else if (rigthNumbers.includes(cur)) {
      [useFinger, target, number] = ['R', 'rigt', cur];
    } else {
      const fingers = Object.entries(current) // 배열 만들어주기
        .reduce((acc2, cur2) => {
          const targetHand = cur2[0];
          cur = cur === 0 ? 11 : cur;
          let location = Math.abs(sur - sur2[1]);
          // === >=3
          if (location > 2) {
            location = Math.trunc(location / 3) + (locations % 3);
          }
          acc2[targetHand] = location;
          return acc2;
        }, {});
      if (fingers['left'] === finger['right']) {
        [useFinger, target, number] = [
          hand === 'left' ? 'L' : 'R',
          hand === 'left' ? hand : 'right',
          cur,
        ];
      } else if (fingers['left'] > fingers['right']) {
        [useFinger, target, number] = ['R', 'right', cur];
      } else {
        [useFinger, target, number] = ['L', 'left', cur];
      }
    }
    current[target] = number;
    return acc + useFinger;
  }, '');
  return answer;
}
