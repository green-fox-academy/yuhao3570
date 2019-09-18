'use strict';
// Create a map with the following key-value pairs.
let product = new Map([
    ['Eggs', 200],
    ['Milk', 200],
    ['Fish', 400],
    ['Apples', 150],
    ['Bread', 50],
    ['Chicken', 550]
]);

// How much is the fish?
console.log(product.get('Fish'));

// What is the most expensive product?
let [key, value] = product.entries().next().value;
for(let [item, price] of product){
    console.log(item, price);
    if(price > value){
        [key, value] = [item, price];
    }
}
console.log("Most expensive product is: ", key);

// What is the average price?
console.log(Array.from(product.values()).reduce((a, b)=>a+b)/6);

// How many products' price is below 300?
let counter = 0;
Array.from(product.values()).forEach((a)=>{
    if(a < 300){
        counter++;
    }
})
console.log(counter);

// Is there anything we can buy for exactly 125?
console.log(Array.from(product.values()).includes(125));

// What is the cheapest product?
[key, value] = product.entries().next().value;
for(let [item, price] of product){
    console.log(item, price);
    if(price < value){
        [key, value] = [item, price];
    }
}
console.log('Cheapest product is: ', key);
