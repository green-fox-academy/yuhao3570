'use strict';

let products = new Map([
    ['Milk', 1.07],
    ['Rice', 1.59],
    ['Eggs', 3.14],
    ['Cheese', 12.60],
    ['Chicken Breasts', 9.40],
    ['Apples', 2.31],
    ['Tomato', 2.58],
    ['Potato', 1.75],
    ['Onion', 1.10]
]);

let bob = new Map([
    ['Milk', 3],
    ['Rice', 2],
    ['Eggs', 2],
    ['Cheese', 1],
    ['Chicken Breasts', 4],
    ['Apples', 1],
    ['Tomato', 2],
    ['Potato', 1]
]);

let alice = new Map([
    ['Rice', 1],
    ['Eggs', 5],
    ['Chicken Breasts', 2],
    ['Apples', 1],
    ['Tomato', 10]
]);

// How much does Bob pay?
let bobTotal = 0;
for(let bobEntry of bob){
    bobTotal += bobEntry[1] * products.get(bobEntry[0]);
}
console.log(bobTotal);

// How much does Alice pay?
let aliceTotal = 0;
for(let aliceEntry of alice){
    aliceTotal += aliceEntry[1] * products.get(aliceEntry[0]);
}
console.log(aliceTotal);

// Who buys more Rice?
if(!bob.has("Rice")){
    bob.set("Rice", 0);
    console.log("Bob did not buy Rice!");
}

if(!alice.has("Rice")){
    alice.set("Rice", 0);
    console.log("Alice did not buy Rice!");
}

if(bob.has('Rice') && alice.has('Rice')){
    if(bob.get('Rice')>alice.get('Rice')){
        console.log("Bob bought more Rice!");
    }else if(bob.get('Rice')>alice.get('Rice')){
        console.log("Alice bought more Rice!");
    }else{
        console.log("They bought same amount of Rice!");
    }
}

// Who buys more Potato?
if(!bob.has("Potato")){
    bob.set("Potato", 0);
    console.log("Bob did not buy Potato!");
}

if(!alice.has("Potato")){
    alice.set("Potato", 0);
    console.log("Alice did not buy Potato!");
}

if(bob.has('Potato') && alice.has('Potato')){
    if(bob.get('Potato')>alice.get('Potato')){
        console.log("Bob bought more Potato!");
    }else if(bob.get('Potato')>alice.get('Potato')){
        console.log("Alice bought more Potato!");
    }else{
        console.log("They bought same amount of Potato!");
    }
}

// Who buys more different products?
    //Remove products with amount 0
bob.forEach((item, amount) =>{
    if(amount === 0){
        bob.delete(item);
    }
})

alice.forEach((amount, item) =>{
    if(amount === 0){
        alice.delete(item);
    }
})

let differents = 0;
let bobList = Array.from(bob.keys());
let aliceList = Array.from(alice.keys());

for(let [item, amount] of bob){
    if(!aliceList.includes(item)){
        differents += amount;
    }
}

for(let [item, amount] of alice){
    if(!bobList.includes(item)){
        differents += amount;
    }
}
console.log("Total different number of products: ", differents);

// Who buys more products? (piece)
let bobCount = Array.from(bob.values()).reduce((a, b) => a + b);
let aliceCount = Array.from(alice.values()).reduce((a, b) => a + b);
if(bobCount > aliceCount){
    console.log("Bob bought more products!");
}else if(bobCount < aliceCount){
    console.log("Alice bought more products!");
}else{
    console.log("They bought same amount of products!");
}