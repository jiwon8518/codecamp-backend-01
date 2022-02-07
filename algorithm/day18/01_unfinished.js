//-- 완주하지 못한 선수 --//
// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

// 입출력 예
// participant                                          ompletion	                                    return
// ["leo", "kiki", "eden"]                              ["eden", "kiki"]	                            "leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	    "vinko"
// ["mislav", "stanko", "mislav", "ana"]	            ["stanko", "ana", "mislav"]	                    "mislav"

// 입출력 예 설명
// 예제 #1
// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 예제 #2
// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 예제 #3
// "mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

function solution(participant, completion) {
  let participantSort = participant.sort();
  let completionSort = completion.sort();

  for (let i = 0; i < participantSort.length; i++) {
    if (participantSort[i] !== completionSort[i]) {
      console.log(participantSort[i]);
      return participantSort[i];
    }
  }
}

let participant = ['mislav', 'stanko', 'mislav', 'ana'];
let completion = ['stanko', 'ana', 'mislav'];
solution(participant, completion);

//-- 멘토님 풀이 1
// 효율성 떨어짐..
function solution(participant, completion) {
  let answer = '';
  for (let i = 0; i < completion.length; i++) {
    console.log(completion[i]);
    if (participant.includes(completion[i])) {
      participant.splice(
        participant.indexOf(completion[i]), // 인덱스값 가져오기
        1
      );
    }
  }
  return participant[0];
}

// splice
// 1. 배열에서 사용 가능한 메서드
// 2. 제거하고 싶은 배열의 데이터를 구간부터 제거할 수 있다.
// 3. 배열의 해당 구간부터 데이터를 추가
arr = [1, 2, 3, 4];
arr.splice(1, 1); // 제거된 데이터를 리턴값으로 받는다
arr.splice(1, 0); // 지우지 않겠다
arr.splice(1, 0, 5); // 지우지 않고 5를 넣어주겠다
arr.splice(1, 1, 5); // 1개 지우고 5를 넣어주겠다, 원본변경됨
arr;

//-- 풀이 2
function solution(participant, completion) {
  let answer = '';
  // 참가자 명단과 완주자 명단을 오름차순 형태로 정렬
  participant.sort((a, b) => (a > b ? 1 : -1));
  //participant.sort(); // 문자열 오름차순은 (a, b) => (a > b ? 1 : -1) 생략가능, 하지만 숫자는 반드시 넣어야함
  completion.sort((a, b) => (a > b ? 1 : -1));
  console.log(participant, completion);

  for (let i = 0; i < participant.length; i++) {
    console.log(participant[i], completion[i]);
    if (participant[i] !== completion[i]) {
      console.log(participant[i], completion[i]);
      // return participant[i];
      answer = participant[i];
      break; // 브레이크를 해줘야지 반복문 끝까지 안함
    }
  }
  return answer;
}

//-- 풀이 3
// filter 사용
function solution(participant, completion) {
  // 참가자 명단과 완주자 명단을 오름차순 형태로 정렬
  //participant.sort();
  completion.sort((a, b) => (a > b ? 1 : -1));

  const answer = participant.filter((name, i) => {
    console.log(name, completion[i]);
    return name !== completion[i];
  });
  console.log(answer);
  return answer[0]; // 제일 먼저 완주하지 못한 사람만 retrun 하면 되기 때문에 0번째 index 를 가져온것임
}
