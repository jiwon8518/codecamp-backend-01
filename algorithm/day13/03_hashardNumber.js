//-- 하샤드 수 --//
// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// - x는 1 이상, 10000 이하인 정수입니다.
// 입출력 예
// arr	return
// 10	true
// 12	true
// 11	false
// 13	false

// 입출력 예 설명
// 입출력 예 #1
// - 10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.
// 입출력 예 #2
// - 12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.
// 입출력 예 #3
// - 11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.
// 입출력 예 #4
// - 13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.



function solution(x) {

    let splitArr = String(x).split("");
    let total = 0;

    for(let ele of splitArr) {
        total += Number(ele);
    }

    return x % total === 0 ? true : false;
}


solution(13);




//-- 멘토님 풀이 --//

function solution(x) {
    let answer = 0;
    x = String(x);
    
    for(let i = 0; i < x.length; i++) {
        answer += Number(x[i]);
    }

    // console.log(x % answer === 0);
    return x % answer === 0 ;
}


solution(13);



// 연산을 받아올때는 reduce() 를 사용해주는것이 좋음
function solution(x) {
    const answer = String(x)
                    .split("")
                    .reduce( (cu,el) => {
                        // console.log(cu, el);
                        // console.log(typeof cu); // String 타입
                        // console.log(typeof el);
                        return cu + Number(el); // cu 는 초기값으로 0을 받아오기 때문에 Number 타입으로 변경안해보도 됨
                    }, 0);

     return x % answer === 0;
}

solution(13);