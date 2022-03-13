// asnyc & await
// syntactic sugar
// clear style of using promise

// 1. asnyc
async function fetchUser() {
  // do network reqeust in 10 seconds...
  return 'hyerin';
  
  // return new Promise((resolve, reject) => {
    // do network reqeust in 10 seconds...
    // resolve('hyerin');
  // })
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
  await delay(2000);
  // throw ('error');
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}


// another callback HELL !!!!!

// function pickFruits() {
//   // Promise Chaining
//   return getApple()
//   .then(apple => {
//     return getBanana()
//     .then(banana => `${apple} + ${banana}`)
//   });
// }

// pickFruits().then(console.log);

// async function pickFruits() {
  // Promise Chaining
  // return getApple()
  // .then(apple => {
  //   return getBanana()
  //   .then(banana => `${apple} + ${banana}`)
  // });
//   try {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
//   } catch {
//     return alert('no fruit');
//   }
// }

// pickFruits().then(console.log);


// await 병렬 처리

async function pickFruits() {
  // async 안에 있는 함수들은 바로 동기 처리
  // 각각의 변수에다가 할당해둔 뒤 
  const applePromise = getApple();
  const bananaPromise = getBanana();

  // 동기 처리된 함수를 await 으로 받게 되면 비동기화 
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  // Promise 배열 전달
  // 모든 Promise 들이 병렬적으로 받아질 떄까지 기다리는 API
  return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join('+'));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()])
}

pickOnlyOne().then(console.log);

// 4. Homework
// callback-to-promise class UserStorage 
// async & await 으로 refactoring 하기

class UserStorage {
  // 1. make delay time function
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

  // 2. make login User's find id & password function
    async loginUser(id, password) {
      await delay(1000);
      if(
        (id === 'hyerin' && password === 'frontend') ||
        (id === 'coder' && password === 'backend') 
      ) {
        return id;
      }else {
        console.log(id, password);
        throw 'wrong ID or password';
      }
    }

    async getRoles(user) {
      await delay(1500);
      if(user === 'hyerin') {
        return {name: 'hyerin', role: 'admin'};
      } else {
        console.log(user);
        throw 'your are not admin :\)';
      }
    }

}

const userStorage = new UserStorage();
const id = prompt('Enter your ID'); 
const password = prompt('Enter your password');

async function helloUser () {
    const user = await userStorage.loginUser(id, password);
    const userRole = await userStorage.getRoles(user);
    return userRole;
}
helloUser(id, password).then(user => {
  alert(`${user.name} 님 환영합니다! 당신은 ${user.role}입니다.`);
})