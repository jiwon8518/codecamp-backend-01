//-- 없는 숫자 더하기 --//

// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// - 1 ≤ numbers의 길이 ≤ 9
// - 0 ≤ numbers의 모든 원소 ≤ 9
// - numbers의 모든 원소는 서로 다릅니다.

// 입출력 예
// numbers              result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]      6

// 입출력 예 설명
// 입출력 예 #1
// - 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
// 입출력 예 #2
// - 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.


function solution(numbers) {
    let answer = 0;
    let sortNumbers = numbers.sort((a, b) => a - b);
    let arr = [ ...sortNumbers ];

    const set = new Set(arr);

    for(let i = 0; i < 10; i++) {
        if(!set.has(i)) {
            answer += i;
        }
    }
    
    console.log(answer);
    return answer;
}

let numbers = [1,2,3,4,6,7,8,0];
solution(numbers);





//-- 멘토님 풀이 --//

function solution(numbers) {
    let answer = 0;

    // 1. 1~9까지의 모든 숫자를 가져온다
    for(let i =0; i < 10; i++) {

        // 2. 1~9 까지의 숫자가 배열에 없는 경우를 찾는다
        if(numbers.includes(i)  === false) {
            // 3. 없는 숫자라면 answer 변수에 더해준다 
            answer += i;
        }
    }

    return answer;
}

function solution(numbers) {
    const answer = new Array(9)
                        .fill(1)
                        .reduce( (cu, el) => { // 첫번째 요소, 두번째 요소
                            const num = el + i;
                            return numbers.includes(num)
                                                ? cu // 숫자가 있는경우 다음반복으로 넘어가기
                                                : cu + num // 숫자가 없는 경우
                           // console.log(cu+el+i);

                        }, 0); // 초기값으로 0을 가져온다
                        
    // console.log(answer);
    return answer;
}