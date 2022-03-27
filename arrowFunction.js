// Arrow Function - 화살표 함수
// - 함수를 정의할 때 function 이라는 키워드를 사용하지 않고 => 로 대체
// - 흔히 사용하는 콜백함수의 문법을 간결화 

// ES5
var sum = function(a, b) {
  return a + b;
}

// ES6
var sum2 = (a, b) => {
  return a + b;
}

sum(10, 20); 
sum2(10, 20);


// ES5
var arr = ['a', 'b', 'c', 'd'];
arr.forEach(function(value) {
  console.log(value); // a, b, c, d
});

// ES6
var arr2 = ['a', 'b', 'c', 'd'];
arr.forEach(value => console.log(value)); // a, b, c, d 