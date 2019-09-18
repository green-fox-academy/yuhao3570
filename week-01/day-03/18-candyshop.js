'use strict';

const shop_items = ["Cupcake", 2, "Brownie", false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

module.exports = sweets;

function sweets(shop_items){
    shop_items[1] = "Crossiant";
    shop_items[3] = "Ice Cream";
}

sweets(shop_items);
console.log(shop_items);