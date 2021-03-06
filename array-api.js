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
  const fruits = 'π₯­, π, π, π';
  const result = fruits.split(',');
  // split μ λλ²μ§Έ μΈμλ limit 
  console.log(result);
}

// Q3. make this array look like this : [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // λ°°μ΄μμ²΄λ₯Ό λ³νμν€κ³  λ¦¬ν΄λ κ°λ λ³νλλ€. 
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // const result = array.splice(0, 2); // λ°°μ΄ μμ²΄μμ λ°μ΄ν°λ₯Ό μ­μ  
  // console.log(result); // [1, 2]
  // console.log(array);   // [3, 4,  5]
  // splice λ₯Ό μ¬μ©νκ² λλ©΄ μνλ result κ° λμ€μ§ μλλ€

  const result = array.slice(2, 5);
  // last indexλ λ°°μ λμ΄μ§λ―λ‘ λ§μ§λ§ index + 1 μ μ μ΄μΌ νλ€. 
  console.log(result);  // [3, 4, 5]
  console.log(array); // [1, 2, 3, 4, 5]
  // λ°°μ΄ μμ²΄λ μ‘΄μ¬νλ©΄μ μ λ°°μ΄μ λ§λ λ€. 
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
  console.log(result); // true , μ‘°κ±΄μ΄ νλ μ΄μμ΄λΌλ λ§μ‘± νλ€λ©΄ true return

  const result2 = students.every(student => student.score > 50);
  console.log(result2); // false, μ‘°κ±΄μ΄ νλλΌλ λ§μ‘±νμ§ μλλ€λ©΄ false
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