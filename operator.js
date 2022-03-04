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