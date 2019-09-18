'use strict';

'use strict';

const students = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
]

console.log(students.length);
// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
function more(students){
    students.forEach( e => {
        if(e.candies >4){
            console.log(e.name);
        } 
    });
}

more(students);

// create a function that takes a list of students and logs: 
//  - how many candies they have in average
function avgCandies(students){
    let totalCandies = 0;
    students.forEach( e => {
        totalCandies += e.candies;
    })
    console.log('average candies is: ', totalCandies / students.length);
}

avgCandies(students);