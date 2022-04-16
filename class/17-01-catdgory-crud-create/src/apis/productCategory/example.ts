class Aaa {
  apple; //public 생략
  //private apple; //
  //private readonly apple; // readonly 안에서도 변경 불가

  mypower = 10;

  //   constructor(mypower) {
  //     this.mypower = mypower;
  //   }
  constructor(private readonly mypower) {}
  ggg() {
    this.apple;
    this.mypower;
    console.log('안녕하세요');
  }
}

const aaa = new Aaa(50);
aaa.apple = 5;
