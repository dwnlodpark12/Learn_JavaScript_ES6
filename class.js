'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance
// 기존에 존재하던 prototype에 기반하여 재가공 한 것

// 1. Class declarations
// 클래스 선언
class Person {
  // constructor 생성자
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
    // 여기서의 this는 '생성된 Object'
  }
}

// Object 생성
const hyerin = new Person('hyerin', 20);
console.log(hyerin.name); // hyerin
console.log(hyerin.age); // 20
hyerin.speak(); // hyerin: hello!

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    // get 이라는 keyword를 이용하여 값을 return
    return this._age;
    // constructor의 this.age를 get
  }

  set age(value) {
    // set 이라는 keyword를 이용하여 값을 설정
    // 값을 설정하기 때문에 value 값 필요 

    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value; // 삼항연산자
    // constructor의 age 에서 setter 호출
    // call stack 방지를 위하여 get 과 set 의 변수의 이름을 약간 다르게 한다 (주로 underBar)
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
  publicField = 2;
  #privateField = 0;
  // # : class 내부에서만 값이 보여지고 접근되고 변경 가능 
}
const experiment = new Experiment();
console.log(experiment.publicField);    // 2
console.log(experiment.privateField);   // undefined

// 4. Static properties and methods
// Too soon!
// static은 Object 마다가 아니라 class 자체에 붙어있기 때문에 
// 들어오는 데이터에 상관없이 공통적으로 class 에서 쓸 수 있다면 사용가능! 
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher); // undefined
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding

// 상속 & 다양성
// 5. Inheritance - 상속
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// extends 라는 키워드를 이용하여 shape class를 연장! - 다양성
class Rectangle extends Shape {}

class Triangle extends Shape {
  // overWriting
  draw() {
    super.draw(); // 부모의 draw() 함수 호출
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// class로 만들어진 함수 인지 아닌지 판단하는 method
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // 상속함 true
console.log(triangle instanceof Object); // class 내에 있는 Object 이기 때문에 true
console.log(triangle.toString());

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj);

// this, 바인딩, closer
