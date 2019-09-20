'use strict';

// Exercise: https://github.com/green-fox-academy/jsa-shenzhen-2019-syllabus/blob/master/teaching-materials/inheritance/aircraft-carrier/README.md

const Aircraft = require('./aircraft');
const Carrier = require('./carrier');

let carrier1 = new Carrier(70, 5000);
let carrier2 = new Carrier(25, 2000);
let carrier3 = new Carrier(1000, 0);

carrier1.add(new Aircraft('F16'));
carrier1.add(new Aircraft('F35'));
carrier1.add(new Aircraft('F16'));
carrier1.add(new Aircraft('F16'));
carrier1.add(new Aircraft('F35'));
carrier1.add(new Aircraft('F16'));

carrier2.add(new Aircraft('F16'));
carrier2.add(new Aircraft('F35'));
carrier2.add(new Aircraft('F16'));
carrier2.add(new Aircraft('F35'));
carrier2.add(new Aircraft('F16'));


console.log('---------Test getStatus()-----------')
carrier3.getStatus()
carrier1.getStatus()


console.log('---------Test fill()-----------')
console.log('1: with enough storage');
carrier1.fill();
carrier1.getStatus();
console.log('2: when strage is not enough')
carrier2.fill();
carrier2.getStatus();

console.log('---Test Fight----');
carrier1.fight(carrier2);
console.log('Carrier ONE after fight');
carrier1.getStatus();
console.log('Carrier Two after fight');

carrier2.getStatus();