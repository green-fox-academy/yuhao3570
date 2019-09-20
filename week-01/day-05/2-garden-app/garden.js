'use strict';
const Plant = require('./plant');

class Garden{
    constructor(){
        this.trees = [];
        this.flowers = [];
    }

    water(amount){
        console.log(`Watering with ${amount}`);
        this.trees.forEach(tree => {
            if(tree.needWater){
                tree.addWater(amount);
            }
        })

        this.flowers.forEach(flower => {
            if(flower.needWater){
                flower.addWater(amount);
            }
        })
        this.print();
    }

    print(){
        this.flowers.forEach(flower => {
            if(flower.needWater){
                console.log(`The ${flower.color} Flower needs water`);
            }
            else{
                console.log(`The ${flower.color} Flower doesn't need water`);
            }
        })

        this.trees.forEach( tree => {
            if(tree.needWater){
                console.log(`The ${tree.color} Tree needs water`);
            }
            else{
                console.log(`The ${tree.color} Tree doesn't need water`);
            }
        })
        console.log('\n');
    }

    addFlower(flower){
        this.flowers.push(flower);
    }

    addTree(tree){
        this.trees.push(tree);
    }
}

module.exports = Garden;