'use strict';

const students = [
    {name: 'Theodor', age: 3, candies: 2},
    {name: 'Paul', age: 9.5, candies: 2},
    {name: 'Mark', age: 12, candies: 5},
    {name: 'Peter', age: 7, candies: 3},
    {name: 'Olaf', age: 12, candies: 7},
    {name: 'George', age: 10, candies: 1}
]
  
// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether
function totalCandies(students){
    let sum = 0;
    students.forEach((e) => {
        sum += e.candies;
    })
    console.log(`total ${sum} candies.`);
}
totalCandies(students);

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candie
function total(students){
    let sum = 0;
    students.forEach((e) => {
        if(e.candies < 5){
            sum += e.age;
        }
    })
    console.log(`sum of the age of people who have less than 5 candies is ${sum}`);
}

total(students);