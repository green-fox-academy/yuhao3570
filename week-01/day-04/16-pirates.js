'use strict';

class Pirate{

    static pirateCount = 0;
    static remainingPirate = 0;

    constructor(){
        // die if drunk level is 100, every pirate is born half drunk...
        this.name = 'Pirate ' + Pirate.pirateCount;
        this.drunkLevel = drunkLevel;
        this.drinks = drinks;
        this.alive = true;
        Pirate.pirateCount++;
        Pirate.remainingPirate++;
    }

    drinkSomeRum(){
        this.drinks++;
        this.drunkLevel += 10; 
        if(this.drunkLevel >= 100){
            this.die();
        }
    }
    
    howsItGoingMate(){
        if(this.alive){
            console.log(
                drinks >= 5 ? 
                "Arghh, I'ma Pirate. How d'ya d'ink its goin?" 
                : "Pour me anudder!"
            );
        }else{
            this.deathMsg();
        }
    }

    die(){
        this.alive = false;
        Pirate.remainingCount--;
        this.deathMsg;
    }

    deathMsg(){
        console.log(`${this.name} is dead, buried under the Howling Abyss`);
    }

    brawl(pirate){
        if(pirate.alive && this.alive){
           switch([1, 2, 3][Math.floor(Math.random() * 3)]) {
                case 1:
                    this.die();
                    console.log(`${pirate.name} won! ${this.name} died!`);
                    break;
                case 2:
                    this.die();
                    console.log(`${this.name} won! ${pirate.name} died!`);
                    break;
                default:
                    this.die();
                    pirate.die();
                    console.log("Both died!");
                    break;
           }
        }else{
            console.log("NOT the Pirates of the Caribbean! Can not fight death.")
        }
    }
}

let p1 = new Pirate();
let p2 = new Pirate();

let p3 = new Pirate();
let p4 = new Pirate();

let p5 = new Pirate();
let p6 = new Pirate();
console.log(p3);