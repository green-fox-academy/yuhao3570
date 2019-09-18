'use strict';

let product = new Map([
    ['Eggs', 200],
    ['Milk', 200],
    ['Fish', 400],
    ['Apples', 150],
    ['Bread', 50],
    ['Chicken', 550]
]);

//Which products cost less than 201? (just the name)
let less = "";
for(let [item, price] of product){
    if(price < 201){
        less += item +" ";
    }
}
console.log(less);


//Which products cost more than 150? (name + price)
let more = "";
for(let entry of product){
    if(entry[1]> 150){
        more += entry.join(" ") + " ";
    }
}
console.log(more);