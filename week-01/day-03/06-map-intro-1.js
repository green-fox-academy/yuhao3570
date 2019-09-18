'use strict';

// Create an empty map where the keys are integers and the values are characters
let myMap = new Map();

// Print out whether the map is empty or not
console.log(myMap);

// Add the following key-value pairs to the map
myMap.set(97, 'a');
myMap.set(98, 'b');
myMap.set(99, 'c');
myMap.set(65, 'A');
myMap.set(66, 'B');
myMap.set(67, 'C');

// Print all the keys
console.log(myMap.keys());

// Print all the values
console.log(myMap.values());

// Add value D with the key 68
myMap.set(68, 'D');

// Print how many key-value pairs are in the map
console.log(myMap.size);

// Print the value that is associated with key 99
console.log(myMap.get(99));

// Remove the key-value pair where with key 97
console.log(myMap.get(97));

// Print whether there is an associated value with key 100 or not
console.log(myMap.has(100));

// Remove all the key-value pairs
myMap.clear();
