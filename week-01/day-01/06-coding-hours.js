'use strict';

const daily_code_hours = 6;
const workdaysInSemester = 17*5;

console.log("total hrs spent on coding: " + daily_code_hours*workdaysInSemester);

console.log("Percentage of coding: ", (5*6/52 * 100).toFixed(2) + '%');