// 자료구조와 알고리즘
// 한 배열안에는 동일한 타입의 데이터를 넣는 것이 중요!

'use strict';
// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits[0]);   // 🍎
console.log(fruits[1]);   // 🍌
console.log(fruits[2]);   // undefined
console.log(fruits[fruits.length -1]);   // 마지막 index

console.clear();
// 3. Looping over an array 
// print all fruits

// a. for
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for..of
for(let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index) => {
  console.log(fruit, index);
})

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍊','🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop(); // 인자값 불필요 , 제일 마지막 index에 위치한 값이 삭제됨
console.log(fruits);

// add an item to the begining
fruits.unshift('🍓', '🍒');
console.log(fruits);

// remvoe an tiem to the begining
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// why??? 
//  - pop과 push는 이미 생성되어 있는 배열들을 건드리지 않고 추가하거나 뒤에서 빼는 식이라 index 가 변동 되지 않는다. 빠른 operation 가능
// 하지만 shift, unshift는 앞에 들어가는 data를 뒤로 옮기거나, 뒤에 있는 data를 앞으로 옮겨야 하는 작업을 한번 이상은 거쳐야 하기때문에
// 배열의 길이가 길수록 반복적으로 해야하기 때문에 pop과 push를 사용하는게 더 낫다. 

// splice : remove an item by index position
// fruits
fruits.push('🥝', '🍇', '🍈', '🍉'); // typeof : string
console.log(fruits);

// 갯수를 지정하지 않으면 해당 index 값만 제외 하고 나머지 다 삭제 처리 됨
fruits.splice(1, 1); 
console.log(fruits);
fruits.splice(1, 1, '🥑', '🥥') ; 
// 해당 index 부터 param2 의 갯수만큼 지운 후 그 자리에 parm3, param4를 넣는다 
console.log(fruits);

// combine tweo arrays
const junks = ['🍕', '🌭', '🍱'];
const newFood = fruits.concat(junks);
console.log(newFood);

// 5. Searching operators
// indexOf : find the index 
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🥝'));    // 4
console.log(fruits.indexOf('🍇'));    // 5
// 배열 안에 해당하는 값이 없으면 -1 출력

// includes
console.log(fruits.includes('🍒'));   // true
console.log(fruits.includes('🍍'));   // false

// lastIndexOf
console.clear();
fruits.push('🍒');
console.log(fruits); 

console.log(fruits.indexOf('🍒')); // 0
console.log(fruits.lastIndexOf('🍒')); // 8

