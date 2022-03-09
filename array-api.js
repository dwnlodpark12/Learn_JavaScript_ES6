// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];

  // my answer
  let string = '';
  for(let fruit of fruits) {
    string += fruit;
  }
  console.log(string);

  // array api
  const result = fruits.join('|');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🥭, 🍇, 🍎, 🍑';
  const result = fruits.split(',');
  // split 의 두번째 인자는 limit 
  console.log(result);
}

// Q3. make this array look like this : [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // 배열자체를 변환시키고 리턴된 값도 변화된다. 
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // const result = array.splice(0, 2); // 배열 자체에서 데이터를 삭제 
  // console.log(result); // [1, 2]
  // console.log(array);   // [3, 4,  5]
  // splice 를 사용하게 되면 원하는 result 가 나오지 않는다

  const result = array.slice(2, 5);
  // last index는 배제되어지므로 마지막 index + 1 을 적어야 한다. 
  console.log(result);  // [3, 4, 5]
  console.log(array); // [1, 2, 3, 4, 5]
  // 배열 자체도 존재하면서 새 배열을 만든다. 
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this. age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 72),
];

// Q5. find a student with the score 90
{
  const result = students.find(student => student.score == 90);
  console.log(result);
}

// Q6. make an array of enrolled students 
{
  const result = students.filter(student => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// return should be: [45, 80, 90, 66, 72]
{
  const result = students.map(student => student.score); 
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some(student => student.score < 50);
  console.log(result); // true , 조건이 하나 이상이라도 만족 한다면 true return

  const result2 = students.every(student => student.score > 50);
  console.log(result2); // false, 조건이 하나라도 만족하지 않는다면 false
}
// Q9. compute students' average score *************** 
{
  // reduce 
  const result = students.reduce((prev, curr) => {
    // console.log(prev);
    // console.log(curr);

    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores 
// result should be : '45, 66, 72, 80, 70'
{
  const result = students
    .map(student => student.score)
    .filter(score => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be : '45, 66, 72, 80, 90'
{
  const result = students
    .map(student => student.score)
    .sort().join();
  console.log(result);
}