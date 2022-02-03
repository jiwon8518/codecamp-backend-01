//-- JadenCase 문자열 만들기 --//

// 문제 설명
// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// - s는 길이 1 이상 200 이하인 문자열입니다.
// - s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
//      숫자는 단어의 첫 문자로만 나옵니다.
//      숫자로만 이루어진 단어는 없습니다.
//      공백문자가 연속해서 나올 수 있습니다.
// - 첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다. ( 첫번째 입출력 예 참고 )

// 입출력 예
// s	                        return
// "3people unFollowed me"	    "3people Unfollowed Me"
// "for the last week"	        "For The Last Week"

function solution(s) {
  let answer = '';
  // if (s.search(/\s/)) {
  //   console.log('g');
  // }
  let arr = s.split(' ');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) {
        answer += ' ' + arr[i][j].toUpperCase();
      } else {
        answer += arr[i][j];
      }
    }
  }
  answer = answer.trim();
  return answer;
}

// 멘토님 풀이
// for문
function solution(s) {
  let answer = '';

  s = s.toLowerCase();

  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    let word = s[i];
    console.log(s[i]);
    if (s[i] === ' ') {
      idx = 0;
    } else {
      if (idx === 0) {
        word = s[i].toUpperCase();
        console.log(s[i], s);
      }
      idx++;
    }
    answer += word;
  }
  //console.log(s[i], i, idx);
  console.log(answer);
  return answer;
}

// map() 사용
function solution(s) {
  s = s
    .toLowerCase()
    .split(' ')
    .map((str) => {
      return str === '' ? str : str[0].toUpperCase() + str.substr(1);
      // return str === '' ? str : str[0].toUpperCase() + str.slice(1, str.length);
    })
    .join(' ');
  console.log(s);
  return s;
}

//let s = 'for the last week';
let s = '3people unFollowed me';
solution(s);
