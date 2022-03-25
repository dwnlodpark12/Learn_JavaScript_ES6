// 함수 선언

function doSomthing(add) {
  console.log(add);
  const result = add(3, 4);
  console.log(result);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출
// doSomthing(add);

const addFun = add; 
console.log(addFun); // add 함수 출력
const result = addFun(5, 5);
console.log(result);


// number, string, boolean, null, undefined, // symbol ( 많이 쓰이는 타입 X )
//primitive type :: JS 에서 가장 낮은 row Level 로써 직접 표현되는 불변 데이터 
// 변수명의 네이밍은 직관적으로 알아보기 쉽게! 
let number = 2; 
let number2 = number;
console.log(number);    //2
console.log(number2);   //2  , number 를 복사해와 number2 에 할당

number2 = 3;
console.log(number);    //2
console.log(number2);   //3

// object 
let obj = {
  name : 'hyerin', 
  age: 5
}
let obj2 = obj;

console.log(obj.name);  // hyerin
console.log(obj2.name); // hyerin
obj2.name ='coder';
console.log(obj.name);  // coder
console.log(obj2.name);  // coder
// obj와 obj2의 가르키고 있는 레퍼런스가 같기때문에 하나가 바뀌어도 둘 다 바뀌게 된다

let a = 2;
a = 3;
a = 4;

const object = {};

// const 상수는 다른 reference로 바꾸는 것은 불가하지만,
// reference 안에 참조 되고 있는 값들은 바꿀 수 있다. 

function substract(a, b) {
  return a - b;
}

function print(name, age) {
  console.log(`${name}, ${age}`);
  // 인자값은 개발자가 만듦! 직관적으로 작성 필요
}

print(10, 10); // print

// 변수명 은 짧지만 기능에 대한 설명을 간략히 알려주는 역할도 한다.

const differ = substract(10, 1);
console.log(differ);

const runFunction = substract;
const result2 = runFunction(5, 5);
console.log(result2);

function divide(num1, num2) {
  return num1 / num2; 
}

// typeScript 라면..? 
// function surprise(operator: number) {}

function surprise(operator) {
  const result = operator(5, 2);
  console.log(`result : ${result}`);
}

// surprise(); //operator is not a function
// surprise(substract); // NaN (surprise 함수 안의 operator 인자값을 추가 하지 않았을 때)
surprise(substract); // 3
surprise(divide); // 3

// 3. 연산자
// false : 0, -0, '', null, undefined, NaN
// true : -1, 'something', []
let num; // undefined - 값이 할당되어 있지 않는다면 false이다 
if(num) {
  console.log('true!');
}else {
  console.log('false..');
}

num && console.log(num); // console창 출력 X 

num = 9;

num && console.log(num); // 9 

let obj3 = {
  name: 'hyerin', 
  age: 19
}; 
if(obj3) {
  console.log(obj3.name);  
}

obj3 && console.log(obj3.name); 

//  4. class && callback

class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.counter++;
    console.log(this.counter);

    if(this.counter % 5 === 0) {
      // runIf5Times(this.counter);
    }
  }
}

const coolCounter = new Counter(); 

function printSomthing(num) {
  console.log(`yo!😏${num}`);
}
function alertNum(num) {
  alert(`WOW! ${num}`);
}

coolCounter.increase(printSomthing); // 1
coolCounter.increase(printSomthing); // 2
coolCounter.increase(printSomthing); // 3
coolCounter.increase(printSomthing); // 4
coolCounter.increase(printSomthing); // yo!😏
coolCounter.increase(printSomthing); 
coolCounter.increase(printSomthing); 
coolCounter.increase(printSomthing); 
coolCounter.increase(printSomthing); 
coolCounter.increase(alertNum);