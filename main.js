// 1. Use strict
// whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
// use this for Vanilla JavaScript.
'use strict';
console.log('Hello World!');

// 2. Variable, rw (Read, Write)
// let (added in ES6)

let globalName = 'global name';
// Block Scope
{
  let name = 'hyerin';
  console.log(name); // hyerin
  name = 'hello';
  console.log(name); // hello
}
console.log(name); // null
console.log(globalName); // global name

// var (dont ever use this!)
// var hoisting (move declaration from bottom to top)
// hoisting이란? A: 어디에서 선언했든 상관 없이 맨 위로 선언을 끌어 올려주는 것
// var has no block scope

console.log(age); // undefined
age = 4;
console.log(age); // 4
var age;

{
  age2 = 8;
  var age2;
}
console.log(age2); // 8

// 3. Constant (read Only)
// use const whenever possible.
// only use let if variable needs to change.

const daysInWeek = 7;
const maxNumber = 5;

// Note! 
// Immutable data types: primitive types, frozen objects (i.e. object.freeze()) 
// Mutable data types: all objects by default are mutable in JS 

// favor immutable data type always for a few reasons :
// 불변의 데이터 타입을 선호하는 몇가지 이유들 :
// - security // 보안성
// - thread safety 
// -reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1;  // demical number
console.log(`value: ${count}, type: ${size}`);
//
console.log(`value: ${size}, type: ${count}`);
//