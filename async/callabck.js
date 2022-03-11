'use strict';

// JavaScript is synchronous. 
// Excute the code block in order after hoisting.
// hoisting: var, function declaration
// 변수 또는 함수가 선언들이 자동적으로 제일 위로 올라가는 것

console.log('1');
setTimeout(() => console.log('2'), 500);
console.log('3');
// 1 - 3 - 2

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell Example !!! 

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if(
      (id == 'hyerin' && password == 'frontEnd') ||
      (id == 'coder' && password == 'coding')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() =>{
      if(user === 'hyerin') {
        onSuccess({ name: 'hyerin', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000)
  }
}

const userStorage = new UserStorage();
const id = prompt('Enter your ID'); 
const password = prompt('Enter your password'); 
userStorage.loginUser(
  id, 
  password, 
  user => {
    userStorage.getRoles(
      user, 
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role!`);
      }, 
      error => {
        console.log(error);
      }
      );
  },
  error => {
    console.log(error);
  }
  );


