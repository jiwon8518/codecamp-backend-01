// [1차] 다트 게임
// 문제 설명
// 다트 게임
// 카카오톡에 뜬 네 번째 별! 심심할 땐? 카카오톡 게임별~

// Game Star

// 카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
// 갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.

// 다트 게임은 총 3번의 기회로 구성된다.
// 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
// 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
// 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
// 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
// Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
// 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

// 입력 형식
// "점수|보너스|[옵션]"으로 이루어진 문자열 3세트.
// 예) 1S2D*3T

// 점수는 0에서 10 사이의 정수이다.
// 보너스는 S, D, T 중 하나이다.
// 옵선은 *이나 # 중 하나이며, 없을 수도 있다.
// 출력 형식
// 3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다.
// 예) 37

// 입출력 예제
// 예제	dartResult	answer	설명
// 1	1S2D*3T	37	11 * 2 + 22 * 2 + 33
// 2	1D2S#10S	9	12 + 21 * (-1) + 101
// 3	1D2S0T	3	12 + 21 + 03
// 4	1S*2T*3S	23	11 * 2 * 2 + 23 * 2 + 31
// 5	1D#2S*3S	5	12 * (-1) * 2 + 21 * 2 + 31
// 6	1T2D3D#	-4	13 + 22 + 32 * (-1)
// 7	1D2S3T*	59	12 + 21 * 2 + 33 * 2

// 멘토님 풀이
function solution(dartResult) {
  const answer = [];
  const bonus = ['S', 'D', 'T']; // 보너스를 잡아내기 위해서 배열에 저장
  const option = ['*', '#']; // 옵션을 잡아내기 위해서 배열에 저장

  let score = ''; // 점수를 저장하기 위해 사용하는 변수
  for (let i = 0; i < dartResult.length; i++) {
    if (isNaN(dartResult[i]) === false) {
      // 숫자 타입으로 변환한 데이터가 NaN 값이 아닌 경우 (= 숫자가 맞는 경우)
      score += dartResult[i];
    } else {
      // 숫자 타입으로 변환하 데이터가 NaN 값인 경우 (= 숫자가 아닌 경우)
      // 보너스 : S, D, T
      if (bonus.includes(dartResult[i])) {
        console.log(dartResult[i]);
        score = Number(score); //점수를 숫자 타입으로 변경
        if (dartResult[i] === 'D') {
          // 2제곱
          score = Math.pow(score, 2); //   score = score ** 2;
        } else if (dartResult[i] === 'T') {
          // 3제곱
          score = Math.pow(score, 3); //   score = score ** 3;
        }
      }
      //   console.log(score);
      if (score !== '') {
        answer.push(score);
      }
      score = '';

      // 옵션이 있는 경우
      if (option.includes(dartResult[i])) {
        // console.log(dartResult[i]);
        if (dartResult[i] === '#') {
          // 아차상인 경우, 해당 점수 -1 을 곱해준다
          answer[answer.length - 1] *= -1;
        } else {
          // 스타상인 경우, 해당 점수에 2를 곱해준다
          answer[answer.length - 1] *= 2;
          if (answer.length > 1) {
            // 앞에 점수가 있으므로, 앞의 점수도 2를 곱해준다
            answer[answer.length - 2] *= 2;
          }
        }
      }
    }
  }
  //   console.log(answer);
  let sum = 0;
  for (let i = 0; i < answer.length; i++) {
    sum += answer[i];
  }
  return answer;
}

// 멘토님 풀이2
const bonus = ['S', 'D', 'T']; // 보너스를 잡아내기 위해서 배열에 저장

function solution(dartResult) {
  let score = ''; // 문자열에 있는 점수 데이터만 저장
  let currentValue = 0; // 현재 턴의 점수를 저장
  let last = false; // 점수를 합산할 시점을 찾음

  const answer = dartResult
    .split('')
    .reduce((acc, cur, i) => {
      if (isNaN(cur) === false) {
        // 점수
        score += cur;
        last = false; // 새 턴이 시작됐음을 알려준다.
      } else if (bonus.includes(cur)) {
        // 보너스
        score = Number(score);
        const squared = bonus.indexOf(cur) + 1; // S : 1, D : 2, T : 3

        currentValue = score ** squared;
        score = '';

        if (isNaN(dartResult[i + 1]) === false || i + 1 === dartResult.length) {
          last = true; // 현재 턴이 종료가 됐다.
        }
      } else {
        // 옵션
        last = true;
        if (cur === '*') {
          // 스타상
          currentValue *= 2;

          if (acc.length > 0) {
            acc[acc.length - 1] *= 2;
          }
        } else {
          // 아차상
          currentValue *= -1;
        }
      }

      if (last) {
        acc.push(currentValue);
      }
      return acc;
    }, [])
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  return answer;
}
