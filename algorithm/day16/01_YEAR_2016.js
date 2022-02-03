//-- 2016년 --//
// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다.
// 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

// 입출력 예
// a	    b	    result
// 5	    24	  "TUE"

function solution(a, b) {
  let day = new Date(2016, a - 1, b);
  const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let week = WEEKDAY[day.getDay()];
  // getDay() : Date에서 현지 시간 기준 요일(0–6)을 반환
  // getDate() : Date에서 현지 시간 기준 일(1–31)을 반환

  console.log(week);
  return week;
}

let a = 5;
let b = 24;
solution(a, b);

// 1월 1일 : 금요일

// +0 = 1월 1일 : 금요일
// +1 = 1월 2일 : 토요일
// +2 = 1월 3일 : 일요일
// +3 = 1월 4일 : 월요일
// +4 = 1월 5일 : 화요일
// +5 = 1월 6일 : 수요일
// +6 = 1월 7일 : 목요일
// +7 = 1월 8일 : 금요일
// +14 = 1월 15일 : 금요일

// 멘토님 풀이
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];

function solution(a, b) {
  let answer = 0;
  for (let i = 1; i < a; i++) {
    console.log(i, month[i]);
    answer += month[i];
  }
  answer += b - 1;
  console.log(answer % 7);
  return week[ answer % 7 ];
}

let a = 5;
let b = 24;
solution(a, b);

// 다른 메서드 reduce 사용
function solution(a, b) {
  const answer = new Array(a) // a 만큼의 길이를 가지는 빈배열 만들기
                      .fill(1) // 1 로 채우기
                      .reduce( (acc, cur, i) => {
                        const mn = cur + i;
                        console.log(acc, mn);
                        return acc + (mn !== a
                                  ? // 이전 월수 ( 1~4월 ) 
                                  month[mn]
                                  : // 해당 월수 ( 5월 === a와 동일한 월 )
                                  b - 1
                                  )
                      }, 0);
console.log(answer);
}


// Date() 사용
a = new Date(2016, 5-1, 24);
// new 는 새로운 객체를 반환
// typeof 로 타입 확인시 object 이다 객체이기 때문에

a.getDay(); // 해당일수에 어떤 요일인지 가져올수 있음
a.getDate();
a.getFullYear();
a.getMonth(); // Month 는 항상 -1 되어 가져옴
a.getMonth() +1;


const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function solution(a, b) {
  const answer = new Date( 2016, a -1, b ).getDay();
  console.log(answer);
  return week[answer];
}

let a = 5;
let b = 24;
solution(a, b);