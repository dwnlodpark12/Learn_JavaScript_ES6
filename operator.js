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

console.log(hyerin1 == hyerin2);  //true
console.log(hyerin1 === hyerin2); //false
console.log(hyerin1 === hyerin3); // true
