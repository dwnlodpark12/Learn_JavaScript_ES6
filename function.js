// Function 

// - fundamental building block in the program
// - 프로그램을 구성하는 기초적인 빌딩 블럭
// - subprogram can be used multiple times
// - 서브프로그램이라고도 불리며 재사용이 여러번 가능
// - performs a task or calculates a value
// - 한가지의 기능을 수행하거나 값을 계산하는 역할

// 1. Function declaration
// funtion name(param1, param2) { body... return; }
// one function == one thing
// 하나의 함수는 한가지의 일만 하도록 설계해아함
// naming : doSomething, command, verb ... 
// 변수는 명사로, 함수는 동사로
// e.g. createCardAndPoint -> createCard , createPoint
// function is object in JS 
// 자바스크립트에서 함수는 객체이다. 

function printHello() {
  console.log('hello');
}
printHello();
function log(message) {
  console.log(message);
}
log('hello!!!!');
log(1234);

//typeScript playGround
// https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAGzgcwBQFsCmBnPAQzRwC5E8oAnGMNASkQG8AoRdxCBPOZHAOlSZcBYjnoBuFgF92LIA

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
// 메모리에 reference가 전달

function changeName(obj) {
  obj.name = 'coder';
}
const hyerin = { name: 'hyerin' };
changeName(hyerin);
console.log(hyerin);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  //과거
  // if(from === undefined ) {
  //   from = 'unknown';
  // }
  console.log(`${message} by ${from}`);
}
showMessage('Hello!'); // Hello! by undefined
showMessage('Hello!', 'hyerin'); // Hello! by hyerin

// 4. Rest parameters (added in ES6)
// 펼침연산자
function printAll(...args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i]); // learn javascript ES6
  }

  for (const arg of args) {
    console.log(arg);   // learn javascript ES6
  }

  args.forEach((arg) => {console.log(arg);})
  // learn javascript ES6
}
printAll('learn', 'javascript', 'ES6');

// 5. Local scope
let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  console.log(message);   // local variable
  console.log(globalMessage);   // global variable
  function printAnother() {
    console.log(message);
    let childMessage = 'hello child';
  }
  // console.log(childMessage); // not defined 
}
printMessage();
// console.log(message);   // not defined
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다. 

// 6. Return value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);   // 3
console.log(`sum: ${sum(1, 2)}`);
console.log(`sum: ${result}`);

// 7. Early return, early exit

// bad
function upgradeUser(user) {
  if(user.point > 10) {
    //long upgade logic...
  }
}

//good
// 유효성 검사
function upgradeUser(user) {
  if(user.point <= 10) return;
  // long upgade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// cna be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the exeecution reaches it.
const print = function() { // anonymous function
  console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;

console.log(sumAgain(2,3));

// 자바스크립트 함수 선언이 자동으로 hoisting 되기 때문에 
// 함수 선언 전에 함수를 호출해도 함수가 실행된다. 

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if(answer == 'love U') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function 
const printYes = function () {
  console.log('Yes!');
}

// named function 
// better debugging in debugger's stack traces
// recursions - 재귀
const printNo = function print() {
  console.log('No!!!!!!!');
  // print(); 자신의 함수 안에서 자신을 호출하는 재귀 함수
}

randomQuiz('wrong', printYes, printNo); // No!!!!!!
randomQuiz('love U', printYes, printNo); // Yes!

// Arrow function - 화살표 함수
// always anonymous
const notSimplePrint = function() {
  console.log('simplePrint');
}

const simplePrint = ()=> {console.log('more simplePrint');}
const add = (a, b) => a + b; 
const simpleMultiply = (a, b) => {
  // do somthing More
  return a * b; 
}

simplePrint();
console.log(add(5, 5));

// IIFE: Immediately Invoked Function Expression
// 즉시 실행 함수
// 함수를 선언 , 호출로 나뉘는데 IIFE 는 선언함과 동시에 호출도 같이 한다. 
(function hello() {
  console.log('IIFE');
})();

// Quiz 
//function calculate (command, a, b)
// command: add, substract, divide, multiply, reminder

// Quiz answer
function calculate (command, a, b) {
  switch (command) {
    case 'add' :
      return a + b;
    case 'substract' :
      return a - b;
    case 'divide' :
      return a / b;
    case 'multiply' :
      return a * b;
    case 'reminder' :
      return a % b;
    default: 
      throw Error('unknown command'); 
  }
}

calculate('reminder', 5, 10);