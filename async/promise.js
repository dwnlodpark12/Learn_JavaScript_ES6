'use strict';

// Promise is a Javascript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the excutor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing somthing...');
  setTimeout(() => {
    resolve('hyerin');
    // reject(new Error('no network'));
  },2000);
});

// 2. Consumers: then, catch, finally

// chaining
promise.then((value) => {
  console.log(value);
})
.catch(error => {
  console.log(error);
})
.finally(() => { 
  // 인자 필요 X, 무조건 호출
  console.log('finally');
});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 500);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 500);
    });
  })
  .then(num => console.log(num));

  // 4. Error Handling
  const getHen = () => 
    new Promise((resolve, reject) =>{
      setTimeout(() => resolve('🐓'), 1000);
    });
  const getEgg = hen => 
    new Promise((resolve, reject) =>{
      // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
      setTimeout(() => reject(`error! ${hen} => 🥚`), 1000);
    });
  const cook = egg => 
    new Promise((resolve, reject) =>{
      setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

    getHen()
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal));
    
    // then 절에서 받아오는 value를 바로 함수로 넣는다면 생략 가능 

    getHen()
    .then(getEgg)
    .catch(error => {
      return '🐖'; 
    })
    .then(cook)
    .catch(error => {
      return '🥩'; 
    })
    .then(console.log)
    .catch(console.log);