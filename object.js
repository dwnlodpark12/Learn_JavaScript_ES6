// Objects
// one of the JavaScript's data types
// a collection if reated data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

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

me.hasJob = true;
console.log(me.hasJob);   // true

delete me.hasJob;

console.log(me.hasJob);   // undefined

// 2. Computed properties
// key should be always "string"
console.log(me.name);   // hyerin 
console.log(me['name']);    // hyerin

me['hasJob'] = true;
console.log(me.hasJob);   // true

function printValue(obj, key) {
  console.log(obj.key); // undefined
  console.log(obj[key]); // hyerin 
}
printValue(me, 'name'); 
printValue(me, 'age'); 

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = makePerson('hyerin', 12);

console.log(person4);

function makePerson(name, age) {
  // return {name: name, age: age};
  // 위의 방식과 아래의 방식이 동일하게 진행됨 
  // key && value의 값이 같다면 생략 가능
  return {
    name, 
    age
  };
}

// 4. Construnctor function
// 생성자 함수 
const person5 = new Person('noel', 20);
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this
}

// 5. in operator: property existance check(key in obj)
console.log('name' in me);    // true
console.log('age' in me);   // true
console.log('random' in me);    // false
console.log(me.random);   // undefined
console.clear();

// 6. for..in vs. for..of
// for (key in obj)
for (key in me) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (key of array) {
  console.log(key);
}