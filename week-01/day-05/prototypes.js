'use strict';

// object.create() : creates another instance of an obj

let animal = {
    color: 'black',
    name: 'zebra'
  }
  
  let obj = Object.create(animal);
  
  console.log(`obj:`, obj)
  console.log(`obj.__proto__:`, obj.__proto__);
  console.log(`obj.__proto__.__proto__:`, obj.__proto__.__proto__);
  console.log(`obj.__proto__.__proto__.__proto__:`, obj.__proto__.__proto__.__proto__);
  console.log(obj.hasOwnProperty('name'));
  
  
  console.log(obj.isPrototypeOf({}));
  console.log(obj.isPrototypeOf(obj));
  console.log(obj.isPrototypeOf(animal));
  console.log(obj.isPrototypeOf(Object));
  console.log(animal.isPrototypeOf(obj));
  console.log(animal.__proto__.isPrototypeOf(animal));
  console.log(animal.__proto__)
  
  