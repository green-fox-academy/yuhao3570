'use strict';

// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`

let aj = [3, 4, 5, 6, 7];

console.log(aj.reverse());

let temp = [];

for(let i = 0; i<aj.length; i++){
    temp.push(aj[i]);
}

console.log(temp);

