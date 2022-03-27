// Enhanced Object literal - 향상된 객체 리터럴
// - 객체의 속성을 메서드로 사용할 때 function 예약어를 생략하고 생성가능

var dictionary = {
  word: 100,
  // ES5
  lookUp: function () {
    console.log('find words');
  },
  
  //ES6
  lookUp2() {
    console.log('find words');
  }
};

console.log(dictionary.lookUp2);

// 객체의 속성명과 값명이 동일할 때 아래와 같이 축약 가능 
var figures = 10;
var dictionary = {
  //figures : figures
  figures
};

console.log(dictionary.figures);   // 10