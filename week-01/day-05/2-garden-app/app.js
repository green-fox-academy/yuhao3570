'use strict';

const Plant = require('./plant');
const Garden = require('./garden');

let garden = new Garden();

garden.addFlower(new Plant('yellow', 0, 0.75, 5));
garden.addFlower(new Plant('blue', 0, 0.75, 5));

garden.addTree(new Plant('purple', 0, 0.4, 10));
garden.addTree(new Plant('orange', 0, 0.4, 10));

garden.print();
garden.water(20);
garden.water(70);