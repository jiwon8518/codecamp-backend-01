// 최댓값과 최솟값
// 문제 설명
// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과
// 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

// 제한 조건
// s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
// 입출력 예
// s              return
// "1 2 3 4"      "1 4"
// "-1 -2 -3 -4"	"-4 -1"
// "-1 -1"	      "-1 -1"

function solution(s) {
  let arr = [];
  let split = s.split(' ');

  for (let ele of split) {
    let num = Number(ele);
    arr.push(num);
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let answer = min.concat(' ', max);
  return answer;
}

let s = '-1 -2 -3 -4';
solution(s);

// // 다른사람 풀이1
// // max 도 문자열에서 가능?!
// function solution(s) {
//     const arr = s.split(' ');

//     return Math.min(...arr)+' '+Math.max(...arr);
// }

// // 다른사람 풀이2
// function solution(s) {
//   return Math.min(...s.split(' ')) + ' ' + Math.max(...s.split(' '));
// }

// // 다른 사람 풀이3
// function solution(s) {
//   var answer = '';
//   var list = s.split(' ');
//   var max = Math.max(...list);
//   var min = Math.min(...list);
//   answer = min + ' ' + max;
//   return answer;
// }

// 멘토님 풀이
// Reference Code ( for )
function solution(s) {
  let [min, max] = [0, 0];

  let str = '';
  for (let i = 0; i < s.lenght; i++) {
    if (s[i] === ' ' || s[i] === undefined) {
      str = Number(str);
      if (min === 0 || max === 0) {
        // 기준점 잡아줌
        min = str;
        max = str;
      } else {
        if (str < min) {
          min = str; // 최솟값 업데이트
        }
        if (str > max) {
          max = str; // 최대값 업데이트
        }
      }

      str = '';
      continue;
    }
    str += s[i];
  }
  return `${min} ${max}`;
}

// 멘토님 풀이2
// Reference Code ( Math.min, Math.max )
function solution(s) {
  s = s.split(' ');
  const max = Math.max(...s);
  const min = Math.min(...s);
  return `${min} ${max}`;
}
