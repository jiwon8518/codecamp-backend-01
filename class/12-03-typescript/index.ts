// 문자타입 - 타입추론
let aaa = "안녕하세요";
aaa = "반갑습니다";
aaa = 3;

// 문자타입
let bbb: string = "반갑습니다";
bbb = "반가워요";
bbb = 3;

// 숫자타입
let ccc = 10; //let ccc: number = 10;
ccc = "안냐하세요";
ccc = 50;

// 불린타입
let ddd: boolean = true;
ddd = 11;
ddd = false;

// 배열타입
let eee: number[] = [1, 2, 3, 4, 5];
eee = ["둘리", "또치", "마이콜"];

let fff: string[] = ["둘리", "또치", "마이콜"];
// 불린 배열도 마찬가지로 하면됨

let ggg: (number | string)[] = [1, "둘리", 2, "또치"];

// number만, string만
let money: number[] | string[] = [1000, 2000, 3000];
money = ["1000원", "2000원", "3000원"];

// 객체타입
interface IProfile {
  //interface 의 i 를 따다 IProfile 이라고 지음, 관례
  name: string;
  age: number | string;
  school: string;
}

let profile: IProfile = {
  name: "둘리",
  age: 13,
  school: "다람쥐초등학교",
};

profile.age = "13살";

// 함수타입
// function qqq(a: number, b: string) {
//     return a + b;
// }

// qqq(1, 2);
// qqq("둘리", "또치");
// qqq(1, "2");
// qqq(1, "마이콜");

function qqq(a: number, b: number): string {
  // return 값의 타입도 정해주기
  //return a + b;
  return "냠냠";
}

const result = qqq(1, 2);
