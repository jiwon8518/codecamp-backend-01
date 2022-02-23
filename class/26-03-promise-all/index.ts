// 1. 가장 기본 방법
// new Promise((resolve, reject) => {
//   // 뭔가 특정 작업
//   if (성공!!) {
//     resolve();
//   }
//   if (실패!!) {
//     reject();
//   }
// });

// 2.

async function fetchData() {
  console.time('=== 개별 Promise 각각 ==='); // timeEnd 와 같은 이름이여야함
  const result1 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      // 2초뒤에 무조건 성공한다는 가정하에
      resolve('성공시 받는 데이터');
    }, 2000);
  });
  const result2 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      // 3초뒤에 무조건 성공한다는 가정하에
      resolve('성공시 받는 데이터');
    }, 3000);
  });
  const result3 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      // 1초뒤에 무조건 성공한다는 가정하에
      resolve('성공시 받는 데이터');
    }, 1000);
  });
  console.timeEnd('=== 개별 Promise 각각 ==='); // time이 언제끝났는지 이름 같아야함
}

async function fetchData2() {
  console.time('=== 한방에 Promise.all ==='); // timeEnd 와 같은 이름이여야함

  // 한방에 몰아서 기다리기 때문에 await도 한번만
  const results = await Promise.all([
    // all 은 모두 이기 떄문에 배열이여야함
    // 먼저 끝난애들은 먼저 와서 대기, 모두 끝나면 그때 await가 끝나고 아래로 진행함
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // 2초뒤에 무조건 성공한다는 가정하에
        resolve('성공시 받는 데이터');
      }, 2000);
    }),

    new Promise((resolve, reject) => {
      setTimeout(() => {
        // 3초뒤에 무조건 성공한다는 가정하에
        resolve('성공시 받는 데이터');
      }, 3000);
    }),

    new Promise((resolve, reject) => {
      setTimeout(() => {
        // 1초뒤에 무조건 성공한다는 가정하에
        resolve('성공시 받는 데이터');
      }, 1000);
    }),
  ]);
  console.timeEnd('=== 한방에 Promise.all ==='); // time이 언제끝났는지 이름 같아야함
}

fetchData();
fetchData2();
