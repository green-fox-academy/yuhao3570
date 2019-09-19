'use strict';

/*
 Create a Station and a Car classes
Station
    gasAmount
    refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
    gasAmount
    capacity
create constructor for Car where:
    initialize gasAmount -> 0
    initialize capacity -> 100
*/

class Station{
    constructor(gasAmount = 1000000){
        this.gasAmount = gasAmount;
    }
    refill(car){
        this.gasAmount -= car.capacity;
        car.gasAmount = car.capacity;
    }
}

class Car{
    constructor(gasAmount = 0, capacity = 100){
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }
}

let car = new Car();
let station = new Station();

console.log(station, car);
station.refill(car);
console.log(station, car);