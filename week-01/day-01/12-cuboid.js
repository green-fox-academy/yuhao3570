'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

const s1 = 10;
const s2 = 20;
const s3 = 15;

console.log("Surface Area: ", 2*(s1*s2 + s1*s3 + s2*s3));
console.log("Volumn: ", s1*s2*s3);