'use strict'
// 1. String concatnation
console.log('my ' + 'cat'); // my cat type: string
console.log('1' + 2); // 12 type: string
console.log(`string Literals: 1 + 2 = ${1 + 2}`); // string Literals: 1 + 2 = 3

// 2. Numeric operators
console.log(1 + 1);  // 2   add
console.log(1 - 1);  // 0   substract
console.log(1 / 1);  // 1   divide
console.log(1 * 1);  // 1   multiply
console.log(5 % 2);  // 1   remainder
console.log(2 ** 3);  // 8    exponentiation

// 3. Increment and decrement operators

// 비슷하지만 할당된 값에 대한 부분이 다르다.
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;

console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;  // x = x + y; 
x -= y;  // x = x - y;
x *= y;  // x = x * y;
x /= y;  // x = x / y;

// 5. Comparison operators
console.log(10 < 6);  // less than // false
console.log(10 <= 6); // less than or equal // false 
console.log(10 > 6);  // greater than // true 
console.log(10 >= 6); // greater than or equal // true 

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement 
// nullableObject && nullableObject.somthing

function check() {
  for(let i = 0; i < 10; i++) {
    //wasting Time
    console.log('😴');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality 
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);  // true
console.log(stringFive != numberFive);  // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); //true

// object equality by reference
const hyerin1 = {name: 'hyerin'};
const hyerin2 = {name: 'hyerin'};
const hyerin3 = hyerin1;

console.log(hyerin1 == hyerin2);  //false 
// 객체 안의 key, value 값이 같아도 메모리 상에서는 다른 reference 안에 담아두었기 때문에 같다고 볼 수 없다.

console.log(hyerin1 === hyerin2); //false
// 레퍼런스 값이 다르기 때문에 false

console.log(hyerin1 === hyerin3); // true
// 1이 가지고 있는 reference 를 3이 할당 받았기 때문에 true

//equality - puzzler
console.log(0 == false);   // true
console.log(0 === false);   // number / boolean => false
console.log('' == false);   // empty string => true 
console.log('' === false);    // false
console.log(null == undefined);   // true
console.log(null === undefined);    //false

//  8.Conditional operators : if
//  if, else if, else

// const name = 'Hyerin';
const name = 'coder';
if(name === 'Hyerin') {
  console.log(`Wellcome ${name}!`);
} else if(name === 'coder') {
  console.log('You are amazing coder');
}else {
  console.log('unknown');
}

// 9. Ternery operators: ?
//  삼항연산자 
// condition ? value1 : value2;
console.log(name === 'Hyerin'? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like (열거형의) value check
// use for multiple type checks in TS (typeScript)

const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'FireFox':
    console.log('love you😍');
    break;
  default:
    console.log('same All!');
    break;
}

// 11. Loops 
// while loop, while the condition is truthy
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`); // 3 > 2 > 1 
  i--;
}

//  do while loof, body code is executed first, 
// then check the condition.
//do 의 block을 먼저 실행 후 while 실행
// 조건문이 맞을때 실행하고 싶으면 while 사용
// 선언되어 있는 block 을 먼저 실행 후 조건을 걸고 싶다면 do while
do { 
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for (begine; condition; step)
for (let i = 3; i > 0; i = i - 2) {
  //  inline variable declaration
  console.log(`inline variable for : ${i}`);
  // inline variable for : 3
  // inline variable for : 1
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`I : ${i}, J : ${j}`);
  }
}

// break, continue
// break : loop 를 완전히 끝내버리는 것
// continue : 지금 걸려있는 loop만 skip 하고 다음 조건에서 또 loop 시작 
// Q1: iterate from 0 ro 10 and print only even numbers (use continue)
for(let k = 0; k < 11; k++) {
  if(k % 2 == 1) continue;
  console.log(k);
}

// Q2: iterate fron 0 to 10 and print numbers until reaching 8 (use break)
for (let idx = 0; idx < 11; idx++) {
  if(idx > 8) break;
  console.log(idx);
}
