'use strict';

const Animal = require('./04-animal');
/*
Reuse your Animal class
Create a Farm class
    it has list of Animals
    it has slots which defines the number of free places for animals
    breed() -> creates a new animal if there's place for it
    slaughter() -> removes the least hungry animal
*/

class Farm{
    constructor(){
        this.animals = [];
        this.slots = 100;
    }

    bread(hunger = 50, thirst= 50){
        if(this.slots >= 1){
            this.animals.push(new Animal(hunger, thirst));
        }
    }

    slaughter(){
        let min = this.animals.reduce((min, ani) => ani.hunger < min ? ani.hunger : min, this.animals[0].hunger);
        
        for(let [index, animal] of this.animals.entries()){
           if(animal.hunger === min){
                this.animals.splice(index, 1);
                break;
           }
        }
        // kill all least hunger animals 
        // this.animals = this.animals.filter(ani => ani.hunger != min);
    }
}

let farm = new Farm();

farm.animals.push(new Animal(100, 20));
farm.animals.push(new Animal(15, 20));
farm.animals.push(new Animal(150, 20));
farm.animals.push(new Animal());
farm.animals.push(new Animal(800, 20));
farm.animals.push(new Animal(70, 20));
farm.animals.push(new Animal(180, 20));
farm.animals.push(new Animal(10, 20));

console.log(farm);
farm.bread();
console.log(farm);
farm.slaughter();
farm.slaughter();
farm.slaughter();

console.log(farm);