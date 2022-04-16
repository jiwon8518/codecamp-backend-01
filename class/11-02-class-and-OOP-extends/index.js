class SkyUnit {
    height = 100;
    constructor(bbb) {
        this.height = bbb;
    }

    run = () => {
        console.log("날아서 도망가자");
    }
}

class GroundUnit {
    run = () => {
        console.log("뛰어서 도망가자");
    }
    
}



// SkyUnit 를 상속받아
class Monster extends SkyUnit {
    power = 10;

    constructor(aaa) {
        super(aaa); //SkyUnit 의 constructor 가 들어옴
        if(aaa) {
            this.power = aaa;
        }

    attack = () => {
        console.log("공격하자!!!");
        console.log("내 공격력은 " + this.power + " 이야!!!");
    }

    }
}

const myMonster = new Monster(1000);
myMonster.attack();
myMonster.run(); // SkyUnit 를 상속받아서 run()
