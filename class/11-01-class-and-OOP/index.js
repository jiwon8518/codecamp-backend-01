const aaa = new Date();
console.log(aaa.getFullYear());
console.log(aaa.getMonth() + 1);

// 붕어빵 틀에서 붕어빵을 찍어낸다 라고 말함ㅋ
// Monster 를 만들수 있는 설명서
class Monster {
    power = 10;
    constructor(aaa) { // constructor 함수
        this.power = aaa;
    }

    attack = () => {
        console.log("공격하자!!!");
        console.log("내 공격력은 " + this.power + " 이야!!!");
    }

    run = () => {
        console.log("도망가자!!");
    }
}

// myMonster 라는 내장객체(메소드)  Monster 라는 객체
const myMonster1 = new Monster(50); // this.power = 50
myMonster1.attack();
myMonster1.run();

const myMonster2 = new Monster(20); // this.power = 20
myMonster2.attack();
myMonster2.run();


// 객체지향프로그래밍 = OOP
// const loginService = new LoginService();
// loginService.login();
// loginService.logout();
// loginService.loginCheck();