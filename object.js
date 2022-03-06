// Objects
// one of the JavaScript's data types
// a collection if reated data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

// bad
const name = 'hyerin';
const age = 14;

print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
}

// good
const me = {name: 'hyerin', age: 14}
printPerson(me);
function printPerson(person) {
  console.log(person.name);
  console.log(person.age);
}

const obj1 = {};    // 'object literal' syntax
const obj2 = new Object();    // 'object constructor' syntax