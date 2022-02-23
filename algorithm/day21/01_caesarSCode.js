//-- 시저 암호 --//

// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.

// 입출력 예
// s	    n	    result
// "AB"	    1	    "BC"
// "z"	    1	    "a"
// "a B z"	4	    "e F d"

// 나의 풀이
//65~90 A~Z
//97~122 a~z
function solution(s, n) {
  let answer = [];
  let arrNum = [];

  for (let i in s) {
    if (s[i] !== ' ') {
      let num = s.charCodeAt(i) + n;
      console.log(num - 26);

      let newNum = num > 90 ? num - 26 : num;
      let charCode = String.fromCharCode(newNum);
      // 대문자라면
      if (s.include(s[i]) === upper) {
        answer.push(charCode);
      } else {
        answer.push(toLowerCase(charCode));
      }

      // answer.push(String.fromCharCode(newNum));
      arrNum.push(newNum);
    } else {
      answer.push(' ');
    }
  }
  console.log(answer);

  answer = answer.join('');
  console.log(answer);

  return answer;
}

let s = 'A B Z';
let n = 4;
solution(s, n);

//
// 멘토임 풀이
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// 풀이2
const lower = 'abcdefghijklmnopqrstuvwxyz'; // 소문자 알파벳만 저장
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 대문자 알파벳만 저장

//풀이3 map()

// 풀이4 아스키코드
// 아스키 코드
// 어떠한 문자열을 일정한 숫자 코드로 받아온다
str = 'z';
str.charCodeAt(); // 문자열을 숫자코드로 변환
str.fromCharCode(97); // 숫자 코드를 문자열로 변환

// Reference Code ( for : 대소문자 구분 없음 )
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function solution(s, n) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      // 공백일 경우
      answer += ' ';
      continue;
    }

    let index = alphabet.indexOf(s[i]);
    const word =
      index > 25 ? alphabet.slice(26, alphabet.length) : alphabet.slice(0, 26);
    index = word.indexOf(s[i]) + n;

    if (index >= 26) {
      index -= 26;
    }

    answer += word[index];
  }

  return answer;
}

// Reference Code ( for : 대소문자 구분 )
const lower = 'abcdefghijklmnopqrstuvwxyz'; // 소문자 알파벳만 저장
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 대문자 알파벳만 저장

function solution(s, n) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      // 공백일 경우
      answer += ' ';
      continue;
    }

    // 소문자인지를 먼저 검증한 후
    // 소문자가 맞다면, 소문자 리스트를 저장
    // 소문자가 아니라면, 대문자 리스트를 저장
    const word = lower.includes(s[i]) ? lower : upper;
    let index = word.indexOf(s[i]) + n;

    if (index >= 26) {
      index -= 26;
    }

    answer += word[index];
  }
  return answer;
}

// Reference Code ( map )
const lower = 'abcdefghijklmnopqrstuvwxyz'; // 소문자 알파벳만 저장
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 대문자 알파벳만 저장

function solution(s, n) {
  const answer = s.split('').map((str) => {
    if (str === ' ') {
      return str;
    }

    const word = lower.includes(str) ? lower : upper;
    let index = word.indexOf(str) + n;

    if (index >= 26) {
      index -= 26;
    }
    return word[index];
  });
  return answer.join('');
}

// Reference Code ( charCode )
function solution(s, n) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer += ' ';
      continue;
    }

    let index = s[i].charCodeAt() + n;
    if (index > 122 || (index > 90 && index - n < 97)) {
      // 소문자 z(122) 이상을 넘어가거나
      // 대문자 Z(90) 를 넘어가면서
      // 기존의 index 의 값이 대문자일 경우
      index = index - 26;
    }
    answer += String.fromCharCode(index);
  }
  return answer;
}
