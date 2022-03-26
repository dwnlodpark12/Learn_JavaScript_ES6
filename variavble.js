// const & let - 새로운 변수 선언 방식
// - 블록 단위 {  } 로 변수의 범위가 제한되었음 (block scope)
// - const : 한번 선언한 값에 대해서 변경할 수 없음 (상수)
// - let : 한번 선언한 값에 대해서 다시 선언할 수 없음

const a = 20; 
// a = 30;
console.log(a); 
// Uncaught TypeError: Assignment to constant variable.
// 구문 오류: 상수 변수에 할당

// let b = 20;
// let b = 10;
// console.log(b);
// Uncaught SyntaxError: Identifier 'b' has already been declared
// 구문 오류: 식별자 'b'가 이미 선언되었습니다.


// ES5의 특징 - 1. 변수의 Scope 
// - 기존 자바스크립트(ES5)는 {  } 에 상관없이 스코프가 설정됨

var sum = 0;
for (var i = 0; i <= 5; i++) {
  sum = sum + 1;
}
console.log(sum); // 15
console.log(i);   // 6


// ES5의 특징 - 2. Hoisting
// Hoisting이란 선언한 함수와 변수를 해석기가 가장 상단에 있는 것처럼 인식한다.
// js 해석기는 코드의 라인 순서와 관계 없이 함수선언식과 변수를 위한 메모리 공간을 먼저 확보한다. (함수 표현식은 해당 X)
// 따라서,function a() 와 var 는 코드의 최상단으로 끌어 올려진 것(hoisted) 처럼 보인다.

function willBeOveridden() {
  return 10;
}

willBeOveridden();    // 5

function willBeOveridden() {
  return 5;
}

function sum() { // 함수 선언식 == function statement
  return 10 + 20;
}

var add = function() {  // 함수 표현식 == function expression
  return 10 + 20; 
}

var sum = 5; // 1
sum = sum + 1; // 4

function sumAllNumbers() { // 2
  //... 
}

var i = 10; // 3