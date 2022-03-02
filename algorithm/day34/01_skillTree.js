// 스킬트리
// 문제 설명
// 선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.

// 예를 들어 선행 스킬 순서가 스파크 → 라이트닝 볼트 → 썬더일때,
// 썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고, 라이트닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.

// 위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다.
// 따라서 스파크 → 힐링 → 라이트닝 볼트 → 썬더와 같은 스킬트리는 가능하지만,
// 썬더 → 스파크나 라이트닝 볼트 → 스파크 → 힐링 → 썬더와 같은 스킬트리는 불가능합니다.

// 선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 매개변수로 주어질 때,
// 가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.

// 제한 조건
// 스킬은 알파벳 대문자로 표기하며, 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.
// 스킬 순서와 스킬트리는 문자열로 표기합니다.
// 예를 들어, C → B → D 라면 "CBD"로 표기합니다
// 선행 스킬 순서 skill의 길이는 1 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.
// skill_trees는 길이 1 이상 20 이하인 배열입니다.
// skill_trees의 원소는 스킬을 나타내는 문자열입니다.
// skill_trees의 원소는 길이가 2 이상 26 이하인 문자열이며, 스킬이 중복해 주어지지 않습니다.

// 입출력 예
// skill	skill_trees	                            return
// "CBD"	["BACDE", "CBADF", "AECB", "BDA"]	    2

// 입출력 예 설명
// "BACDE": B 스킬을 배우기 전에 C 스킬을 먼저 배워야 합니다. 불가능한 스킬트립니다.
// "CBADF": 가능한 스킬트리입니다.
// "AECB": 가능한 스킬트리입니다.
// "BDA": B 스킬을 배우기 전에 C 스킬을 먼저 배워야 합니다. 불가능한 스킬트리입니다.

// 멘토님 풀이1
function solution(skill, skill_trees) {
  let answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    let currentIdx = 0; // 선행스킬의 순서를 비교하기 위한 변수
    // console.log(skill_trees);
    for (let l = 0; l < skill_trees[i].length; l++) {
      const idx = skill.indexOf(skill_trees[i][l]);
      if (idx !== -1) {
        // 선행스킬이 맞다면
        if (idx !== currentIdx) {
          // 앞에 선행스킬이 없을 떄 (불가능한 스킬트리 일 때)
          break;
        }
        // console.log((idx, skill_trees[i][l], skill_trees[i]));
        currentIdx++;
      }
      if (l === skill_trees[i].length - 1) {
        // 마지막을 체크 (충간에 반복문이 중단되지 않았다 === 모든 스킬트리의 순서가 맞다)
        // console.log(skill_trees[i]);
        answer++;
      }
    }
  }
  return answer;
}

let skill = 'CBD';
let skill_trees = ['BACDE', 'CBADF', 'AECB', 'BDA'];
solution(skill, skill_trees);

// 멘토님 풀이2
function solution(skill, skill_trees) {
  let answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    let filter = ''; // 유저의 스킬트리에서 skill 문자열만 남긴다
    for (let l = 0; l < skill_trees[i].length; l++) {
      if (skill.includes(skill_trees[i][l])) {
        // 선행스킬이 포함되어 있다면
        filter += skill_trees[i][l];
      }
    }
    if (filter === '') {
      answer++;
    } else if (skill.includes(filter)) {
      if (skill.indexOf(filter[0]) === 0) {
        answer++;
      }
    }
  }
  return answer;
}

// 멘토님 풀이3
function solution(skill, skill_trees) {
  const answer = skill_trees.reduce((acc, cur) => {
    let filter = cur
      .split('')
      .filter((str) => {
        return skill.includes(str);
      })
      .join('');
    if (filter === '') {
      filter = skill;
    }
    return acc + skill.includes(filter) && skill.indexOf(filter[0] === 0)
      ? 1
      : 0;
  }, 0);
  return answer;
}

// 멘토님 풀이 3 에서  조건문으로 조금 변경
