// http 
// HyperText Transfer Protocal
// request - response
// AJAX : Asynchronous Javascript And XML
// XHR : XMLHttpRequest

//JSON : JavaScript Object Notation
// - simplest data interchange format
// - lightweight text-based structure
// - easy to read
// - key-value pairs
// - used for serialization and transmisson of data between the network the network connection
// independent programming language and platform

// 1. Object to JSON
// JSON.stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'toto',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
  // symbol: Symbol("id"), // 자바스크립트 내장 함수 또한 X
};
json = JSON.stringify(rabbit);
console.log(json); // 함수는 제외 

json = JSON.stringify(rabbit, ['name']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'hyerin' : value;
});

console.log(json);
// key: , value: [object Object] 최상위 

// console.clear();

// 2. JSON to Object  
// parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value ;
});
console.log(obj);
rabbit.jump(); // can jump!
// obj.jump(); // is not a function

console.log(rabbit.birthDate.getDate());    // 10
console.log(obj.birthDate.getDate());    // is not a function
// why? obj의 birthDate는 string 값으로 넘어오기 때문에 getDate() 함수를 사용 하지 못한다. 


// JSON Diff
// JSON Beautifier
// JSON Parser
// JSON Validator
